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
						<el-col v-for="(o, index) in cardDataNum" :span="5" :key="o" class="colClass">
							<el-card>
								<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
								<div class="title">
									<span :card="index">好吃的汉堡</span>
									<div class="bottom clearfix">
										<time class="time">{{ currentDate }}</time>
										<el-button type="text" class="button">操作按钮</el-button>
									</div>
								</div>
							</el-card>
						</el-col>
					</el-row>
					<div class="pageSize">
						<el-pagination
							background
							layout="prev, pager, next"
							:total="1000">
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
      cardData: {},
      cardDataNum: 0
    }
  },
  created: function() {
    var self = this.data
    getHomeByBooks().then(res => {
      if (res.errorNo === '0') {
        self.cardData = res.success
        self.cardDataNum = res.success.length
      } else {
        this.$message.error('请求错误, 请重试！')
      }
    })
  },
  methods: {
    prev() {},
    pager() {},
    next() {}
  }
}
</script>

<style>
.crumbs{width:100%;}
.crumbs div{min-height: 60px;line-height: 60px;font-size: 14px;}
.mainCont{width:100%;}
.title{padding: 14px}
.title span{font-size:15px;}
.colClass{margin: 0px 26px 20px;}
.pageSize{height:70px;line-height:70px;text-align:right;}
.errorAlter{display:none;}

.time {font-size: 13px;color: #999;}
.bottom {margin-top: 13px;line-height: 12px;}
.button {padding: 0;float: right;}
.image {width: 100%;display: block;}
.clearfix:before,.clearfix:after {display: table;content: "";}
.clearfix:after {clear: both}
</style>
