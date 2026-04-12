import { memo, useState, type Dispatch, type SetStateAction } from 'react'
import { IconLift, IconLocal, IconPlus } from '../ui/icons'
import { NodeBlock, NodeRow } from '../ui/NodeBlock'

const BranchRight = memo(function BranchRight() {
  return (
    <NodeBlock title="Right" accent="b" badge="memo">
      <div className="lab-dotRow" aria-hidden>
        <span />
        <span />
        <span />
      </div>
    </NodeBlock>
  )
})

function CounterSubtree() {
  const [count, setCount] = useState(0)
  return (
    <NodeBlock title="Left" accent="a" badge="state">
      <div className="lab-row">
        <span className="big-num">{count}</span>
        <button
          type="button"
          className="lab-iconBtn"
          aria-label="Increment"
          onClick={() => setCount((c) => c + 1)}
        >
          <IconPlus />
        </button>
      </div>
      <NodeBlock title="Child" depth={1}>
        <div className="lab-dotRow" aria-hidden>
          <span />
        </div>
      </NodeBlock>
    </NodeBlock>
  )
}

type LiftedLeftProps = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

const LiftedLeftBranch = memo(function LiftedLeftBranch({
  count,
  setCount,
}: LiftedLeftProps) {
  return (
    <NodeBlock title="Left" accent="a" badge="props">
      <div className="lab-row">
        <span className="big-num">{count}</span>
        <button
          type="button"
          className="lab-iconBtn"
          aria-label="Increment"
          onClick={() => setCount((c) => c + 1)}
        >
          <IconPlus />
        </button>
      </div>
      <NodeBlock title="Child" depth={1}>
        <div className="lab-dotRow" aria-hidden>
          <span />
        </div>
      </NodeBlock>
    </NodeBlock>
  )
})

function ParentColocated() {
  return (
    <NodeBlock title="Parent" accent="neutral">
      <NodeRow>
        <CounterSubtree />
        <BranchRight />
      </NodeRow>
    </NodeBlock>
  )
}

function ParentLifted() {
  const [count, setCount] = useState(0)
  return (
    <NodeBlock title="Parent" accent="neutral" badge="owns">
      <NodeRow>
        <LiftedLeftBranch count={count} setCount={setCount} />
        <BranchRight />
      </NodeRow>
    </NodeBlock>
  )
}

export function ColocatedStateDemo() {
  const [lifted, setLifted] = useState(false)

  return (
    <>
      <div className="lab-dock">
        <div className="lab-switch" role="group" aria-label="State placement">
          <button
            type="button"
            className="lab-switch__opt"
            aria-pressed={!lifted}
            aria-label="Colocated"
            title="Colocated"
            onClick={() => setLifted(false)}
          >
            <IconLocal />
          </button>
          <button
            type="button"
            className="lab-switch__opt"
            aria-pressed={lifted}
            aria-label="Lifted to parent"
            title="Lifted"
            onClick={() => setLifted(true)}
          >
            <IconLift />
          </button>
        </div>
      </div>
      {lifted ? <ParentLifted /> : <ParentColocated />}
    </>
  )
}
