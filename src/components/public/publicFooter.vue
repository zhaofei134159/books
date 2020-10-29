<template>
	<div id="footerDiv">
		<div class="widewrapper">
			网站所有资源来源于互联网，若有侵权问题请及时联系QQ(837379721)，我们会尽快处理。
			<br/>
			© 2015 family 来自 <a href="https://books.myfeiyou.com/" target="_blank" title="family">family</a>
			<a href="http://www.beian.miit.gov.cn" target="__black">京ICP备16026346号-1</a>
		</div>
		<el-backtop>
			<div
				style="{
				height: 60px;
				width: 60px;
				background-color: #f2f5f6;
				box-shadow: 0 0 6px rgba(0,0,0, .12);
				text-align: center;
				line-height: 60px;
				color: #1989fa;
				font-size: 30px;
				}"
			>
				<i class="el-icon-arrow-up"></i>
			</div>
		</el-backtop>
	</div>
</template>

<script>
export default {
  name: 'publicFooter',
  data() {
    return {
    }
  }
}

var _hmt = [];
(function() {
  var hm = document.createElement('script')
  hm.src = "https://hm.baidu.com/hm.js?b0f84c268dbc78df9335cfa39643f377"
  var s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(hm, s)
})()
</script>

<style>
</style>
