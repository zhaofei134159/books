<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav></publicNav>

		<div class="rowDiv">
			<div id="mainDiv">
				<div class="crumbs">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>章节</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="mainCont">
					<div class="titleCont">
						<div class="titleInfo">{{ work.name }}</div>
						<div class="descInfo">{{ work.introduce }}</div>
					</div>
					<div class="chapterCont"></div>
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
  name: 'ChapterList',
  components: {
    publicTop,
    publicNav,
    publicFooter
  },
  data () {
    return {
      sourceUrl: 'https://blog.myfeiyou.com',
      work: {},
      workInfo: {}
    }
  },
  props: {
    id: String
  },
  created: function() {
    this.getWorkchapterList(this.id)
  },
  methods: {
    getWorkchapterList(id) {
      var self = this
      getFamouWorkInfo(id).then(res => {
        if (res.errorNo === '0') {
          self.work = res.seccuss.work
          self.workInfo = res.seccuss.workInfo
        } else {
          this.$message.error('请求错误, 请重试！')
        }
      })
    }
  }
}
</script>

<style>
.titleCont{width:100%;}
</style>
