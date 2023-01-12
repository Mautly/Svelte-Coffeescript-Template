import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appTitle: 'Svelte + Coffeescript',
		appSubtitle: 'Websocket Client implementation'
	}
});

export default app;
