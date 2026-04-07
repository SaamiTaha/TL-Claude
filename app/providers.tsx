'use client'

export function Providers({ children }: { children: React.ReactNode }) {
  // PostHog will be wired in Phase 2
  return <>{children}</>
}
