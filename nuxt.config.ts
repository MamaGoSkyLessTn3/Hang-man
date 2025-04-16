// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
	experimental: {
		viewTransition: true,
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	srcDir: 'src',
	vite: {
		plugins: [tailwindcss()],
	},
	modules: ['@nuxt/ui', '@nuxt/fonts'],
	fonts: {
		families: [{ name: 'Pixelify Sans', provider: 'google' }],
	},
	css: ['~/assets/css/main.css'],
	ssr: false,
})
