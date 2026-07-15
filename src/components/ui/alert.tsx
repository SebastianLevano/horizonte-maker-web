import { ReactNode } from "react";

type Tone = "success" | "error" | "info";

const STYLES: Record<Tone, { border: string; bg: string; text: string; icon: ReactNode }> = {
  success: {
    border: "border-success",
    bg: "bg-success/5",
    text: "text-success",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    ),
  },
  error: {
    border: "border-error",
    bg: "bg-error/5",
    text: "text-error",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.16A2 2 0 004.02 21h15.96a2 2 0 001.91-2.98L13.71 3.86a2 2 0 00-3.42 0z"
      />
    ),
  },
  info: {
    border: "border-border-strong",
    bg: "bg-surface",
    text: "text-text",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
};

export function Alert({ tone, children }: { tone: Tone; children: ReactNode }) {
  const s = STYLES[tone];
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`flex items-start gap-3 rounded-md border ${s.border} ${s.bg} px-4 py-3 text-sm ${s.text}`}
    >
      <svg
        className="mt-0.5 h-5 w-5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {s.icon}
      </svg>
      <span>{children}</span>
    </div>
  );
}
