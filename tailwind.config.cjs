const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '2.5rem',
				xl: '3rem',
				'2xl': '4rem'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Clash Display', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				alizarin: 'var(--alizarin)',
				muted: 'var(--muted)',
				inversion: 'var(--inversion)'
			},
			textColor: {
				base: 'var(--text-base)',
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)'
			}
		}
	},
	plugins: []
};
