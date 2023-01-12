<script lang="coffeescript">

	socket = new WebSocket('ws://localhost:8082');

	# Connection opened
	socket.addEventListener 'open', (event) ->
		socket.send('Hello Server!')

	# Listen for messages
	socket.addEventListener 'message', (event) ->
		console.log('Message from server: ', event.data)

	export appTitle = "Title"
	export appSubtitle = "Subtitle"

</script>

<main>
	<ons-page>
		<h1>{appTitle}</h1>
		<h3>{appSubtitle}</h3>
	</ons-page>

</main>

<style lang="sass">
	main
		text-align: center
		padding: 1em
		max-width: 240px
		margin: 0 auto

	h1
		color: #ff3e00
		text-transform: uppercase
		font-size: 4em
		font-weight: 100

	@media (min-width: 640px)
		main
			max-width: none
</style>
