/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-sage': '#8AA899',   // Szałwia
                'brand-beige': '#F3EFE0',  // Beż
                'brand-blue': '#7FA9C2',   // Błękit
                'brand-dark': '#2C3E50',   // Ciemny tekst
                'brand-light-gray': '#F8F9FA'
            },
            fontFamily: {
                'sans': ['Outfit', 'sans-serif'],
                'serif': ['Crimson Pro', 'serif'],
            }
        },
    },
    plugins: [],
}
