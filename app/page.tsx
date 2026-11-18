import { TodoApp } from "@/components/todo-app"

export default function Page() {
  return (
    <div className="min-h-svh bg-gradient-to-br from-primary/15 via-background to-background">
      <main className="mx-auto flex w-full max-w-md flex-col gap-6 px-5 pt-16 pb-12">
        <header className="flex flex-col gap-1">
          <h1 className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
            Todo
          </h1>
          <p className="text-sm text-muted-foreground">
            오늘 할 일을 가볍게 적어 보세요
          </p>
        </header>
        <TodoApp />
      </main>
    </div>
  )
}
