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
								<router-link tag="div" :to="{ path: 'chapter/chapterList'}"> <img :src="val.src" class="image"> </router-link>
								<div class="title">
									<router-link  tag="div" :to="{ path: 'chapter/chapterList'}" :card="index">
										{{ val.name }}
										<time class="showDesc">{{ val.author }}</time>
									</router-link>
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
							:page-size="1"
							:pager-count="7"
							layout="total, prev, pager, next"
							:total="totalCount"
						>
						</el-pagination>
						<!-- :hide-on-single-page="true" -->
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
      totalCount: 0,
      cardData: {}
    }
  },
  created: function() {
    var self = this
    getHomeByBooks().then(res => {
      if (res.errorNo === '0') {
        self.totalCount = res.seccuss.worksCount

        res.seccuss.works.forEach((item, index) => {
          res.seccuss.works[index].src = self.sourceUrl + '/' + item.src
        })
        self.cardData = res.seccuss.works
        console.log(self.cardData);
      } else {
        this.$message.error('请求错误, 请重试！')
      }
    })
  },
  methods: {
    handleCurrentChange(val) {
      getHomeByBooks(val).then(res => {
        console.log(res.errorNo)
        if (res.errorNo === '0') {
          self.totalCount = res.seccuss.worksCount

          res.seccuss.works.forEach((item, index) => {
            res.seccuss.works[index].src = self.sourceUrl + '/' + item.src
          })
          self.cardData = res.seccuss.works
        } else {
          this.$message.error('请求错误, 请重试！')
        }
      })
    }
  }
}
</script>

<style>
</style>
