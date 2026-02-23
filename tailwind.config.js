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
            },
        },
    },
    plugins: [],
}
