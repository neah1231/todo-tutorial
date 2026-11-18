import type { Metadata } from "next"
import Link from "next/link"

import { Bow } from "@/components/bow"

export const metadata: Metadata = {
  title: "사용법 · todo",
  description: "Todo 앱에서 할 일을 추가하고 관리하는 방법을 안내합니다.",
}

const STEPS: { emoji: string; title: string; body: React.ReactNode }[] = [
  {
    emoji: "✏️",
    title: "할 일 추가하기",
    body: (
      <>
        맨 위 입력칸에 할 일을 적고 <Kbd>Enter</Kbd>를 누르세요. 새 할 일은
        목록 맨 위에 붙고, 보기는 &lsquo;전체&rsquo;로 돌아갑니다. 빈 칸은
        추가되지 않아요.
      </>
    ),
  },
  {
    emoji: "✅",
    title: "완료 표시하기",
    body: (
      <>
        할 일 왼쪽의 동그란 체크박스를 누르면 완료로 바뀌고 줄이 그어집니다. 한
        번 더 누르면 다시 진행중이 됩니다. 위쪽 분홍 막대는 완료한 비율을
        보여줘요.
      </>
    ),
  },
  {
    emoji: "📝",
    title: "내용 고치기",
    body: (
      <>
        할 일 글자를 <strong>더블클릭</strong>하면 수정칸이 열립니다.{" "}
        <Kbd>Enter</Kbd>를 누르거나 다른 곳을 클릭하면 저장되고,{" "}
        <Kbd>Esc</Kbd>를 누르면 취소됩니다. 내용을 모두 지우면 원래 글이
        그대로 남아요.
      </>
    ),
  },
  {
    emoji: "🗑️",
    title: "지우기",
    body: (
      <>
        할 일 오른쪽의 휴지통 버튼으로 하나씩 지울 수 있습니다. 완료한 일이
        있으면 아래쪽에 <strong>완료한 일 지우기</strong> 버튼이 나타나, 완료한
        일을 한꺼번에 지울 수 있어요.
      </>
    ),
  },
  {
    emoji: "🔍",
    title: "골라 보기",
    body: (
      <>
        <strong>전체</strong> · <strong>진행중</strong> ·{" "}
        <strong>완료</strong> 탭으로 보고 싶은 할 일만 골라 볼 수 있습니다.
      </>
    ),
  },
  {
    emoji: "💾",
    title: "저장",
    body: (
      <>
        할 일은 지금 쓰는 브라우저에 자동으로 저장되어, 새로고침하거나 다시
        열어도 남아 있습니다. 다른 브라우저나 기기와는 공유되지 않아요. 같은
        브라우저의 다른 탭에서 바꾼 내용은 바로 반영됩니다.
      </>
    ),
  },
]

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded-md border border-primary/30 bg-background px-1.5 py-0.5 font-mono text-xs shadow-sm">
      {children}
    </kbd>
  )
}

export default function UsagePage() {
  return (
    <div className="lace-dots min-h-svh bg-white dark:bg-background">
      <main className="mx-auto flex w-full max-w-md flex-col gap-6 px-5 pt-10 pb-12">
        <header className="flex flex-col items-center gap-1 text-center">
          <Bow className="size-16 drop-shadow-md" />
          <h1
            className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-5xl font-bold tracking-tight text-transparent italic"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            How to use
          </h1>
          <p className="text-sm text-muted-foreground">
            Todo 앱 사용법을 차근차근 알려 드릴게요
          </p>
        </header>
        <div className="overflow-hidden rounded-3xl border-2 border-primary/25 bg-card/90 shadow-xl shadow-primary/15 backdrop-blur">
          <div aria-hidden className="lace-top" />
          <ol className="flex flex-col gap-3 p-5">
            {STEPS.map(({ emoji, title, body }) => (
              <li
                key={title}
                className="flex gap-3 rounded-2xl border-2 border-primary/20 bg-background p-4 shadow-sm"
              >
                <span aria-hidden className="text-2xl leading-none">
                  {emoji}
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">{title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div aria-hidden className="lace-bottom" />
        </div>
        <Link
          href="/"
          className="self-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:-translate-y-px"
        >
          🎀 할 일 적으러 가기
        </Link>
      </main>
    </div>
  )
}
