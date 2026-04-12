import {
  createContext,
  memo,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { IconPlus } from '../ui/icons'
import { NodeBlock, NodeRow } from '../ui/NodeBlock'

type Shared = { value: number; bump: () => void }

const SharedCtx = createContext<Shared | null>(null)

function useShared(): Shared {
  const ctx = useContext(SharedCtx)
  if (!ctx) throw new Error('useShared outside provider')
  return ctx
}

const MemoMid = memo(function MemoMid({ children }: { children: ReactNode }) {
  return (
    <NodeBlock title="Mid" badge="memo">
      {children}
    </NodeBlock>
  )
})

const MemoMidDrill = memo(function MemoMidDrill({
  value,
  children,
}: {
  value: number
  children: ReactNode
}) {
  void value
  return (
    <NodeBlock title="Mid" badge="fwd">
      {children}
    </NodeBlock>
  )
})

function DeepLeafContext() {
  const { value, bump } = useShared()
  return (
    <NodeBlock title="Leaf" accent="a" badge="ctx">
      <div className="lab-row">
        <span className="big-num">{value}</span>
        <button type="button" className="lab-iconBtn" aria-label="Bump" onClick={bump}>
          <IconPlus />
        </button>
      </div>
    </NodeBlock>
  )
}

type DrillLeafProps = { value: number; onBump: () => void }

function DeepLeafDrill({ value, onBump }: DrillLeafProps) {
  return (
    <NodeBlock title="Leaf" accent="a" badge="prop">
      <div className="lab-row">
        <span className="big-num">{value}</span>
        <button type="button" className="lab-iconBtn" aria-label="Bump" onClick={onBump}>
          <IconPlus />
        </button>
      </div>
    </NodeBlock>
  )
}

function ValueProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(0)
  const api = useMemo(
    () => ({
      value,
      bump: () => setValue((v) => v + 1),
    }),
    [value],
  )
  return (
    <SharedCtx.Provider value={api}>
      <NodeBlock title="Provider" accent="c" badge="ctx">
        <div className="lab-row">
          <span className="big-num">{value}</span>
          <button
            type="button"
            className="lab-iconBtn"
            aria-label="Bump"
            onClick={api.bump}
          >
            <IconPlus />
          </button>
        </div>
        {children}
      </NodeBlock>
    </SharedCtx.Provider>
  )
}

function PropDrillRoot() {
  const [value, setValue] = useState(0)
  return (
    <NodeBlock title="Root" accent="c" badge="prop">
      <div className="lab-row">
        <span className="big-num">{value}</span>
        <button
          type="button"
          className="lab-iconBtn"
          aria-label="Bump"
          onClick={() => setValue((v) => v + 1)}
        >
          <IconPlus />
        </button>
      </div>
      <MemoMidDrill value={value}>
        <DeepLeafDrill value={value} onBump={() => setValue((v) => v + 1)} />
      </MemoMidDrill>
    </NodeBlock>
  )
}

function ContextPath() {
  return (
    <ValueProvider>
      <MemoMid>
        <DeepLeafContext />
      </MemoMid>
    </ValueProvider>
  )
}

export function ContextBridgeDemo() {
  const [mode, setMode] = useState<'context' | 'drill'>('context')

  return (
    <>
      <div className="lab-dock">
        <div className="lab-seg" role="group" aria-label="Data path">
          <button
            type="button"
            className="lab-seg__btn"
            aria-pressed={mode === 'context'}
            onClick={() => setMode('context')}
          >
            Ctx
          </button>
          <button
            type="button"
            className="lab-seg__btn"
            aria-pressed={mode === 'drill'}
            onClick={() => setMode('drill')}
          >
            Prop
          </button>
        </div>
      </div>
      <NodeRow>{mode === 'context' ? <ContextPath /> : <PropDrillRoot />}</NodeRow>
    </>
  )
}
