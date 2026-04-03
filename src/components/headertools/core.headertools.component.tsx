'use client'

import { useState } from 'react'

interface MenuItem {
    label: string | null
    shortcut?: string
    action?: () => void
    disabled?: boolean
    divider?: boolean
}

interface MenuSection {
    items: MenuItem[]
}

export function CoreHeaderToolsLayout() {
    const [openMenu, setOpenMenu] = useState<string | null>(null)

    const menus: Record<string, MenuSection[]> = {
        File: [
            {
                items: [
                    { label: 'New File', shortcut: 'Ctrl+N' },
                    { label: 'New Window', shortcut: 'Ctrl+Shift+N', action: () => {
                        window.open(window.location.origin, '_blank')
                    } },
                    { label: null, divider: true },
                    { label: 'Open File...', shortcut: 'Ctrl+O' },
                    { label: 'Open Folder...', shortcut: 'Ctrl+K Ctrl+O' },
                    { label: 'Open Recent' },
                    { label: null, divider: true },
                    { label: 'Save', shortcut: 'Ctrl+S' },
                    { label: 'Save As...', shortcut: 'Ctrl+Shift+S' },
                    { label: 'Save All', shortcut: 'Ctrl+K S' },
                    { label: null, divider: true },
                    { label: 'Close Editor', shortcut: 'Ctrl+W' },
                    { label: 'Close Folder', shortcut: 'Ctrl+K F' },
                    { label: null, divider: true },
                    { label: 'Exit', shortcut: 'Ctrl+Q' },
                ]
            }
        ],
        Edit: [
            {
                items: [
                    { label: 'Undo', shortcut: 'Ctrl+Z' },
                    { label: 'Redo', shortcut: 'Ctrl+Y' },
                    { label: null, divider: true },
                    { label: 'Cut', shortcut: 'Ctrl+X' },
                    { label: 'Copy', shortcut: 'Ctrl+C' },
                    { label: 'Paste', shortcut: 'Ctrl+V' },
                    { label: null, divider: true },
                    { label: 'Find', shortcut: 'Ctrl+F' },
                    { label: 'Replace', shortcut: 'Ctrl+H' },
                    { label: 'Find in Files', shortcut: 'Ctrl+Shift+F' },
                ]
            }
        ],
        Selection: [
            {
                items: [
                    { label: 'Select All', shortcut: 'Ctrl+A' },
                    { label: 'Expand Selection', shortcut: 'Ctrl+Shift+Right' },
                    { label: 'Shrink Selection', shortcut: 'Ctrl+Shift+Left' },
                    { label: null, divider: true },
                    { label: 'Copy Line Up', shortcut: 'Shift+Alt+Up' },
                    { label: 'Copy Line Down', shortcut: 'Shift+Alt+Down' },
                    { label: 'Move Line Up', shortcut: 'Alt+Up' },
                    { label: 'Move Line Down', shortcut: 'Alt+Down' },
                    { label: null, divider: true },
                    { label: 'Add Cursor Above', shortcut: 'Ctrl+Alt+Up' },
                    { label: 'Add Cursor Below', shortcut: 'Ctrl+Alt+Down' },
                ]
            }
        ],
        View: [
            {
                items: [
                    { label: 'Command Palette...', shortcut: 'Ctrl+Shift+P' },
                    { label: null, divider: true },
                    { label: 'Explorer', shortcut: 'Ctrl+Shift+E' },
                    { label: 'Search', shortcut: 'Ctrl+Shift+F' },
                    { label: 'Source Control', shortcut: 'Ctrl+Shift+G' },
                    { label: 'Run and Debug', shortcut: 'Ctrl+Shift+D' },
                    { label: 'Extensions', shortcut: 'Ctrl+Shift+X' },
                    { label: null, divider: true },
                    { label: 'Problems', shortcut: 'Ctrl+Shift+M' },
                    { label: 'Output', shortcut: 'Ctrl+Shift+U' },
                    { label: 'Terminal', shortcut: 'Ctrl+`' },
                    { label: null, divider: true },
                    { label: 'Zoom In', shortcut: 'Ctrl+=' },
                    { label: 'Zoom Out', shortcut: 'Ctrl+-' },
                    { label: 'Reset Zoom', shortcut: 'Ctrl+Num0' },
                ]
            }
        ],
        Go: [
            {
                items: [
                    { label: 'Back', shortcut: 'Alt+Left' },
                    { label: 'Forward', shortcut: 'Alt+Right' },
                    { label: null, divider: true },
                    { label: 'Go to File...', shortcut: 'Ctrl+P' },
                    { label: 'Go to Symbol in File...', shortcut: 'Ctrl+Shift+O' },
                    { label: 'Go to Symbol in Workspace...', shortcut: 'Ctrl+T' },
                    { label: null, divider: true },
                    { label: 'Go to Line...', shortcut: 'Ctrl+G' },
                    { label: 'Go to Definition', shortcut: 'F12' },
                    { label: 'Peek Definition', shortcut: 'Alt+F12' },
                    { label: 'Go to References', shortcut: 'Shift+F12' },
                ]
            }
        ],
        Run: [
            {
                items: [
                    { label: 'Start Debugging', shortcut: 'F5' },
                    { label: 'Run Without Debugging', shortcut: 'Ctrl+F5' },
                    { label: 'Stop Debugging', shortcut: 'Shift+F5' },
                    { label: null, divider: true },
                    { label: 'Step Over', shortcut: 'F10' },
                    { label: 'Step Into', shortcut: 'F11' },
                    { label: 'Step Out', shortcut: 'Shift+F11' },
                    { label: null, divider: true },
                    { label: 'Restart Debugging', shortcut: 'Ctrl+Shift+F5' },
                    { label: 'Open Configurations' },
                ]
            }
        ],
        Terminal: [
            {
                items: [
                    { label: 'New Terminal', shortcut: 'Ctrl+`' },
                    { label: 'Split Terminal', shortcut: 'Ctrl+Shift+5' },
                    { label: null, divider: true },
                    { label: 'Run Task...', shortcut: 'Ctrl+Shift+B' },
                    { label: 'Run Build Task...', shortcut: 'Ctrl+Shift+B' },
                    { label: null, divider: true },
                    { label: 'New Window with Profile...' },
                    { label: 'Configure Terminal Settings' },
                ]
            }
        ],
        Help: [
            {
                items: [
                    { label: 'Welcome' },
                    { label: 'Show All Commands' },
                    { label: null, divider: true },
                    { label: 'Documentation' },
                    { label: 'Release Notes' },
                    { label: 'Keyboard Shortcuts Reference' },
                    { label: null, divider: true },
                    { label: 'Report Issue' },
                    { label: 'About' },
                ]
            }
        ],
    }

    function handleMenuClick (menuName: string) {
        setOpenMenu(openMenu === menuName ? null : menuName)
    }

    function handleMenuItemClick (item: MenuItem) {
        if (item.action) {
            item.action()
        }
        setOpenMenu(null)
    }

    // Close menu when clicking outside
    function handleBlur (e: React.FocusEvent) {
        // Check if the new focused element is related to the menu
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setOpenMenu(null)
        }
    }

    return (
        <div 
            className="relative flex items-center gap-0 px-2 h-[35px] bg-[var(--color-background-tertiary)] border-b border-[var(--color-border-default)]"
            onBlur={handleBlur}
        >
            {Object.keys(menus).map((menuName) => (
                <div key={menuName} className="relative">
                    <button
                        onClick={() => handleMenuClick(menuName)}
                        className={`px-3 py-1 text-[13px] text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150 font-medium ${
                            openMenu === menuName ? 'bg-[var(--color-background-secondary)]' : ''
                        }`}
                    >
                        {menuName}
                    </button>
                    
                    {openMenu === menuName && (
                        <div className="absolute top-full left-0 mt-0 min-w-[260px] bg-[var(--color-background-primary)] border border-[var(--color-border-default)] rounded-md shadow-lg z-50 py-1">
                            {menus[menuName].map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    {section.items.map((item, itemIdx) => (
                                        item.divider ? (
                                            <div key={itemIdx} className="h-px bg-[var(--color-border-default)] my-1" />
                                        ) : (
                                            <button
                                                key={itemIdx}
                                                onClick={() => handleMenuItemClick(item)}
                                                disabled={item.disabled}
                                                className={`w-full px-3 py-1.5 text-[13px] text-left flex justify-between items-center hover:bg-[var(--color-background-secondary)] transition-colors duration-150 ${
                                                    item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                                }`}
                                            >
                                                <span className="text-[var(--color-foreground-primary)]">{item.label}</span>
                                                {item.shortcut && (
                                                    <span className="text-[11px] text-[var(--color-foreground-tertiary)] ml-8">
                                                        {item.shortcut}
                                                    </span>
                                                )}
                                            </button>
                                        )
                                    ))}
                                    {sectionIdx < menus[menuName].length - 1 && (
                                        <div className="h-px bg-[var(--color-border-default)] my-1" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}