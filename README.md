# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

아래 명령은 macOS·Linux 터미널과 Windows PowerShell에서 똑같이 쓸 수 있습니다.

### 1. 필요한 도구 설치

| 도구    | 버전                 | 확인 명령        |
| ------- | -------------------- | ---------------- |
| Git     | 아무 최신 버전       | `git --version`  |
| Node.js | 20.9 이상 (LTS 권장) | `node --version` |
| bun     | 1.3 이상             | `bun --version`  |

- Node.js: https://nodejs.org 에서 LTS 버전을 설치합니다. bun으로 스크립트를 실행해도 Next.js는 Node.js 위에서 돌기 때문에 꼭 필요합니다.
- bun: 운영체제에 맞는 명령으로 설치합니다. 설치한 뒤에는 터미널을 새로 열어야 `bun` 명령이 잡힙니다.

  macOS·Linux:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

  Windows PowerShell:

  ```powershell
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```

세 확인 명령이 모두 버전을 출력하면 준비가 끝났습니다.

### 2. 저장소 받기

```bash
git clone https://github.com/neah1231/todo-tutorial.git
cd todo-tutorial
```

### 3. 의존성 설치

```bash
bun install
```

`node_modules` 폴더가 생기고 마지막 줄에 `... packages installed`가 나오면 성공입니다. 따로 만들어야 할 `.env` 파일은 없습니다.

### 4. 개발 서버 실행

```bash
bun dev
```

`✓ Ready`가 나오면 브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다. 첫 접속은 컴파일 때문에 수십 초 걸릴 수 있습니다. 서버는 터미널에서 `Ctrl + C`로 끕니다.

3000번 포트를 이미 다른 프로그램이 쓰고 있으면 포트를 바꿔서 띄웁니다.

```bash
bun dev --port 3203
```

### 5. 잘 되는지 확인 (선택)

코드를 고치기 전에 아래 명령이 모두 오류 없이 끝나는지 확인해 두면 좋습니다.

```bash
bun run lint       # ESLint 검사
bun run typecheck  # 타입 검사 (tsc --noEmit)
bun run test       # 테스트 (Vitest)
bun run build      # 프로덕션 빌드
```

## 자주 쓰는 스크립트

| 명령                 | 하는 일                                                                |
| -------------------- | ---------------------------------------------------------------------- |
| `bun dev`            | 개발 서버 실행 (코드를 고치면 바로 반영)                               |
| `bun run build`      | 프로덕션 빌드                                                          |
| `bun run start`      | 빌드 결과 실행 (`bun run build`를 먼저 해야 함, `--port`도 쓸 수 있음) |
| `bun run lint`       | ESLint 검사                                                            |
| `bun run typecheck`  | 타입 검사                                                              |
| `bun run test`       | 테스트 한 번 실행                                                      |
| `bun run test:watch` | 파일이 바뀔 때마다 테스트 다시 실행                                    |
| `bun run format`     | Prettier로 `.ts`·`.tsx` 파일 포맷팅 (파일을 직접 고침)                 |

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button"
```
