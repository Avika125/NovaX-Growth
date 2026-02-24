/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
            },
            colors: {
                primary: "#0f172a",
                secondary: "#334155",
                accent: "#38bdf8",
                // Unified palette (used for both light and dark)
                palette: {
                    900: "#190019", // Deepest background (Dark) / Primary Text (Light)
                    800: "#2B124C", // Deep purple (Dark) / Secondary Text (Light)
                    700: "#522B5B", // Medium purple (Dark) / Button Hover?
                    600: "#854F6C", // Muted rose-purple (Dark) / Primary Button (Light)
                    200: "#DFB6B2", // Soft blush (Dark) / Surface (Light)
                    100: "#FBE4D8", // Lightest cream (Dark) / Background (Light)
                },
                dark: {
                    900: "#190019",
                    800: "#2B124C",
                    700: "#522B5B",
                    600: "#854F6C",
                    200: "#DFB6B2",
                    100: "#FBE4D8",
                },
            },
        },
    },
    plugins: [],
}
