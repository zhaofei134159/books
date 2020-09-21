<template>
	<div class="header">
		<div class="headerMain">
			<div class="headerLeft">
				<div @click="linkHome()">booksfamily</div>
			</div>
			<div class="headerRight">
        <!-- <div @click="linkLogin()">登录</div> -->
      </div>
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
    },
    linkLogin() {
      window.location.href = 'https://blog.myfeiyou.com/home/login'
    }
  }
}
</script>

<style>
</style>
