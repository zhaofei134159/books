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
						<div class="title"></div>
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
  name: 'chapterList',
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
  props: {
    id: {
      type: String,
      default: '',
      required: true
    }
  },
  created: function() {
    console.log(this.$route.params.id)
    this.getWorkchapterList(this.id)
  },
  methods: {
    getWorkchapterList(id) {
      console.log(id)
    }
  }
}
</script>

<style>
.titleCont{width:100%;}
</style>
