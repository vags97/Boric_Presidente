// import path from 'path'
// import webpack from 'webpack'
// import antdVars from './antdvVars'

const dev = process.env.MODO === 'dev'
const remoto = !!process.env.REMOTO

const titulo = 'Boric Presidente'
const descripcion = 'Votemos para hacer realidad un Chile en que nadie quede fuera. Votemos Gabriel Boric Presidente'
const imagen = '/imagenes/portadaMovil.webp'
const url = 'https://boricpresidente.cl'

function titleTemplate (tituloLocal) {
	// If undefined or blank then we don't need the hyphen
	return tituloLocal ? `${tituloLocal} | Boric Presidente` : 'Boric Presidente'
}

export default {
	env: {
		cmsURL: (dev && !remoto) ? 'http://localhost:1337' : 'https://gbcms.crishadad.cl',
		apiURL: (dev && !remoto) ? 'http://localhost:3001' : 'https://bpapi.crishadad.cl'
	},
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: titulo,
		titleTemplate,
		description: descripcion,

		htmlAttrs: {
			lang: 'es-cl'
		},
		meta: [
			{ charset: 'utf-8' },
			{ hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
			{ hid: 'description', name: 'description', content: descripcion },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'theme-color', content: '#ffffff' },


			{ hid: 'iprop:name', itemprop: 'name', content: titulo },
			{ hid: 'iprop:description', itemprop: 'description', content: descripcion },
			{ hid: 'iprop:image', itemprop: 'image', content: imagen },

			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'og:title', property: 'og:title', content: titulo },
			{ hid: 'og:description', property: 'og:description', content: descripcion },
			{ hid: 'og:image', property: 'og:image', content: imagen },
			{ hid: 'og:url', property: 'og:url', content: url },

			{ hid: 'twitter:title', property: 'twitter:title', content: titulo },
			{ hid: 'twitter:description', property: 'twitter:description', content: descripcion },
			{ hid: 'twitter:image', property: 'twitter:image', content: imagen },
			{ hid: 'twitter:site', property: 'twitter:site', content: '@GabrielBoric' }
		],
		link: [
			{ hid: 'canonical', rel: 'canonical', href: url	},

			{ hid: 'icon', rel: 'icon', href: '/favicon.svg' },
			{ hid: 'mask-icon', rel: 'mask-icon', color: '#3D895B', href: '/favicon.svg' },
			{ hid: 'gfonts', rel: 'stylesheet', href: 'https://use.typekit.net/jem8rnn.css' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'ant-design-vue/dist/antd.css',
		'~/estilos/base.sass'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/antd-ui',
		'@/plugins/axios',
		'@/plugins/sanitizador',
		'@/plugins/seo',
		'@/plugins/lodash'
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/svg'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'nuxt-svg-loader'
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				'postcss-discard-comments': { comments: { removeAll: true } },
				'postcss-preset-env': {}
			}
		}
	},
	telemetry: false,
	render: {
		static: {
			maxAge: 1000 * 60 * 60 * 24 * 7
		}
	}
}
