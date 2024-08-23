/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'title-gray': 'rgb(112, 112, 112)',
                'gray-50w': 'rgb(119, 118, 109)',
                'gray-75w': 'rgb(181, 181, 174)',
                'gray-100w': 'rgb(147, 147, 147)'
            }
        },
    },
    plugins: [],
}