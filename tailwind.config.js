/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './stories/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                white: 'white',
                black: '#0C243B',
                lightdefault: '#F2F2F2',
                default: '#D4D4D4',
                darkdefault: '#555555',
                success: '#00C341',
                warning: '#FE9F00',
                darkdanger: '#FF4040',
                danger: '#FF40401A',
                lightdanger: '#FF4081',
                primary: '#1F5AA7'
            }
        },
        boxShadow: {
            xl: '0 20px 25px -20px rgb(0 0 0 / 0.1)',
            '3xl': '0 35px 60px -15px #00C34133',
            '2xl': '0px 0px 7px -2px #1F5AA7'
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem'
            }
        },
        variants: {
            container: []
        },
        corePlugins: {
            container: false
        },
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px'
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: []
};
