<template>
	<div class="rowDiv">
		<div id="topDiv">
			<div class="clear"></div>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">首页</el-menu-item>
				<el-menu-item index="2">聊天室</el-menu-item>
				<el-menu-item index="3"><a href="https://blog.myfeiyou.com/home/about" target="_blank">关于我们</a></el-menu-item>
				<!-- <el-submenu index="2">
				<template slot="title">我的工作台</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项1</el-menu-item>
						<el-menu-item index="2-4-2">选项2</el-menu-item>
						<el-menu-item index="2-4-3">选项3</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="3">消息中心</el-menu-item>
				<el-menu-item index="4"></el-menu-item> -->
			</el-menu>
		</div>
	</div>
</template>

<script>
export default {
  name: 'publicNav',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (key === '1') {
        this.$router.push({name: 'Home'})
      }else if (key === '2') {
        this.$router.push({name: 'ChatRoom'})
      }
    }
  }
}
</script>

<style>
</style>
