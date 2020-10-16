<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav :activeSub="2"></publicNav>
    
    <div class="rowDiv">
      <div id="mainDiv">
        <div class="crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>图展</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="mainCont">
          <div class="bottonTitle"></div>
          <div class="picCon"></div>
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
  name: 'PictureList',
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
.bottonTitle{width:100%;}
.picCon{width:100%;}
</style>
