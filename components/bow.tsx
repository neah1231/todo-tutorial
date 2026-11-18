import { cn } from "@/lib/utils"

// 리본 장식. 색은 테마의 primary 를 따른다.
export function Bow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 80"
      className={cn("fill-primary", className)}
    >
      {/* 늘어진 리본 끝 */}
      <path d="M54 46 L38 77 L54 69 L61 50 Z" className="fill-primary/70" />
      <path d="M66 46 L82 77 L66 69 L59 50 Z" className="fill-primary/70" />
      {/* 양쪽 고리 */}
      <path
        d="M60 40 C36 3 4 10 8 38 C11 68 40 70 60 40 Z"
        className="fill-primary/85"
      />
      <path
        d="M60 40 C84 3 116 10 112 38 C109 68 80 70 60 40 Z"
        className="fill-primary/85"
      />
      {/* 고리 안쪽 하이라이트 */}
      <path
        d="M52 38 C38 18 20 20 20 36"
        fill="none"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M68 38 C82 18 100 20 100 36"
        fill="none"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* 매듭 */}
      <ellipse cx="60" cy="41" rx="9" ry="11" />
      <ellipse cx="57" cy="37" rx="2.5" ry="4" fill="white" fillOpacity="0.5" />
    </svg>
  )
}
