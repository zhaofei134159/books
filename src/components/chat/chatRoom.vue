<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav :activeSub="2"></publicNav>

		<div class="rowDiv">
			<div id="mainDiv">
				<div class="crumbs">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item>聊天室</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="mainCont">
          <div class="mainLeft">
              <div></div>
          </div>
          <div class="mainRight">
              <div class="mainShow"></div>
              <div class="mainInput">
                <div class="mainInputCenter">
                  <div class="mainInputCenterTop"></div>
                  <div class="mainInputCenterCont"></div>
                  <div class="mainInputCenterFooter"></div>
                </div>
              </div>
          </div>
          <div class="clear"></div>
          <el-divider></el-divider>
				</div>
			</div>
		</div>
		<publicFooter></publicFooter>
	</div>
</template>

<script>
import '../../../static/books_css/main.css'
import publicTop from '@/components/public/publicTop'
import publicNav from '@/components/public/publicNav'
import publicFooter from '@/components/public/publicFooter'
export default {
  name: 'ChatRoom',
  components: {
    publicTop,
    publicNav,
    publicFooter
  },
  data () {
    return {
      sourceUrl: 'https://blog.myfeiyou.com'
    }
  },
  created: function() {},
  methods: {}
}
</script>

<style>
.mainLeft{width:25%;height:600px;background:red;float:left;}
.mainRight{width:74%;height:600px;float:right;}
.mainShow{width:100%;height:400px;background:green;}
.mainInput{width:100%;height:200px;border:solid 1px #ccc;}
.mainInputCenter{width:95%;height:100%;margin:0 auto;background:blue;}
.mainInputCenterTop{width:100%;height:40px;background:red;}
.mainInputCenterCont{width:100%;height:120px;background:green;}
.mainInputCenterFooter{width:100%;height:40px;background:yellow;}
</style>
