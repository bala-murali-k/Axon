import type { Config } from "tailwindcss"
import plugin from 'tailwindcss/plugin'

const config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary colors with all shades
                primary: {
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    950: 'var(--color-primary-950)',
                    DEFAULT: 'var(--color-primary-500)',
                },
                
                // Secondary colors with all shades
                secondary: {
                    50: 'var(--color-secondary-50)',
                    100: 'var(--color-secondary-100)',
                    200: 'var(--color-secondary-200)',
                    300: 'var(--color-secondary-300)',
                    400: 'var(--color-secondary-400)',
                    500: 'var(--color-secondary-500)',
                    600: 'var(--color-secondary-600)',
                    700: 'var(--color-secondary-700)',
                    800: 'var(--color-secondary-800)',
                    900: 'var(--color-secondary-900)',
                    950: 'var(--color-secondary-950)',
                    DEFAULT: 'var(--color-secondary-500)',
                },
                
                // Accent colors
                accent: {
                    50: 'var(--color-accent-50)',
                    100: 'var(--color-accent-100)',
                    200: 'var(--color-accent-200)',
                    300: 'var(--color-accent-300)',
                    400: 'var(--color-accent-400)',
                    500: 'var(--color-accent-500)',
                    600: 'var(--color-accent-600)',
                    700: 'var(--color-accent-700)',
                    800: 'var(--color-accent-800)',
                    900: 'var(--color-accent-900)',
                    950: 'var(--color-accent-950)',
                    DEFAULT: 'var(--color-accent-500)',
                },
                
                // Background colors
                background: {
                    primary: 'var(--color-background-primary)',
                    secondary: 'var(--color-background-secondary)',
                    tertiary: 'var(--color-background-tertiary)',
                    DEFAULT: 'var(--color-background-primary)',
                },
                
                // Foreground (text) colors
                foreground: {
                    primary: 'var(--color-foreground-primary)',
                    secondary: 'var(--color-foreground-secondary)',
                    tertiary: 'var(--color-foreground-tertiary)',
                    disabled: 'var(--color-foreground-disabled)',
                    DEFAULT: 'var(--color-foreground-primary)',
                },
                
                // Surface colors
                surface: {
                    primary: 'var(--color-surface-primary)',
                    secondary: 'var(--color-surface-secondary)',
                    tertiary: 'var(--color-surface-tertiary)',
                    elevated: 'var(--color-surface-elevated)',
                    DEFAULT: 'var(--color-surface-primary)',
                },
                
                // Border colors
                border: {
                    light: 'var(--color-border-light)',
                    default: 'var(--color-border-default)',
                    medium: 'var(--color-border-medium)',
                    dark: 'var(--color-border-dark)',
                    DEFAULT: 'var(--color-border-default)',
                },
                
                // Tonal / Semantic colors
                success: {
                    DEFAULT: 'var(--color-success)',
                    light: 'var(--color-success-light)',
                    dark: 'var(--color-success-dark)',
                    bg: 'var(--color-success-bg)',
                },
                warning: {
                    DEFAULT: 'var(--color-warning)',
                    light: 'var(--color-warning-light)',
                    dark: 'var(--color-warning-dark)',
                    bg: 'var(--color-warning-bg)',
                },
                error: {
                    DEFAULT: 'var(--color-error)',
                    light: 'var(--color-error-light)',
                    dark: 'var(--color-error-dark)',
                    bg: 'var(--color-error-bg)',
                },
                info: {
                    DEFAULT: 'var(--color-info)',
                    light: 'var(--color-info-light)',
                    dark: 'var(--color-info-dark)',
                    bg: 'var(--color-info-bg)',
                },
            },
            boxShadow: {
                'sm': 'var(--color-shadow-sm)',
                'md': 'var(--color-shadow-md)',
                'lg': 'var(--color-shadow-lg)',
                'xl': 'var(--color-shadow-xl)',
            },
        },
    },
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('.ocean', '.ocean &')
            addVariant('.forest', '.forest &')
            addVariant('.sunset', '.sunset &')
        })
    ]
} satisfies Config

export default config