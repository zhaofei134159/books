<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav></publicNav>

		<div class="rowDiv">
			<div id="mainDiv">
				<div class="crumbs">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="'/chapter/ChapterList/' + workid ">章节</el-breadcrumb-item>
						<el-breadcrumb-item>详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="mainCont">
          <div class="chapterTitle">
            <div class="chapterTitleInfo">{{ workInfo.title }}</div>
            <div class="chapterDesc">《{{ work.name }}》{{ work.author }}/著</div>
          </div>
          <el-divider v-if="workNode.content!==''" content-position="left">原文</el-divider>
          <el-divider v-else></el-divider>
          <div class="chapterCont" v-html="workInfo.content"></div>

          <el-divider content-position="left" v-if="workNode.node!==''">注释</el-divider>
          <div class="chapterCont"  v-if="workNode.node!==''" v-html="workNode.node"></div>
          
          <el-divider content-position="left" v-if="workNode.translate!==''">译文</el-divider>
          <div class="chapterCont" v-if="worktranslate.node!==''" v-html="workNode.translate"></div>
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
import {getFamouWorkCont} from '@/request/api.js'
export default {
  name: 'ChapterCont',
  components: {
    publicTop,
    publicNav,
    publicFooter
  },
  data () {
    return {
      sourceUrl: 'https://blog.myfeiyou.com',
      work: {},
      workInfo: {},
      workNode: {}
    }
  },
  props: {
    workid: String,
    chapterid: String
  },
  created: function() {
    this.getWorkchapterCont(this.workid, this.chapterid)
  },
  methods: {
    getWorkchapterCont(workid, chapterid) {
      var self = this
      getFamouWorkCont(workid, chapterid).then(res => {
        if (res.errorNo === '0') {
          self.work = res.seccuss.work
          self.workInfo = res.seccuss.workInfo
          self.workNode = res.seccuss.workNode
        } else {
          this.$message.error('请求错误, 请重试！')
        }
      })
    }
  }
}
</script>

<style>
.chapterTitle{width: 100%;padding-top: 20px;}
.chapterTitleInfo{text-align: center;font-size: 20px;font-weight: bold;padding-bottom: 20px;}
.chapterDesc{font-size: 15px;color: #999;text-align: center;}
.descInfo{text-indent: 27px; font-size: 14px;}
.chapterCont{width:100%;margin-bottom: 20px;font-size: 15px;color: #555;}
.chapterCont p{margin-block-start: 0px;margin-block-end: 0px;text-indent: 20px;}
</style>
