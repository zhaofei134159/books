<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav></publicNav>

		<div class="rowDiv"></div>

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
.titleCont{width:100%;}
.titleInfo{font-size: 20px;font-weight: bold;padding: 10px;}
.titleInfo span{font-size:15px; color:#999;}
.descInfo{text-indent: 27px; font-size: 14px;}
.chapterCont{width:100%;margin-bottom: 20px;}
.chapterCont div{width: 39%;float: left;text-align: left;padding-left: 8%;margin-bottom: 1%;}
</style>
