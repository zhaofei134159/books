<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav :activeSub="2"></publicNav>

		<div class="rowDiv">
			<div id="mainDiv">
				<div class="crumbs">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item>聊天室</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="mainCont">
          <div class="mainLeft">
              <div class="mainLeftNav"></div>
              <div class="mainLeftZhu"></div>
          </div>
          <div class="mainRight">
              <div class="mainShow"></div>
              <div class="mainInput">
                <div class="mainInputCenter">
                  <div class="mainInputCenterTop">
                  </div>
                  <div class="mainInputCenterCont">
                      <textarea name="sendCont" id="sendCont"  autocomplete="off" placeholder="请输入内容" maxlength="30"></textarea>
                  </div>
                  <div class="mainInputCenterFooter">
                      <el-button plain class="mainSend" @click="sendText()">发送</el-button>
                  </div>
                </div>
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
export default {
  name: 'ChatRoom',
  components: {
    publicTop,
    publicNav,
    publicFooter
  },
  data () {
    return {
      sourceUrl: 'https://blog.myfeiyou.com',
      socket: null
    }
  },
  created: function() {
    this.socket_link()
  },
  methods: {
    socket_link() {
      var url = 'ws://104.243.18.161:8000'
      this.socket = new WebSocket(url)
      this.socket.onopen = function() {
        console.log('连接成功')
      }
      this.socket.onmessage = function(msg) {
        // log(msg)
        console.log(msg)
      }
      this.socket.onclose = function() {
        console.log('断开连接')
      }
    },
    dis() {
      this.socket.close()
      this.socket = null
    },
    sendText() {
      var val = '开始开始'
      console.log(val)
      this.socket.send(val)
    }
  }
}
</script>

<style>
.mainLeft{width:26%;height:701px;float:left;border:solid 1px #ccc;}
.mainRight{width:72%;height:700px;float:right;}
.mainShow{width:100%;height:500px;border:solid 1px #ccc;border-bottom:none;}
.mainInput{width:100%;height:200px;border:solid 1px #ccc;}
.mainInputCenter{width:95%;height:100%;margin:0 auto;}
.mainInputCenterTop{width:100%;height:20px;}
.mainInputCenterCont{width:100%;}
.mainInputCenterCont textarea{width: 97%;border-radius: 10px;/* border: none; */padding: 10px;min-height: 100px;resize: none;}
.mainInputCenterFooter{width:100%;height:40px;text-align:right;}
.mainSend{width:100px;}
</style>
