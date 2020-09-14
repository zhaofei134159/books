<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav></publicNav>

		<div class="rowDiv">
			<div id="mainDiv">
				<div class="crumbs">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="mainCont">
					<el-row>
						<el-col v-for="(val, index) in cardData" :span="5" :key="index" class="colClass">
							<el-card class="cardDataClass">
								<div tag="div" @click="linkChapterList(val.id)">
									<el-image v-if="val.src!==''" :src="val.src" class="image"></el-image>
									<el-image v-else  class="image"></el-image>
								</div>
								<div class="title">
									<div  tag="div" @click="linkChapterList(val.id)" :card="index" class="overHidden">
										<el-link :underline="false">{{ val.name }}</el-link>
										<time class="showDesc">{{ val.author }}</time>
									</div>
									<div class="clearfix infoDesc showDesc">
										<div>
											{{ val.introduce }}
										</div>
									</div>
								</div>
							</el-card>
						</el-col>
					</el-row>
					<div class="pageSize">
						<el-pagination
							background
							@current-change="handleCurrentChange"
							:page-size="pagesize"
							:pager-count="7"
							:hide-on-single-page="true"
							layout="total, prev, pager, next"
							:total="totalCount"
						>
						</el-pagination>
					</div>
				</div>
			</div>
		</div>
		<publicFooter></publicFooter>
	</div>
</template>

<script>
import '../../static/books_css/main.css'
import publicTop from '@/components/public/publicTop'
import publicNav from '@/components/public/publicNav'
import publicFooter from '@/components/public/publicFooter'
import {getHomeByBooks} from '@/request/api.js'
export default {
  name: 'Home',
  components: {
    publicTop,
    publicNav,
    publicFooter
  },
  data () {
    return {
      sourceUrl: 'https://blog.myfeiyou.com',
      pagesize: 0,
      totalCount: 0,
      cardData: {}
    }
  },
  created: function() {
    this.handleCurrentChange(1)
  },
  methods: {
    handleCurrentChange(val) {
      var self = this
      getHomeByBooks(val).then(res => {
        if (res.errorNo === '0') {
          self.totalCount = res.seccuss.worksCount
          self.pagesize = res.seccuss.pagesize

          res.seccuss.works.forEach((item, index) => {
            if (item.src !== '') {
              res.seccuss.works[index].src = self.sourceUrl + '/' + item.src
            }
          })
          self.cardData = res.seccuss.works
        } else {
          this.$message.error('请求错误, 请重试！')
        }
      })
    },
    linkChapterList(id) {
      this.$router.push({name: 'ChapterList', params: {id: id}})
    }
  }
}
</script>

<style>
.overHidden{width: 100%; overflow: hidden;height: 25px;}
</style>
