# Invisible AI-Bridge

> 사용자의 개입 없이 비정형 데이터를 AI 최적화 규격(AI-Readable Standard)으로 자동 정규화하여 학습 효율을 극대화하는 **지능형 데이터 가교 플랫폼**

인간의 학습 방식과 AI의 데이터 처리 방식 간의 격차를 줄이기 위해, 비정형 데이터(교안, 필기 등)를 구조화된 지식 인덱스로 변환하여 **할루시네이션(Hallucination)을 억제**하고 **프롬프트 엔지니어링의 피로도를 근본적으로 해결**합니다.

---

## 핵심 기능 (Core Features)

### 1. Invisible Normalization
Zero-Learning Curve를 지향합니다. 사용자의 추가 입력이나 복잡한 프롬프트 없이 백엔드에서 비정형 데이터를 AI 최적화 규격으로 정규화하여 사용자 경험을 극대화합니다.

### 2. Protocol Conversion
PDF, 텍스트, 학습 로그 등을 **계층형 마크다운(Hierarchical Markdown)** 및 **구조화된 JSON 데이터**로 정규 변환합니다.

### 3. Entity Mapping
데이터 내 핵심 개념 간의 상관관계를 추출하여 AI가 즉각적으로 컨텍스트를 파악할 수 있는 **지식 인덱스**를 구축합니다.

### 4. Context Synchronization
AI가 사용자의 학습 자료를 장기 지식 구조로 완벽히 흡수하여 질문의 추상도와 상관없이 **매끄러운 맥락 유지**를 구현합니다.

---

## 🛠 기술 스택 (Tech Stack)

### Frontend
| 항목 | 내용 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |

### Backend
| 항목 | 내용 |
|------|------|
| Framework | FastAPI (Python 3.10+) |
| AI SDK | `google-genai` (Latest SDK) |
| AI Model | Gemini 2.5 Flash |

---

## ⚙️ 시작하기 (Getting Started)

### 1. 환경 변수 설정

프로젝트 루트 폴더와 `backend/` 폴더에 각각 환경 변수 파일을 생성하세요.  
상세 설정은 `.env.example` 파일을 참고하시기 바랍니다.

### 2. 백엔드 서버 실행 (FastAPI)

```bash
cd backend

# 가상환경 생성 및 활성화
python -m venv .venv
source .venv/Scripts/activate  # Windows (Git Bash)
# source .venv/bin/activate    # Mac/Linux

# 의존성 설치
pip install -r requirements.txt

# 서버 실행
python main.py
```

### 3. 프론트엔드 실행 (Next.js)

```bash
# 프로젝트 루트 폴더에서 실행
npm install
npm run dev
```

---

## 📂 프로젝트 구조 (Project Structure)

```
INVISIBLE-AI-BRIDGE/
├── .next/
├── backend/                      # FastAPI 기반 AI 로직 및 데이터 정규화 엔진
│   ├── __pycache__/
│   ├── .venv/
│   ├── .gitignore
│   ├── main.py
│   └── requirements.txt
├── node_modules/
├── public/
│   └── data/
│       └── sample-data.json
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                          # Next.js 프론트엔드 소스 코드
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
│   └── components/               # UI 컴포넌트
│       ├── BackendStatus.tsx
│       ├── Converter.tsx
│       ├── Footer.tsx
│       └── Header.tsx
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next-sitemap.config.js
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
