<template>
	<v-app>
		<v-app-bar
			app
			color="pink darker-1"
			dark
			class="d-flex justify-center font-weight-bold"
		>
			<v-toolbar-title>
				Most Used Words
			</v-toolbar-title>
		</v-app-bar>
		<v-main class="ma-4">
			<Home />
		</v-main>
	</v-app>
</template>

<script>
import Home from './components/Home';

export default {
	name: 'App',

	components: {
		Home,
	},

	data: () => ({
		//
	}),
};
</script>
