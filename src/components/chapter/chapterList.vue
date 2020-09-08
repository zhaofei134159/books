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
						<div class="titleInfo">{{ work.name }}  <span v-if="work.author!==''">( {{ work.author }} )</span> </div>
						<div class="descInfo">{{ work.introduce }}</div>
					</div>
					<el-divider content-position="left">章节开始</el-divider>
					<div class="chapterCont">
						<div v-for="(val, index) in workInfo" :key="index">
              <el-divider v-if="val.extract!=''&&val.chapterIndex==0" content-position="left">{{ val.extract }}</el-divider>

							<el-link  @click="linkChapterCont(val.id)" :underline="false" target="_blank">{{ val.title }}</el-link>
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
import {getFamouWorkInfo} from '@/request/api.js'
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
    },
    linkChapterCont(chapterid) {
      this.$router.push({name: 'ChapterCont', params: {workid: this.id, chapterid: chapterid}})
    }
  }
}
</script>

<style>
.titleCont{width:100%;}
.titleInfo{font-size: 20px;font-weight: bold;padding: 10px;}
.titleInfo span{font-size:15px; color:#999;}
.descInfo{text-indent: 27px; font-size: 14px;}
.chapterCont{width:100%;margin-bottom: 20px;}
.chapterCont div{width: 39%;float: left;text-align: left;padding-left: 8%;margin-bottom: 1%;}
</style>
