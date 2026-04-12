import { useRef } from 'react'

/**
 * Increments once per render pass (not per commit).
 * StrictMode is disabled in this lab so counts match intuition in dev.
 *
 * Do not pair this with local useState/useReducer in the same component for
 * decorative overlays — that would add synthetic re-renders and distort R.
 */
export function useRenderCounter(): number {
  const ref = useRef(0)
  ref.current += 1
  return ref.current
}
