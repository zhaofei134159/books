<template>
	<div id="footerDiv">
		<div class="widewrapper">
			© 2015 family 来自 <a href="http://blog.myfeiyou.com/" target="_blank" title="family">family</a>
			<a href="http://www.beian.miit.gov.cn" target="__black">京ICP备16026346号-1</a>
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
	.headerLeft{width:50%;height:50px;line-height:50px;font-size:14px;color:#9d9d9d;font-weight:bold;text-align:left;float:left;}
	.headerRight{width:50%;height:50px;line-height:50px;font-size:14px;color:#9d9d9d;font-weight:bold;text-align:right;float:right;}
	.el-menu.el-menu--horizontal{padding:5px 0px;}

	#mainDiv{width:100%;height:800px;}
	#footerDiv{width:100%;background:green;}
	#footerDiv .widewrapper{color: #68848F;font-size:14px;height:70px;line-height:70px;text-align: center;background-color: #232323;}
</style>
