<template>
	<div id="bodyDiv">
		<div class="header">
			<div class="headerMain">
				<div class="headerLeft">booksfamily</div>
				<div class="headerRight"></div>
			</div>
		</div>
		<div class="rowDiv">
			<div id="topDiv">
				<div class="clear"></div>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
					<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="3" disabled>消息中心</el-menu-item>
					<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
			</div>
		</div>
		<div class="rowDiv">
			<div id="mainDiv">
				<div class="crumbs">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>活动管理</el-breadcrumb-item>
						<el-breadcrumb-item>活动列表</el-breadcrumb-item>
						<el-breadcrumb-item>活动详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="mainCont">
					<el-row>
						<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
							<el-card :body-style="{ padding: '0px' }">
								<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
								<div style="padding: 14px;">
									<span>好吃的汉堡</span>
									<div class="bottom clearfix">
										<time class="time">{{ currentDate }}</time>
										<el-button type="text" class="button">操作按钮</el-button>
									</div>
								</div>
							</el-card>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<publicFooter></publicFooter>
	</div>
</template>

<script>
import '../../static/books_css/main.css'
import publicFooter from '@/components/public/publicFooter'
export default {
  name: 'Home',
  components: {
    publicFooter
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      currentDate: new Date()
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
.crumbs{width:100%;}
.crumbs div{min-height: 50px;line-height: 50px;font-size: 14px;}
.mainCont{width:100%;}

.time {font-size: 13px;color: #999;}
.bottom {margin-top: 13px;line-height: 12px;}
.button {padding: 0;float: right;}
.image {width: 100%;display: block;}
.clearfix:before,.clearfix:after {display: table;content: "";}
.clearfix:after {clear: both}
</style>
