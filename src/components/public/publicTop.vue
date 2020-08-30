<template>
	<div class="header">
		<div class="headerMain">
			<div class="headerLeft">
				<div @click="linkHome()">booksfamily</div>
			</div>
			<div class="headerRight"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'publicTop',
  data() {
    return {
    }
  },
  methods: {
    linkHome() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>
</style>
