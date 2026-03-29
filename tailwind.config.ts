import type { Config } from "tailwindcss"
import plugin from 'tailwindcss/plugin'

const config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {}
    },
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('.ocean', '.ocean &')
        })
    ]
}

export default config