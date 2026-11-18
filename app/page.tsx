import { Bow } from "@/components/bow"
import { TodoApp } from "@/components/todo-app"

export default function Page() {
  return (
    <div className="lace-dots min-h-svh bg-white dark:bg-background">
      <main className="mx-auto flex w-full max-w-md flex-col gap-6 px-5 pt-10 pb-12">
        <header className="flex flex-col items-center gap-1 text-center">
          <Bow className="size-20 drop-shadow-md" />
          <h1
            className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-6xl font-bold tracking-tight text-transparent italic"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Todo
          </h1>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <span aria-hidden className="twinkle text-primary">
              ✦
            </span>
            오늘의 할 일을 사랑스럽게 적어 보세요
            <span
              aria-hidden
              className="twinkle text-primary [animation-delay:1.2s]"
            >
              ✦
            </span>
          </p>
        </header>
        <TodoApp />
      </main>
    </div>
  )
}
