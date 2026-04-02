export function CoreSidebarToolsLayout() {
    return (
        <div className="min-w-[45px] max-w-[150px] h-[calc(100vh-35px)] flex flex-col items-center gap-2 py-3 bg-[var(--color-background-tertiary)] border-r border-[var(--color-border-default)]">
            {/* Top section */}
            <div className="flex flex-col items-center gap-1 w-full">
                <div className="w-full flex justify-center py-2.5 text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors duration-150 group relative">
                    <span className="material-symbols-outlined text-xl">explore</span>
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] rounded border border-[var(--color-border-default)] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-background-primary)] border-l border-b border-[var(--color-border-default)] rotate-45"></div>
                        Explorer
                    </span>
                </div>
                
                <div className="w-full flex justify-center py-2.5 text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors duration-150 group relative">
                    <span className="material-symbols-outlined text-xl">search</span>
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] rounded border border-[var(--color-border-default)] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-background-primary)] border-l border-b border-[var(--color-border-default)] rotate-45"></div>
                        Search
                    </span>
                </div>
                
                <div className="w-full flex justify-center py-2.5 text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors duration-150 group relative">
                    <span className="material-symbols-outlined text-xl">source</span>
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] rounded border border-[var(--color-border-default)] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-background-primary)] border-l border-b border-[var(--color-border-default)] rotate-45"></div>
                        Source Control
                    </span>
                </div>
                
                <div className="w-full flex justify-center py-2.5 text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors duration-150 group relative">
                    <span className="material-symbols-outlined text-xl">play_circle</span>
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] rounded border border-[var(--color-border-default)] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-background-primary)] border-l border-b border-[var(--color-border-default)] rotate-45"></div>
                        Run and Debug
                    </span>
                </div>
                
                <div className="w-full flex justify-center py-2.5 text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors duration-150 group relative">
                    <span className="material-symbols-outlined text-xl">extension</span>
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] rounded border border-[var(--color-border-default)] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-background-primary)] border-l border-b border-[var(--color-border-default)] rotate-45"></div>
                        Extensions
                    </span>
                </div>
            </div>
            
            {/* Bottom section */}
            <div className="mt-auto flex flex-col items-center gap-1 w-full">
                <div className="w-full flex justify-center py-2.5 text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors duration-150 group relative">
                    <span className="material-symbols-outlined text-xl">settings</span>
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] rounded border border-[var(--color-border-default)] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-background-primary)] border-l border-b border-[var(--color-border-default)] rotate-45"></div>
                        Settings
                    </span>
                </div>
                
                <div className="w-full flex justify-center py-2.5 text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors duration-150 group relative">
                    <span className="material-symbols-outlined text-xl">account_circle</span>
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--color-background-primary)] text-[var(--color-foreground-primary)] rounded border border-[var(--color-border-default)] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-background-primary)] border-l border-b border-[var(--color-border-default)] rotate-45"></div>
                        Account
                    </span>
                </div>
            </div>
        </div>
    )
}