import { useState } from 'react'
import './App.css'
import { ColocatedStateDemo } from './scenarios/ColocatedStateDemo'
import { ContextBridgeDemo } from './scenarios/ContextBridgeDemo'
import { ReduxSelectorsDemo } from './scenarios/ReduxSelectorsDemo'
import { IconBranch, IconGrid, IconLayers } from './ui/icons'

type TabId = 'state' | 'context' | 'redux'

function App() {
  const [tab, setTab] = useState<TabId>('state')

  return (
    <div className="app">
      <div className="app__top">
        <div className="app__brand">
          <span className="app__logo" aria-hidden />
          <p className="app__name">Render lab</p>
        </div>
        <div className="lab-tabs" role="tablist" aria-label="Scenario">
          <button
            type="button"
            role="tab"
            className="lab-tab"
            aria-selected={tab === 'state'}
            data-scene="state"
            aria-label="Local state"
            title="Local state"
            onClick={() => setTab('state')}
          >
            <IconLayers />
          </button>
          <button
            type="button"
            role="tab"
            className="lab-tab"
            aria-selected={tab === 'context'}
            data-scene="context"
            aria-label="Context"
            title="Context"
            onClick={() => setTab('context')}
          >
            <IconBranch />
          </button>
          <button
            type="button"
            role="tab"
            className="lab-tab"
            aria-selected={tab === 'redux'}
            data-scene="redux"
            aria-label="Store"
            title="Store"
            onClick={() => setTab('redux')}
          >
            <IconGrid />
          </button>
        </div>
      </div>

      <div className="scenario-canvas">
        {tab === 'state' && <ColocatedStateDemo />}
        {tab === 'context' && <ContextBridgeDemo />}
        {tab === 'redux' && <ReduxSelectorsDemo />}
      </div>
    </div>
  )
}

export default App
