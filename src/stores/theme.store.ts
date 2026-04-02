// Required imports
import { create } from "zustand"
import { persist } from 'zustand/middleware'

// Helper imports
import { CookieHelper } from "../utils/cookie.helper"

export type Theme = 'light' | 'dark'

interface ThemeState {
    theme: Theme
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
    isDarkMode: boolean
}

const themeVariables: Record<Theme, Record<string, string>> = {
    light: {
        // Primary Colors - Blue theme (light mode)
        '--color-primary-50': '#eff6ff',
        '--color-primary-100': '#dbeafe',
        '--color-primary-200': '#bfdbfe',
        '--color-primary-300': '#93c5fd',
        '--color-primary-400': '#60a5fa',
        '--color-primary-500': '#3b82f6',
        '--color-primary-600': '#2563eb',
        '--color-primary-700': '#1d4ed8',
        '--color-primary-800': '#1e40af',
        '--color-primary-900': '#1e3a8a',
        '--color-primary-950': '#172554',
        
        // Secondary Colors - Purple theme (light mode)
        '--color-secondary-50': '#faf5ff',
        '--color-secondary-100': '#f3e8ff',
        '--color-secondary-200': '#e9d5ff',
        '--color-secondary-300': '#d8b4fe',
        '--color-secondary-400': '#c084fc',
        '--color-secondary-500': '#a855f7',
        '--color-secondary-600': '#9333ea',
        '--color-secondary-700': '#7e22ce',
        '--color-secondary-800': '#6b21a5',
        '--color-secondary-900': '#581c87',
        '--color-secondary-950': '#3b0764',
        
        // Accent Colors - Teal accent (light mode)
        '--color-accent-50': '#f0fdfa',
        '--color-accent-100': '#ccfbf1',
        '--color-accent-200': '#99f6e4',
        '--color-accent-300': '#5eead4',
        '--color-accent-400': '#2dd4bf',
        '--color-accent-500': '#14b8a6',
        '--color-accent-600': '#0d9488',
        '--color-accent-700': '#0f766e',
        '--color-accent-800': '#115e59',
        '--color-accent-900': '#134e4a',
        '--color-accent-950': '#042f2e',
        
        // Background Colors
        '--color-background-primary': '#ffffff',
        '--color-background-secondary': '#f9fafb',
        '--color-background-tertiary': '#f3f4f6',
        
        // Foreground (Text) Colors
        '--color-foreground-primary': '#111827',
        '--color-foreground-secondary': '#374151',
        '--color-foreground-tertiary': '#6b7280',
        '--color-foreground-disabled': '#9ca3af',
        
        // Surface Colors
        '--color-surface-primary': '#ffffff',
        '--color-surface-secondary': '#f9fafb',
        '--color-surface-tertiary': '#f3f4f6',
        '--color-surface-elevated': '#ffffff',
        
        // Border Colors
        '--color-border-light': '#f3f4f6',
        '--color-border-default': '#e5e7eb',
        '--color-border-medium': '#d1d5db',
        '--color-border-dark': '#9ca3af',
        
        // Tonal Colors - Semantic colors
        '--color-success': '#10b981',
        '--color-success-light': '#34d399',
        '--color-success-dark': '#059669',
        '--color-success-bg': '#f0fdf4',
        
        '--color-warning': '#f59e0b',
        '--color-warning-light': '#fbbf24',
        '--color-warning-dark': '#d97706',
        '--color-warning-bg': '#fffbeb',
        
        '--color-error': '#ef4444',
        '--color-error-light': '#f87171',
        '--color-error-dark': '#dc2626',
        '--color-error-bg': '#fef2f2',
        
        '--color-info': '#3b82f6',
        '--color-info-light': '#60a5fa',
        '--color-info-dark': '#2563eb',
        '--color-info-bg': '#eff6ff',
        
        // Shadow
        '--color-shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        '--color-shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        '--color-shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        '--color-shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
    dark: {
        // Primary Colors - Brighter for dark mode
        '--color-primary-50': '#172554',
        '--color-primary-100': '#1e3a8a',
        '--color-primary-200': '#1e40af',
        '--color-primary-300': '#2563eb',
        '--color-primary-400': '#3b82f6',
        '--color-primary-500': '#60a5fa',
        '--color-primary-600': '#93c5fd',
        '--color-primary-700': '#bfdbfe',
        '--color-primary-800': '#dbeafe',
        '--color-primary-900': '#eff6ff',
        '--color-primary-950': '#f5f9ff',
        
        // Secondary Colors - Brighter for dark mode
        '--color-secondary-50': '#3b0764',
        '--color-secondary-100': '#581c87',
        '--color-secondary-200': '#6b21a5',
        '--color-secondary-300': '#7e22ce',
        '--color-secondary-400': '#9333ea',
        '--color-secondary-500': '#a855f7',
        '--color-secondary-600': '#c084fc',
        '--color-secondary-700': '#d8b4fe',
        '--color-secondary-800': '#e9d5ff',
        '--color-secondary-900': '#f3e8ff',
        '--color-secondary-950': '#faf5ff',
        
        // Accent Colors - Teal accent (dark mode)
        '--color-accent-50': '#042f2e',
        '--color-accent-100': '#134e4a',
        '--color-accent-200': '#115e59',
        '--color-accent-300': '#0f766e',
        '--color-accent-400': '#0d9488',
        '--color-accent-500': '#14b8a6',
        '--color-accent-600': '#2dd4bf',
        '--color-accent-700': '#5eead4',
        '--color-accent-800': '#99f6e4',
        '--color-accent-900': '#ccfbf1',
        '--color-accent-950': '#f0fdfa',
        
        // Background Colors - Dark theme
        '--color-background-primary': '#030712',
        '--color-background-secondary': '#111827',
        '--color-background-tertiary': '#1f2937',
        
        // Foreground (Text) Colors
        '--color-foreground-primary': '#f9fafb',
        '--color-foreground-secondary': '#e5e7eb',
        '--color-foreground-tertiary': '#d1d5db',
        '--color-foreground-disabled': '#6b7280',
        
        // Surface Colors
        '--color-surface-primary': '#111827',
        '--color-surface-secondary': '#1f2937',
        '--color-surface-tertiary': '#374151',
        '--color-surface-elevated': '#1f2937',
        
        // Border Colors
        '--color-border-light': '#1f2937',
        '--color-border-default': '#374151',
        '--color-border-medium': '#4b5563',
        '--color-border-dark': '#6b7280',
        
        // Tonal Colors - Adjusted for dark mode
        '--color-success': '#10b981',
        '--color-success-light': '#34d399',
        '--color-success-dark': '#059669',
        '--color-success-bg': '#064e3b',
        
        '--color-warning': '#f59e0b',
        '--color-warning-light': '#fbbf24',
        '--color-warning-dark': '#d97706',
        '--color-warning-bg': '#78350f',
        
        '--color-error': '#ef4444',
        '--color-error-light': '#f87171',
        '--color-error-dark': '#dc2626',
        '--color-error-bg': '#991b1b',
        
        '--color-info': '#3b82f6',
        '--color-info-light': '#60a5fa',
        '--color-info-dark': '#2563eb',
        '--color-info-bg': '#1e3a8a',
        
        // Shadow - Darker shadows
        '--color-shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
        '--color-shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.4)',
        '--color-shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.5)',
        '--color-shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.6)',
    }
}

const applyTheme = (theme: Theme) => {
    const root = document.documentElement
    const variables = themeVariables[theme]
    
    // Apply all CSS variables
    Object.entries(variables).forEach(([key, value]) => {
        root.style.setProperty(key, value)
    })
    
    // Handle dark mode class for Tailwind's dark mode
    if (theme === 'dark') {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }
    
    // Handle other theme classes
    const themes: Theme[] = ['light', 'dark']
    themes.forEach(t => {
        if (t === theme) {
            root.classList.add(t)
        } else {
            root.classList.remove(t)
        }
    })
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: 'light',
            isDarkMode: false,
            
            setTheme: (theme: Theme) => {
                applyTheme(theme)
                set({ 
                    theme,
                    isDarkMode: theme === 'dark'
                })
            },
            
            toggleTheme: () => {
                const currentTheme = get().theme
                // Simple toggle between light and dark
                const newTheme = currentTheme === 'light' ? 'dark' : 'light'
                get().setTheme(newTheme)
            },
        }),
        {
            name: 'theme-storage', // localStorage key
        }
    )
)

export async function initializeTheme() {
    await CookieHelper?.GetCookies('theme.storage').then((cookieResult) => {
        if (cookieResult?.value) {
            try {
                const state = JSON.parse(cookieResult.value)
                if (state && state.theme) {
                    applyTheme(state.theme)
                    return
                }
            } catch (e) {
                console.error('Failed to parse saved theme', e)
            }
        }
    })
    
    // Check system preference
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // const defaultTheme: Theme = prefersDark ? 'dark' : 'light'
    const defaultTheme: Theme = 'dark'
    applyTheme(defaultTheme)
}