<template lang="pug">
footer
	.capa.capaLinks
	.capa.capaFooter
		.logo
		a(href="https://activate.boricpresidente.cl/", target="_blank") Actívate y súmate a nuestros grupos
		RedesSociales
		.logos
			.aprueboDignidad
				.iconoAprueboDignidad
				.textoAprueboDignidad
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

footer
	background-color: $fondoFooter
	color: $colorFooter
	a
		&, &:visited, &:active, &:hover
			color: inherit
			text-decoration: none
	.capa
		padding: 2em
		display: flex
		align-items: center

	.capaFooter
		margin-top: -3em
		padding: 1em 3em
		background-color: $fondoFooter
		display: flex
		flex-flow: column
		.logo
			+bgcon
			background-color: #072B3F
			mask-image: url('/logos/logo.svg')
			mask-size: contain
			mask-repeat: no-repeat
			mask-position: center
			height: 0.3965em
			width: 1em
			font-size: 10em
			+compu
				width: 1.5em
				height: 0.9em
			// +wide
			// 	width: 2em
			// 	height: 1.3em
			// +ultra
			// 	width: 2.5em
			// 	height: 1.6em
		.redesSociales
			padding: 1em 0
			font-size: 1.4em
			// padding: 1em 0 1em 0
		.textoFooter
			text-align: center
			margin-top: 2em

	.capaLinks
		display: flex
		align-items: center
		justify-content: space-around
		position: relative
		z-index: 0
		text-transform: uppercase
		margin-top: -2em
		> *
			z-index: 1
		&::before
			content: ''
			display: block
			position: absolute
			height: 3em
			top: -.95em
			left: 0
			right: 0
			bottom: 0
			clip-path: ellipse(60% 100% at 50% 100%)
			background-color: $fondoFooter

		.link-footer
			padding: .25em
			margin: .25em
	.logos
		.aprueboDignidad
			font-size: 5em
			display: flex
			align-items: center
			padding: .25em 0 .5em 0
			.iconoAprueboDignidad
				+bgcon
				background-image: url('/logos/apruebo dignidad icono.svg')
				height: 1em
				width: 1em
			.textoAprueboDignidad
				+micon
				background-color: #072B3F
				mask-image: url('/logos/apruebo dignidad texto.svg')
				height: 1em
				width: 1.458em

	+compu
		flex-flow: column nowrap
		.redesSociales
			// margin-top: 2em
		.logos
			.aprueboDignidad
				font-size: 5em
		.capaLinks
			flex-flow: column nowrap
		.capaFooter
			flex-flow: column nowrap
	+wide
		.logos
			.aprueboDignidad
				font-size: 9em
	+ultra
		.logos
			.aprueboDignidad
				font-size: 13em
</style>
