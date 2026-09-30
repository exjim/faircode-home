/* ════════════════════════════════════════════════════════════════
   FAIRCODE 홈페이지 콘텐츠 파일 (content.js)
   ----------------------------------------------------------------
   · 제품/연혁/회사정보는 모두 이 파일 하나에서 관리합니다.
   · 직접 수정해도 되고, admin.html(관리자)에서 편집 후
     [content.js 내보내기] 로 이 파일을 통째로 교체해도 됩니다.
   · 제품 필드 설명
       id        : 고유 영문 ID (중복 금지)
       category  : healthcare | trading | export
       visible   : true 표시 / false 숨김
       image     : 이미지 경로(images/xxx.webp) 또는 data URI, 없으면 ""
       fit       : cover(사진을 칸에 꽉 채워 가운데 정렬) | contain(도면·캡처를 잘리지 않게)
       credit    : 사진 출처 표기 (상세창 하단에 작게 표시)
       mark      : 이미지가 없을 때 크게 보일 기호 (예: "Cu")
       badge     : 작은 라벨 (예: 특허 출원, 개발 중)
       tagline   : ★ 대표 멘트 — 카드와 상세창에 인용문으로 표시
       summary   : 카드에 보이는 한두 줄 소개
       detail    : 상세창 본문 (줄바꿈 가능)
       features  : 상세창 특징 목록 (배열)
   ════════════════════════════════════════════════════════════════ */
