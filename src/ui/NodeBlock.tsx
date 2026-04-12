import type { CSSProperties, ReactNode } from 'react'
import { useRenderCounter } from '../render/useRenderCounter'
import './NodeBlock.css'

type Accent = 'a' | 'b' | 'c' | 'neutral' | undefined

type NodeBlockProps = {
  /** Short node name shown on the block */
  title: string
  accent?: Accent
  /** Tiny badge: memo, ctx, store, … */
  badge?: string
  footer?: ReactNode
  children?: ReactNode
  countRenders?: boolean
  /** Nesting depth for left rail */
  depth?: number
}

export function NodeBlock({
  title,
  accent,
  badge,
  footer,
  children,
  countRenders = true,
  depth = 0,
}: NodeBlockProps) {
  const renders = useRenderCounter()
  const accentClass =
    accent === 'a'
      ? ' node-block--accent-a'
      : accent === 'b'
        ? ' node-block--accent-b'
        : accent === 'c'
          ? ' node-block--accent-c'
          : accent === 'neutral'
            ? ' node-block--accent-neutral'
            : ''

  return (
    <div
      className={`node-block${accentClass}`}
      style={{ '--depth': depth } as CSSProperties}
      data-depth={depth}
    >
      {countRenders && <div className="node-block__pulse" key={renders} aria-hidden />}
      <div className="node-block__rail" aria-hidden />
      <div className="node-block__header">
        <div className="node-block__titleRow">
          <span className="node-block__title">{title}</span>
          {badge ? <span className="node-block__tag">{badge}</span> : null}
        </div>
        <span className="node-block__renders" title="Render count">
          <span className="node-block__rendersLabel">R</span>
          <span className="node-block__rendersVal">{countRenders ? renders : '—'}</span>
        </span>
      </div>
      {(footer || children) && (
        <div className="node-block__body">
          {footer}
          {children && <div className="node-block__children">{children}</div>}
        </div>
      )}
    </div>
  )
}

export function NodeRow({ children }: { children: ReactNode }) {
  return <div className="node-block__row">{children}</div>
}
