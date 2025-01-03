/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
    ],
    theme: {
        extend: {

            colors: {
                "foreground-main": "#354147",
                "accent-main": "#FBD784",
                "background-main": "#0B1D26",
                "primary-main": "#3d3f94"
            },
            fontFamily: {
                gilroy: ['Gilroy', 'sans-serif'], // Define custom font
                chronicle: ['Chronicle', 'sans-serif'], // Define custom font
            }

        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            }

        }
    },
    plugins: [],
};