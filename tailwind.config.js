module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'custom-yellow': '#FFB606'
            }
        },
    },
    plugins: [
        require('daisyui'),

    ],
}