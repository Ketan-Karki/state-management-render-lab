import { useMemo, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { incrementA, incrementB, resetLab3 } from '../store/lab3Slice'
import { createLabStore } from '../store/store'
import type { LabRootState } from '../store/store'
import { IconPlus, IconReset } from '../ui/icons'
import { NodeBlock, NodeRow } from '../ui/NodeBlock'

function StoreHud() {
  const a = useSelector((s: LabRootState) => s.lab3.a)
  const b = useSelector((s: LabRootState) => s.lab3.b)
  return (
    <div className="store-hud">
      <div className="store-chip store-chip--a">
        <div className="store-chip__k">A</div>
        <div className="store-chip__v">{a}</div>
      </div>
      <div className="store-chip store-chip--b">
        <div className="store-chip__k">B</div>
        <div className="store-chip__v">{b}</div>
      </div>
    </div>
  )
}

function LeafA({ broad }: { broad: boolean }) {
  const dispatch = useDispatch()
  const selected = useSelector((s: LabRootState) =>
    broad ? s.lab3 : s.lab3.a,
  )
  const value = broad ? (selected as LabRootState['lab3']).a : (selected as number)

  return (
    <NodeBlock title="Leaf A" accent="a" badge={broad ? 'lab3' : 'a'}>
      <div className="lab-row">
        <span className="big-num">{value}</span>
        <button
          type="button"
          className="lab-iconBtn"
          aria-label="A plus one"
          onClick={() => dispatch(incrementA())}
        >
          <IconPlus />
        </button>
      </div>
    </NodeBlock>
  )
}

function LeafB({ broad }: { broad: boolean }) {
  const dispatch = useDispatch()
  const selected = useSelector((s: LabRootState) =>
    broad ? s.lab3 : s.lab3.b,
  )
  const value = broad ? (selected as LabRootState['lab3']).b : (selected as number)

  return (
    <NodeBlock title="Leaf B" accent="b" badge={broad ? 'lab3' : 'b'}>
      <div className="lab-row">
        <span className="big-num">{value}</span>
        <button
          type="button"
          className="lab-iconBtn"
          aria-label="B plus one"
          onClick={() => dispatch(incrementB())}
        >
          <IconPlus />
        </button>
      </div>
    </NodeBlock>
  )
}

function ReduxTree({ broad }: { broad: boolean }) {
  return (
    <NodeBlock title="Tree" accent="neutral" badge="store">
      <NodeRow>
        <LeafA broad={broad} />
        <LeafB broad={broad} />
      </NodeRow>
    </NodeBlock>
  )
}

function ReduxInner({ store }: { store: ReturnType<typeof createLabStore> }) {
  const [broad, setBroad] = useState(false)

  return (
    <>
      <div className="lab-dock">
        <div className="lab-seg" role="group" aria-label="Selector width">
          <button
            type="button"
            className="lab-seg__btn"
            aria-pressed={!broad}
            onClick={() => setBroad(false)}
          >
            Fine
          </button>
          <button
            type="button"
            className="lab-seg__btn"
            aria-pressed={broad}
            onClick={() => setBroad(true)}
          >
            Wide
          </button>
        </div>
        <button
          type="button"
          className="lab-iconBtn"
          aria-label="Reset store"
          title="Reset"
          onClick={() => store.dispatch(resetLab3())}
        >
          <IconReset />
        </button>
      </div>
      <StoreHud />
      <ReduxTree broad={broad} />
    </>
  )
}

export function ReduxSelectorsDemo() {
  const store = useMemo(() => createLabStore(), [])

  return (
    <Provider store={store}>
      <ReduxInner store={store} />
    </Provider>
  )
}
