<template lang="pug">
.root
	//- .listaSpotify
	//- 	spotify
	.navbar
		nuxt-link.alHome.zonaLogo(
			to="/",
			alt="Inicio",
			title="Inicio",
			@click.native="tag('nav home')"
		)
			.logo
				.trasLogo
					.iconoAprueboDignidad

		mixin links
			.links.contenedor-links.link-interno
				nuxt-link.link.bold.destacado(
					to="/apoderados",
					@click.native="tag('nav apoderados')"
				) Apoderados
				a-dropdown.link.bold(:trigger="['click']")
					a-menu(slot="overlay")
						a-menu-item(key='whatsapp')
							a.link.bold(:href="difusionWhatsappLink"  target="_blank") Whatsapp
						a-menu-item(key='telegram')
							a.link.bold(href="https://t.me/difusiongabrielboric" target="_blank") Telegram
					a-button(type="link" style="color: inherit").link.bold Grupos Difusión
				nuxt-link.link.bold(to="/aporta", @click.native="tag('nav aporta')") aporta
				.link.bold(@click="unete") únete
				//- nuxt-link.link.bold(to="/cultura", @click.native="tag('nav cultura')") Cultura

				nuxt-link.link.bold(
					to="/propuestas",
					@click.native="tag('nav propuestas')"
				) Propuestas
				nuxt-link.link.bold(to="/alcaldias", @click.native="tag('nav municipios')") alcaldías
				//- nuxt-link.link.bold(to="/programa", @click.native="tag('nav programa')") Programa
				//- nuxt-link.link.bold(to="/playlist", @click.native="tag('nav playlist')") playlist

		.menuCompu
			+links
		buscador

		transition(:duration="300")
			.menuMovil(v-if="activa")
				+links

		//- RedesSocialesnav

		.triggerMenu(@click="activa = !activa")
			.oicono(:class="activa ? 'cruz' : 'menu-relleno'")
</template>

<script>
import axios from 'axios'

export default {
	data () {
		return {
			activa: null,
			buscar: null,
			difusionWhatsappLink: ''
		}
	},
	watch: {
		$route () {
			this.activa = false
		}
	},
	mounted () {
		this.getDifusionWhatsapp()
	},
	methods: {
		getDifusionWhatsapp () {
			const spreadsheetID = '1-XAmvAJzOI8SdXs3kxuf5RR4AzqQb1EhHCpjkkWYBd8'
			const tabName = 'Únete'
			const apiKey = process.env.GOOGLE_SHEETS_API_KEY
			const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${tabName}/?alt=json&key=${apiKey}`
			return axios.get(url)
				.then(res => {
					this.difusionWhatsappLink = res.data.values[2][2]
				})
		},
		unete () {
			this.$router.replace('/#uneteALaCampaña')
		},
		tag (valor) {
			this.$gtm.push({ event: 'nav-link', hacia: valor })
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

.listaSpotify
	position: fixed
	z-index: 100
	top: 7em
	width: 100px
$alturaMenu: 5em
.relleno
	width: 100vw
	height: 5em
.navbar
	position: sticky
	top: 0
	width: 100%
	z-index: 1000
	display: flex
	align-items: center
	justify-content: space-between
	color: $colorHeader
	background-color: $fondoHeader
	height: $alturaMenu
	box-shadow: 0 -3em 0 $fondoHeader
	padding: 0 2em
	+movil
		padding: 0 1em

	.zonaLogo
		position: relative
		flex: auto 0 0
		.logo
			background-color: currentColor
			mask-image: url('/logos/logo.svg')
			mask-size: contain
			mask-repeat: no-repeat
			mask-position: center
			height: 0.3965em
			width: 1em
			font-size: 8em
			+movil
				font-size: 6em

			.trasLogo
				height: 100%
				opacity: 0
				transition: opacity .5s ease
				overflow: hidden
				.iconoAprueboDignidad
					+bgcon
					background-image: url('/logos/apruebo dignidad icono.svg')
					$lado: 3.8em
					height: $lado
					width: $lado
					position: relative
					top: 400%
					left: 50%
					transform: translateX(-50%, -50%)
					animation: rotar 30s linear infinite
					@keyframes rotar
						0%
							transform: translate(-50%, -50%) rotateZ(0deg)
						50%
							transform: translate(-50%, -50%) rotateZ(180deg)
						100%
							transform: translate(-50%, -50%) rotateZ(360deg)
			&:hover
				.trasLogo
					opacity: 1

	.redesSociales
		display: flex
		.redSocial
			color: inherit
			margin: 0.5em
			.oicono
				font-size: 1.4em

	.links
		// font-family: "Roboto Slab"

		.link
			text-transform: uppercase
			margin: 0 .3em
			padding: 0 .7em
			&.nuxt-link-active
				color: $colorPrincipalC3
		.destacado
			margin-right: 1em
			background-color: $verde3
			display: flex
			align-items: center
			justify-content: center
			+fwbb
			text-decoration: none
			line-height: 1
			color: $azul1
			padding: 0.4em
			// margin-top: -.3em
			// padding-top: .2em
			border-radius: 2px

	.menuCompu
		flex: auto 1 1
		position: relative
		z-index: 0
		+movil
			display: none
		.links
			display: flex
			flex-flow: row-reverse
			align-items: center
			z-index: inherit
			width: 100%
			.link
				display: block
				flex: auto 0 1
				text-align: center

	.menuMovil
		position: fixed
		z-index: 10
		top: $alturaMenu
		left: 0
		right: 0
		bottom: 0
		padding: 2em
		background-color: white
		display: flex
		flex-flow: column nowrap
		justify-content: center

		color: $verde3
		background-color: transparentize($azul1, .3)
		backdrop-filter: blur(.5em)

		@media screen and (min-width: 760px)
			display: none

			transition: all 0.1s ease
		+salir
			opacity: 0
			max-height: 0
		+saliendo
			max-height: 100vh
			overflow: hidden

		.barra
			display: flex
			justify-content: flex-end
		.links
			display: flex
			flex-flow: column nowrap
			justify-content: center
			align-items: center
			.link
				display: block
				text-align: center
				font-size: 1.4em
				margin: 1.2em 0

	.triggerMenu
		@media screen and (min-width: 760px)
			display: none
</style>
