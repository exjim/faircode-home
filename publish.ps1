$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot
Write-Host "=== Faircode homepage -> GitHub (exjim/faircode-home) + Firebase ===" -ForegroundColor Cyan
$env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User") + ";" + "$env:APPDATA\npm"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "[0] Installing Git (winget)..." -ForegroundColor Yellow
  winget install -e --id Git.Git --accept-source-agreements --accept-package-agreements
  $env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User")
  if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw "Git install failed. Install from https://git-scm.com and run again." }
}

if (-not (git config user.name))  { git config user.name  "Jim Kim" }
if (-not (git config user.email)) { git config user.email "jim@faircode.co.kr" }

Write-Host "[1/4] Sync with GitHub..." -ForegroundColor Yellow
git fetch origin
git status -sb

Write-Host "[2/4] Commit changes..." -ForegroundColor Yellow
git add -A
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git commit -m "Add split landing page (IoT / Trade), move site to main.html, Firebase hosting config"
} else { Write-Host "  nothing new to commit" }

Write-Host "[3/4] Push to GitHub (a browser sign-in may open the first time)..." -ForegroundColor Yellow
git pull --rebase origin main
git push origin HEAD:main
if ($LASTEXITCODE -ne 0) { throw "git push failed" }

Write-Host "[4/4] Deploy to Firebase (www.faircode.co.kr)..." -ForegroundColor Yellow
if (-not (Get-Command firebase -ErrorAction SilentlyContinue)) { npm install -g firebase-tools; $env:Path += ";$env:APPDATA\npm" }
firebase deploy --only hosting --project faircode-home
if ($LASTEXITCODE -ne 0) { throw "deploy failed" }

Write-Host ""
Write-Host "DONE  ->  GitHub: https://github.com/exjim/faircode-home   Site: https://www.faircode.co.kr" -ForegroundColor Green
