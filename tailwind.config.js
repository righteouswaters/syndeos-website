import tailwindcss from "@tailwindcss/vite";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f7fbfd',
                    100: '#eef7fb',
                    200: '#d4ebf5',
                    300: '#b9deef',
                    400: '#85c5e3',
                    500: '#51abd7',
                    600: '#3d5a80', // Your deep blue
                    700: '#344e70',
                    800: '#293241', // Your dark blue/navy
                    900: '#111827',
                },
                accent: {
                    50: '#fef4f1',
                    100: '#fee9e2',
                    200: '#fdc9ba',
                    300: '#fba992',
                    400: '#f9694d',
                    500: '#ee6c4d', // Your primary orange/coral
                    600: '#d85e40',
                    700: '#b43825',
                    800: '#912c1d',
                    900: '#771e13',
                },
            },
            boxShadow: {
                'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [],
}