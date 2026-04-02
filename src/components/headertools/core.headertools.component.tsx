export function CoreHeaderToolsLayout() {

    return (
        <div className="flex items-center gap-1 px-4 h-[35px] bg-[var(--color-background-tertiary)] border-b border-[var(--color-border-default)]">
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                File
            </div>
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                Edit
            </div>
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                Selection
            </div>
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                View
            </div>
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                Go
            </div>
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                Run
            </div>
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                Terminal
            </div>
            <div className="px-3 py-1 text-sm text-[var(--color-foreground-primary)] hover:bg-[var(--color-background-secondary)] rounded-md cursor-pointer transition-colors duration-150">
                Help
            </div>
        </div>
    )
}