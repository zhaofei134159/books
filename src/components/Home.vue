<template>
	<div id="bodyDiv">
		<div class="header">
			<div class="headerMain">
				<div class="headerLeft">booksfamily</div>
				<div class="headerRight"></div>
			</div>
		</div>
		<div class="rowDiv">
			<div id="topDiv">
				<div class="clear"></div>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
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
					<el-menu-item index="3" disabled>消息中心</el-menu-item>
					<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
			</div>
		</div>
		<div class="rowDiv">
			<div id="mainDiv">
				<div>Aside</div>
				<div>Main</div>
			</div>
		</div>
		<div id="footerDiv">
			<div class="widewrapper">
				© 2015 family 来自 <a href="http://blog.myfeiyou.com/" target="_blank" title="family">family</a>
				<br>
				<a href="http://www.beian.miit.gov.cn" target="__black">京ICP备16026346号-1</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
	body{margin:0px;padding:0px;}
	.clear{clear: both;}
	#bodyDiv{width:100%;}
	.rowDiv{width:80%;margin:0 auto}
	#content{width:100%;}
	#topDiv{width:100%;}
	.header{width:100%;background-color: #232323;min-height:50px;}
	.headerMain{width:82%;margin:0 auto}
	.headerLeft{width:50%;padding:20px 0px;font-size:20px;color:#9d9d9d;font-weight:bold;text-align:left;float:left;}
	.headerRight{width:50%;padding:20px 0px;font-size:20px;color:#9d9d9d;font-weight:bold;text-align:right;float:right;}
	.el-menu.el-menu--horizontal{padding:5px 0px;}

	#mainDiv{width:100%;height:800px;}
	#footerDiv{width:100%;background:green;}
	#footerDiv .widewrapper{color: #68848F;font-size:20px;padding-top: 15px;padding-bottom: 15px;text-align: center;background-color: #232323;}
</style>
