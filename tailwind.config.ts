import { link } from 'fs';
import { text } from 'stream/consumers';
import type { Config } from 'tailwindcss';

const config: Config ={
    darkMode: 'selector',
    content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
		colors: {
			transparent: 'transparent',
			white: 'hsl(0, 0%, 100%)', // white
			faintText: 'hsl(0, 0%, 56%)', // grayish black
			softWhite: 'hsl(0, 0%, 98%)', // very light grayish white
			success: 'hsl(120, 100%, 30%)', // light green
			verySoftYellow: 'hsl(49, 100%, 96%)', // very soft yellow
			softOrange: 'hsl(31, 100%, 90%)', // soft orange

			textPrimary: 'hsl(0, 0%, 13%)', // very dark grayish black
			textSecondary: 'hsl(0, 0%, 46%)', // grayish black

			bgPrimary: 'hsl(0, 0%, 92%)', // very light grayish white
			bgSecondary: 'hsl(0, 0%, 100%)', // white

			buttonPrimary: 'hsl(111, 75%, 29%)', // dark green
			buttonPrimaryText: 'hsl(0 0% 98%)', // light grayish white

			buttonSecondary: 'hsl(0, 0%, 13%)', // very dark grayish black
			buttonSecondaryText: 'hsl(0 0% 98%)', // very light grayish white

			linkSecondary: 'hsla(209, 87%, 52%)', // light blue
			softRed: 'hsl(0, 70%, 70%)', // soft red
			verySoftRed: 'hsl(0, 88%, 90%)', // very soft red
			harshRed: 'hsl(0, 85%, 50%)', // harsh red
			lightGreen: 'hsla(90, 100%, 96%, 1)', // light green
			softGreen: 'hsl(90, 100%, 89%)', // soft green
			darkGray: 'hsl(0, 0%, 13%)', // very dark grayish black

			bdrPrimary: 'hsl(0, 0%, 82%)', // very light grayish white

			facebook: 'hsl(208, 92%, 53%)', // facebook blue
			twitter: 'hsl(203, 89%, 53%)', // twitter blue
			instagram: 'hsl(329, 70%, 58%)', // instagram pink
			youtube: 'hsl(0, 100%, 50%)', // youtube red
		},
		fontFamily: {
			Inter: ['Inter', 'sans-serif'],
			Helvetica: ['Helvetica', 'Arial', 'sans-serif'],
			Poppins: ['Poppins', 'sans-serif'],
		},
  	extend: {
			screens: {
				md: '500px', // screens 500px and larger
				larger: '960px' // screens 960px and larger
			},
			fontWeight: {
				normal: '400',
				bold: '700',
				bolder: '900'
			},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

export default config