window.FC_CONTENT = {
  "company": {
    "name": {
      "ko": "페어코드 주식회사",
      "en": "Faircode Co., Ltd."
    },
    "email": "exschool@gmail.com",
    "phone": {
      "ko": "010-9004-7852",
      "en": "+82 10-9004-7852"
    },
    "address": {
      "ko": "경기도 성남시 분당구 스타트업브릿지",
      "en": "Startup Bridge, Bundang, Seongnam, Gyeonggi-do, Korea"
    }
  },
  "products": [
    {
      "id": "smart_ringer",
      "category": "healthcare",
      "visible": true,
      "image": "images/smart_ringer.webp",
      "fit": "contain",
      "credit": "",
      "mark": "IV",
      "badge": {
        "ko": "대표 제품",
        "en": "Flagship"
      },
      "name": {
        "ko": "스마트 링거 (IV 관리)",
        "en": "Smart Ringer (IV Mgmt)"
      },
      "tagline": {
        "ko": "수액이 끝나기 전에, 간호사가 먼저 압니다.",
        "en": "The nurse knows before the drip runs out."
      },
      "summary": {
        "ko": "IoT 센서 기반 수액 모니터링. QR 환자 ID 관리, 보안 코드 처리, 실시간 클라우드 알림.",
        "en": "IoT IV monitoring with QR patient ID, cloud alerts, and mobile app management."
      },
      "detail": {
        "ko": "수액 잔량과 주입 속도를 센서로 측정해 병동 스테이션과 모바일 앱으로 실시간 전송합니다. QR 코드로 환자를 식별하고, 이상 상황이 생기면 즉시 알림을 보냅니다.",
        "en": "Sensors track remaining volume and flow rate and send them in real time to the ward station and mobile app. Patients are identified by QR code, and any anomaly triggers an instant alert."
      },
      "features": {
        "ko": [
          "수액 잔량·속도 실시간 측정",
          "QR 기반 환자 ID 관리",
          "클라우드 알림 및 모바일 앱 연동"
        ],
        "en": [
          "Real-time volume and flow tracking",
          "QR-based patient ID",
          "Cloud alerts and mobile app"
        ]
      }
    },
    {
      "id": "smart_inhaler",
      "category": "healthcare",
      "visible": true,
      "image": "images/smart_inhaler.webp",
      "fit": "cover",
      "credit": "Photo: BrettMontgomery / Wikimedia Commons, CC BY-SA 4.0 (참고용 일반 흡입기 사진)",
      "mark": "",
      "badge": {
        "ko": "산학협력 · 2021",
        "en": "Univ. R&D · 2021"
      },
      "name": {
        "ko": "스마트 인헬러",
        "en": "Smart Inhaler"
      },
      "tagline": {
        "ko": "숨 쉬는 순간까지 기록하는 흡입기.",
        "en": "An inhaler that records every breath that matters."
      },
      "summary": {
        "ko": "기존 흡입기에 붙이는 IoT 모듈로 흡입 기록, 대기질, 복약 알림을 스마트폰 하나로 관리합니다.",
        "en": "A clip-on IoT module that brings dose logs, air quality and reminders together on your phone."
      },
      "detail": {
        "ko": "충북대학교 호흡기내과와 함께 2021년부터 개발한 스마트 인헬러입니다.\n환자가 쓰던 흡입기에 센서 모듈을 더해 언제, 몇 번 흡입했는지 자동으로 기록하고, 그날의 대기질 정보와 함께 스마트폰 앱에 보여 줍니다.\n복약을 놓치면 알림을 보내고, 위급할 때는 SOS 기능으로 보호자에게 알릴 수 있어 천식·COPD 환자의 자가 관리를 돕습니다.",
        "en": "A smart inhaler developed with Chungbuk National University's Department of Respiratory Medicine since 2021.\nA sensor module added to the patient's existing inhaler records when and how often each dose is taken, and shows it in a phone app alongside the day's air quality.\nMissed doses trigger a reminder, and an SOS function can alert a guardian, helping people with asthma or COPD manage their condition."
      },
      "features": {
        "ko": [
          "흡입 시각·횟수 자동 기록",
          "실시간 대기질 정보 연동",
          "복약 알림 · 복약 이력 관리",
          "SOS 보호자 알림",
          "충북대학교 호흡기내과 공동 개발"
        ],
        "en": [
          "Automatic dose time and count logging",
          "Live air-quality data",
          "Dose reminders and history",
          "SOS guardian alert",
          "Co-developed with Chungbuk Nat'l Univ."
        ]
      }
    },
    {
      "id": "smart_balance",
      "category": "healthcare",
      "visible": true,
      "image": "images/smart_balance.webp",
      "fit": "contain",
      "credit": "",
      "mark": "",
      "badge": {
        "ko": "재활",
        "en": "Rehab"
      },
      "name": {
        "ko": "스마트 밸런스",
        "en": "Smart Balance"
      },
      "tagline": {
        "ko": "집에서도 이어지는 보행 재활.",
        "en": "Walking rehab that continues at home."
      },
      "summary": {
        "ko": "무게 균형 30/50/100% 측정 가능한 자가 케어 스마트 보행 재활 솔루션. 근전도 센서 탑재.",
        "en": "Self-care walking rehab. Measures weight balance at 30/50/100% with an EMG sensor."
      },
      "detail": {
        "ko": "환자가 스스로 체중 부하를 30%, 50%, 100% 단계로 확인하며 훈련할 수 있는 보행 재활 솔루션입니다.",
        "en": "A gait-rehab solution that lets patients train while checking weight bearing at 30%, 50% and 100%."
      },
      "features": {
        "ko": [
          "체중 부하 3단계 측정",
          "근전도(EMG) 센서",
          "재활 기록 모니터링"
        ],
        "en": [
          "3-step weight-bearing check",
          "EMG sensor",
          "Rehab progress log"
        ]
      }
    },
    {
      "id": "smart_urine_bag",
      "category": "healthcare",
      "visible": true,
      "image": "images/smart_urine_bag.webp",
      "fit": "contain",
      "credit": "",
      "mark": "",
      "badge": {
        "ko": "EMR 연동",
        "en": "EMR-linked"
      },
      "name": {
        "ko": "스마트 소변 백",
        "en": "Smart Urine Bag"
      },
      "tagline": {
        "ko": "10분마다, 기록은 저절로.",
        "en": "Every ten minutes, recorded on its own."
      },
      "summary": {
        "ko": "EMR/CDIS 연동 IoT 소변 모니터링. 코인 배터리 약 180시간 사용, 10분마다 전송.",
        "en": "IoT urine monitoring linked to EMR/CDIS. About 180 hours on a coin cell, sent every 10 minutes."
      },
      "detail": {
        "ko": "소변량을 자동으로 측정해 병원 EMR·CDIS에 기록합니다. 수기 기록 부담을 줄이고 이상 변화를 빠르게 확인할 수 있습니다.",
        "en": "Measures urine output automatically and writes it to the hospital EMR/CDIS, reducing manual charting."
      },
      "features": {
        "ko": [
          "10분 주기 자동 전송",
          "코인 배터리 약 180시간",
          "EMR / CDIS 연동"
        ],
        "en": [
          "Auto upload every 10 min",
          "~180 h coin-cell battery",
          "EMR / CDIS integration"
        ]
      }
    },
    {
      "id": "uwb_positioning",
      "category": "healthcare",
      "visible": false,
      "image": "images/uwb_positioning.webp",
      "fit": "contain",
      "credit": "",
      "mark": "UWB",
      "badge": {
        "ko": "측위",
        "en": "Positioning"
      },
      "name": {
        "ko": "UWB 실내 측위",
        "en": "UWB Indoor Positioning"
      },
      "tagline": {
        "ko": "병원 안 모든 위치를 센티미터 단위로.",
        "en": "Every location in the hospital, to the centimeter."
      },
      "summary": {
        "ko": "센티미터 단위 실시간 환자·자산·의료진 추적. 삼성 UWB IP 통합 검토 중.",
        "en": "Centimeter-level real-time tracking for patients, assets and staff. Samsung UWB IP under review."
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "ai_hearing_aid",
      "category": "healthcare",
      "visible": false,
      "image": "images/ai_hearing_aid.jpg",
      "fit": "contain",
      "credit": "",
      "mark": "PSAP",
      "badge": {
        "ko": "개발 중",
        "en": "In development"
      },
      "name": {
        "ko": "AI 보청기 (PSAP)",
        "en": "AI Hearing Aid (PSAP)"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "주파수별 증폭, 노이즈 캔슬링, ICT 연동. 일반 전자제품 승인으로 판매 가능.",
        "en": "Frequency-specific amplification, noise canceling, ICT integration. Sold under general electronics approval."
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "workplace_safety",
      "category": "healthcare",
      "visible": true,
      "image": "images/workplace_safety.webp",
      "fit": "contain",
      "credit": "",
      "mark": "",
      "badge": {
        "ko": "산업 안전",
        "en": "Safety"
      },
      "name": {
        "ko": "산업 안전 시스템",
        "en": "Workplace Safety System"
      },
      "tagline": {
        "ko": "작업자의 손목에서 시작하는 안전.",
        "en": "Safety that starts on the worker's wrist."
      },
      "summary": {
        "ko": "웹 대시보드 + 스마트워치 기반 작업자 건강·위치 모니터링. GS인증 파트너사 협력.",
        "en": "Web dashboard and smartwatch monitoring of worker health and location. GS-certified partner."
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [
          "스마트워치 생체 신호",
          "작업자 위치 관제",
          "웹 대시보드"
        ],
        "en": [
          "Smartwatch vital signs",
          "Worker location view",
          "Web dashboard"
        ]
      }
    },
    {
      "id": "functional_pads",
      "category": "healthcare",
      "visible": true,
      "image": "images/functional_pads.webp",
      "fit": "contain",
      "credit": "",
      "mark": "",
      "badge": {
        "ko": "특허 출원 2024",
        "en": "Patent filed 2024"
      },
      "name": {
        "ko": "기능성 생리대",
        "en": "Functional Sanitary Pads"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "CRP 염증 지표, 텍사스산 유기농 면, 야자수 오일 생분해 포장재. 2024년 특허 출원.",
        "en": "CRP inflammation indicator, Texas organic cotton, biodegradable coconut-oil packaging. Patent filed 2024."
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "copper_cathode",
      "category": "trading",
      "visible": true,
      "image": "images/copper_cathode.webp",
      "fit": "cover",
      "credit": "Photo: ChrisFountain / Wikimedia Commons, CC BY-SA 3.0",
      "mark": "Cu",
      "badge": {
        "ko": "Grade A",
        "en": "Grade A"
      },
      "name": {
        "ko": "구리 음극판",
        "en": "Copper Cathode"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "Grade A 99.99% 이상 · 중동 / 칠레 / 페루 · 협상 가격",
        "en": "Grade A 99.99%+ · Middle East / Chile / Peru · Negotiable"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "copper_scrap",
      "category": "trading",
      "visible": true,
      "image": "images/copper_scrap.webp",
      "fit": "cover",
      "credit": "Photo: Lsgeeks / Wikimedia Commons, CC BY-SA 3.0",
      "mark": "Cu",
      "badge": {
        "ko": "스크랩",
        "en": "Scrap"
      },
      "name": {
        "ko": "구리 스크랩",
        "en": "Copper Scrap"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "Birch/Cliff · Berry · Candy 등 등급별 공급",
        "en": "Birch/Cliff · Berry · Candy grades available"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "aluminum",
      "category": "trading",
      "visible": true,
      "image": "images/aluminum.webp",
      "fit": "cover",
      "credit": "Photo: Saltaluminyum / Wikimedia Commons, CC BY-SA 4.0",
      "mark": "Al",
      "badge": {
        "ko": "",
        "en": ""
      },
      "name": {
        "ko": "알루미늄",
        "en": "Aluminum"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "잉곳 · 스크랩 · 합금 · 이란 / 이라크 / 터키",
        "en": "Ingot · Scrap · Alloy · Iran / Iraq / Turkey"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "zinc_lead",
      "category": "trading",
      "visible": true,
      "image": "images/zinc_lead.webp",
      "fit": "cover",
      "credit": "Photo: R. Henrik Nilsson / Wikimedia Commons, CC BY 4.0",
      "mark": "Zn",
      "badge": {
        "ko": "LME 연동",
        "en": "LME-linked"
      },
      "name": {
        "ko": "아연 · 납",
        "en": "Zinc & Lead"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "99.995% Pure · 중동 소싱 · LME 연동 가격",
        "en": "99.995% pure · Middle East sourcing · LME-linked pricing"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "uco",
      "category": "trading",
      "visible": true,
      "image": "images/uco.webp",
      "fit": "cover",
      "credit": "Photo: Tdorante10 / Wikimedia Commons, CC BY-SA 4.0",
      "mark": "UCO",
      "badge": {
        "ko": "바이오연료",
        "en": "Biofuel"
      },
      "name": {
        "ko": "UCO (폐식용유)",
        "en": "UCO (Used Cooking Oil)"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "바이오연료용 · 아시아 소싱 · 대용량 계약 가능",
        "en": "Biofuel grade · Asian sourcing · Bulk contracts"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "petrochemical",
      "category": "trading",
      "visible": true,
      "image": "images/petrochemical.webp",
      "fit": "cover",
      "credit": "Photo: Teemeah / Wikimedia Commons, CC BY-SA 3.0",
      "mark": "PE",
      "badge": {
        "ko": "",
        "en": ""
      },
      "name": {
        "ko": "석유화학 제품",
        "en": "Petrochemical Products"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "플라스틱 · 합성섬유 · 고무 · 의료기기 소재용",
        "en": "Plastics · Synthetic fibers · Rubber · Medical device materials"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "k_beauty",
      "category": "export",
      "visible": true,
      "image": "images/k_beauty.webp",
      "fit": "cover",
      "credit": "Photo: Shixart1985 / Wikimedia Commons, CC BY 2.0",
      "mark": "K",
      "badge": {
        "ko": "수출",
        "en": "Export"
      },
      "name": {
        "ko": "K-뷰티",
        "en": "K-Beauty"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "스킨케어 · 마스크팩 · 색조화장품 · 전세계 수출",
        "en": "Skincare · Masks · Cosmetics · Global export"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    },
    {
      "id": "health_supplements",
      "category": "export",
      "visible": true,
      "image": "images/health_supplements.webp",
      "fit": "cover",
      "credit": "Photo: Jernej Furman / Wikimedia Commons, CC BY 2.0",
      "mark": "HF",
      "badge": {
        "ko": "OEM·ODM",
        "en": "OEM/ODM"
      },
      "name": {
        "ko": "건강기능식품",
        "en": "Health Supplements"
      },
      "tagline": {
        "ko": "",
        "en": ""
      },
      "summary": {
        "ko": "홍삼 · 콜라겐 · 비타민 · OEM·ODM 가능",
        "en": "Red ginseng · Collagen · Vitamins · OEM/ODM"
      },
      "detail": {
        "ko": "",
        "en": ""
      },
      "features": {
        "ko": [],
        "en": []
      }
    }
  ],
  "history": [
    {
      "date": "2020.11",
      "title": {
        "ko": "페어코드 설립",
        "en": "Faircode founded"
      },
      "desc": {
        "ko": "스마트 헬스케어 IoT 솔루션과 글로벌 원자재 무역을 연결하는 비전으로 창립.",
        "en": "Founded to bridge IoT smart healthcare and global commodity trading."
      }
    },
    {
      "date": "2021.02",
      "title": {
        "ko": "스마트 IV 수액(IoT) 및 모니터링 시스템 개발",
        "en": "Smart IV drip (IoT) and monitoring system"
      },
      "desc": {
        "ko": "IoT 기반 수액 모니터링 시스템 '스마트 링거' 개발 — 모바일 앱 연동, QR 기반 환자 ID 관리, 실시간 클라우드 알림 구축.",
        "en": "Developed the Smart Ringer with mobile app, QR patient ID and real-time cloud alerts."
      }
    },
    {
      "date": "2021.04",
      "title": {
        "ko": "산학융합 R&D — 스마트 흡입기 개발",
        "en": "Industry-academia R&D: Smart Inhaler"
      },
      "desc": {
        "ko": "충북대학교 호흡기내과 협력으로 스마트 인헬러 프로젝트 착수.",
        "en": "Launched with Chungbuk National University, Dept. of Respiratory Medicine."
      }
    },
    {
      "date": "2021.08",
      "title": {
        "ko": "특허 검색 사이트 개발·구축 (충북대학교)",
        "en": "Patent search platform (Chungbuk Nat'l Univ.)"
      },
      "desc": {
        "ko": "충북대학교 경영학과 산학협력 과제로 특허 검색 플랫폼 개발 및 구축 완료.",
        "en": "Built and deployed a patent search platform with the Business Administration dept."
      }
    },
    {
      "date": "2021.10",
      "title": {
        "ko": "스마트 배액 시스템 개발 — 홍익대학교 협업",
        "en": "Smart drainage system with Hongik University"
      },
      "desc": {
        "ko": "홍익대학교 인력양성사업 연계, 스마트 배액 측정 장치 기획 및 개발 착수.",
        "en": "Started planning and development of a smart drainage device."
      }
    },
    {
      "date": "2022.02",
      "title": {
        "ko": "페어코드 R&D 센터 설립",
        "en": "Faircode R&D Center established"
      },
      "desc": {
        "ko": "IoT 제품 개발 가속화를 위해 사내 연구소 공식 설립.",
        "en": "Formal in-house lab to speed up IoT product development."
      }
    },
    {
      "date": "2022.06",
      "title": {
        "ko": "스마트 시티 캠퍼스 챌린지 참가",
        "en": "Smart City Campus Challenge"
      },
      "desc": {
        "ko": "장애인을 위한 실내외 위치 추적 솔루션으로 참가 — UWB 정밀 측위 기술 실증.",
        "en": "Indoor/outdoor location tracking for people with disabilities using UWB."
      }
    },
    {
      "date": "2023.04",
      "title": {
        "ko": "성모병원 겨자씨 3회 발표 — 스마트 배액 개발",
        "en": "Seoul St. Mary's Hospital presentation"
      },
      "desc": {
        "ko": "임상 파트너 대상 스마트 배액 시스템 프로토타입 발표 진행.",
        "en": "Presented the smart drainage prototype to clinical partners."
      }
    },
    {
      "date": "2023.07",
      "title": {
        "ko": "보청기 시스템 개발",
        "en": "Hearing device development"
      },
      "desc": {
        "ko": "PSAP 기반 개인 음향 증폭 제품 개발 착수 — AI 음성 처리, 주파수별 증폭, 노이즈 캔슬링 적용.",
        "en": "Started a PSAP with AI voice processing and frequency-specific amplification."
      }
    },
    {
      "date": "2024.02",
      "title": {
        "ko": "의사 창업 솔루션 개발 기획",
        "en": "Physician startup platform planning"
      },
      "desc": {
        "ko": "의료진 주도 디지털 헬스케어 창업 플랫폼 기획 시작.",
        "en": "Began planning a physician-led digital healthcare startup platform."
      }
    },
    {
      "date": "2024.11",
      "title": {
        "ko": "기능성 생리대 특허 출원",
        "en": "Patent filed: functional sanitary pads"
      },
      "desc": {
        "ko": "CRP 염증 지표, 텍사스산 유기농 면 상단시트, 야자수 오일 생분해 포장재 기능성 생리대 특허 출원.",
        "en": "CRP indicator, organic cotton top sheet and biodegradable coconut-oil packaging."
      }
    }
  ]
};
