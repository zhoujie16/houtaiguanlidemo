<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	 /*@import "../static/css/main.css";*/
	 /*深色主题*/
    /*@import "../static/css/color-dark.css";*/    
	#app {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	
</style>