$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot
Write-Host "=== Faircode homepage -> Firebase Hosting deploy ===" -ForegroundColor Cyan

function Refresh-Path {
  $env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User") + ";" + "$env:APPDATA\npm"
}

# 1) Node.js
Refresh-Path
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "[1/4] Installing Node.js LTS (winget)..." -ForegroundColor Yellow
  winget install -e --id OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
  Refresh-Path
  if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw "Node.js install failed. Install from https://nodejs.org and run again." }
} else { Write-Host "[1/4] Node.js found: $(node -v)" -ForegroundColor Green }

# 2) firebase-tools
if (-not (Get-Command firebase -ErrorAction SilentlyContinue)) {
  Write-Host "[2/4] Installing firebase-tools (npm)..." -ForegroundColor Yellow
  npm install -g firebase-tools
  Refresh-Path
} else { Write-Host "[2/4] firebase-tools found" -ForegroundColor Green }

# 3) Login (browser opens - approve with your Google account)
Write-Host "[3/4] Firebase login - approve in the browser window" -ForegroundColor Yellow
firebase login
if ($LASTEXITCODE -ne 0) { throw "firebase login failed" }

# 4) Deploy
Write-Host "[4/4] Deploying to faircode-home..." -ForegroundColor Yellow
firebase deploy --only hosting --project faircode-home
if ($LASTEXITCODE -ne 0) { throw "deploy failed" }

Write-Host ""
Write-Host "DONE  ->  https://faircode-home.web.app" -ForegroundColor Green
