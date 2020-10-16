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
          <div class="bottonTitle">
            <el-button class="bottonClass" v-for="(val, index) in imgTag" :key="index" size="medium">{{ val.name }} <span>{{val.count}}</span></el-button>
          </div>
          <el-divider></el-divider>
          <div class="picCon" ref="my_pull">

            <el-row>
              <el-col v-for="(val, index) in images" :span="5" :key="index" class="colClass">
                <el-card>
                  <el-image :src="val.wide_src" :preview-src-list="[val.wide_src]" lazy></el-image>
                </el-card>
              </el-col>
            </el-row>

            <div v-if="isbottom == -1" class="isbottom">
                <i class="iconfont icon-jiazai1"></i>
                <span>加载中，请稍后</span>
            </div>
            <div v-if="isbottom == 1" class="isbottom">
                <span>没有更多数据了</span>
            </div>

          </div>
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
import {getPictureList} from '@/request/api.js'
export default {
  name: 'PictureList',
  components: {
    publicTop,
    publicNav,
    publicFooter
  },
  data () {
    return {
      sourceUrl: 'https://blog.myfeiyou.com',
      imgTag: {},
      images: [],
      el: {},
      page: 1,
      isbottom: -1
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      this.el = this.$refs.my_pull
      window.addEventListener('scroll', this.handleScroll, true)
    })
  },
  created: function() {
    this.getPictureListPage(1)
  },
  methods: {
    handleScroll() {
      let a = this.el.getBoundingClientRect().top
      a = Math.ceil(a)
      console.log('a:' + a)
      console.log('body:' + this.$el.getElementByClassName('picCon').eq(0).scrollHeight)
      // if (a * this.page >= (this.clientHeight - 100)) {
      //   this.isbottom = -1
      //   this.page++
      //   this.getPictureListPage(this.page)
      // }
    },
    getPictureListPage(val) {
      var self = this
      getPictureList(val).then(res => {
        if (res.errorNo === '0') {
          self.imgTag = res.seccuss.imgTag
          self.images = self.images.concat(res.seccuss.images)

          if (res.seccuss.images.length !== 0) {
            self.isbottom = 0
          } else {
            self.isbottom = 1
            window.removeEventListener('scroll', self.handleScroll, true)
          }
        } else {
          this.$message.error('请求错误, 请重试！')
        }
      })
    }
  }
}
</script>

<style>
.bottonTitle{width:100%;}
.bottonClass{margin:10px;}
.picCon{width:100%;}
</style>
