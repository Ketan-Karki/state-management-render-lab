import { useRef } from 'react'

/**
 * Increments once per render pass (not per commit).
 * StrictMode is disabled in this lab so counts match intuition in dev.
 */
export function useRenderCounter(): number {
  const ref = useRef(0)
  ref.current += 1
  return ref.current
}
