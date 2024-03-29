/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                'inclusive-sans': ['"Inclusive Sans"', 'sans-serif'],
            },
            screens: {
                'xs': '480px',
            },
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
    ],
}
