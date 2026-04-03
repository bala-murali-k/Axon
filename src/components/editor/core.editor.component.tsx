import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { AuthHelper } from '../../utils/auth.helper'

const auth = new AuthHelper()

interface Tab {
  id: string
  label: string
  language: string
  value: string
  isDirty: boolean
}

const DEFAULT_TAB: Tab = {
  id: crypto.randomUUID(),
  label: 'untitled-1',
  language: 'javascript',
  value: '// Start coding here',
  isDirty: false,
}

export function CoreEditorPage() {
  const navigate = useNavigate()
  const editorRef = useRef(null)

  const [tabs, setTabs] = useState<Tab[]>([DEFAULT_TAB])
  const [activeTabId, setActiveTabId] = useState<string>(DEFAULT_TAB.id)
  const tabCounter = useRef(2)

  const activeTab = tabs.find(t => t.id === activeTabId)!

  useEffect(() => {
    let isMounted = true
    async function checkAuth() {
      const isUserLogged = await auth?.CheckUserLoggedIn()
      if (!isUserLogged) navigate('/login')
    }
    checkAuth()
    return () => { isMounted = false }
  }, [])

  const addTab = useCallback(() => {
    const newTab: Tab = {
      id: crypto.randomUUID(),
      label: `untitled-${tabCounter.current++}`,
      language: 'javascript',
      value: '// Start coding here',
      isDirty: false,
    }
    setTabs(prev => [...prev, newTab])
    setActiveTabId(newTab.id)
  }, [])

  const closeTab = useCallback((tabId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setTabs(prev => {
      if (prev.length === 1) return prev
      const idx = prev.findIndex(t => t.id === tabId)
      const next = prev.filter(t => t.id !== tabId)
      // if closing the active tab, activate the nearest one
      if (tabId === activeTabId) {
        const nextActive = next[Math.min(idx, next.length - 1)]
        setActiveTabId(nextActive.id)
      }
      return next
    })
  }, [activeTabId])

  const handleEditorChange = useCallback((value: string | undefined) => {
    setTabs(prev => prev.map(t =>
      t.id === activeTabId ? { ...t, value: value ?? '', isDirty: true } : t
    ))
  }, [activeTabId])

  return (
    <div className="max-h-[calc(100vh - 35px)] w-screen flex flex-col bg-[var(--color-background-primary)]">
      {/* Tab Bar */}
      <div className="flex items-center bg-[var(--color-background-tertiary)] border-b border-[var(--color-border-default)] overflow-x-auto shrink-0">
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`
              group flex items-center gap-2 px-4 py-2 text-sm cursor-pointer
              border-r border-[var(--color-border-default)] shrink-0
              transition-colors duration-150 select-none min-w-[120px] max-w-[180px]
              ${tab.id === activeTabId
                ? 'bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] border-t-2 border-t-[var(--color-primary-500)]'
                : 'bg-[var(--color-background-tertiary)] text-[var(--color-foreground-tertiary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-foreground-primary)]'
              }
            `}
          >
            {/* File icon */}
            <svg className="w-3.5 h-3.5 shrink-0 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>

            <span className="truncate flex-1">{tab.label}</span>

            {/* Dirty dot or close button */}
            <span
              onClick={(e) => closeTab(tab.id, e)}
              className={`
                w-4 h-4 flex items-center justify-center rounded-sm shrink-0
                hover:bg-[var(--color-border-medium)] transition-colors
              `}
            >
              {tab.isDirty
                ? <span className="w-2 h-2 rounded-full bg-[var(--color-foreground-tertiary)] group-hover:hidden" />
                : null}
              <svg
                className={`w-3 h-3 ${tab.isDirty ? 'hidden group-hover:block' : 'opacity-0 group-hover:opacity-100'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
        ))}

        {/* New Tab Button */}
        <button
          onClick={addTab}
          className="px-3 py-2 text-[var(--color-foreground-tertiary)] hover:text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] transition-colors duration-150 shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Editor Area — render all, show only active */}
      <div className="flex-1 relative">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`absolute inset-0 ${tab.id === activeTabId ? 'block' : 'hidden'}`}
          >
            <Editor
              height="100%"
              language={tab.language}
              value={tab.value}
              onChange={handleEditorChange}
              onMount={(editor) => {
                if (tab.id === activeTabId) editorRef.current = editor
              }}
              options={{
                minimap: { enabled: true },
                fontSize: 14,
                scrollBeyondLastLine: false,
                wordWrap: 'on',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}