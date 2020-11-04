<template>
	<div id="bodyDiv">
		<publicTop></publicTop>

		<publicNav :activeSub="3"></publicNav>

		<div class="rowDiv">
			<div id="mainDiv">
				<div class="crumbs">
					<el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>聊天室</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="mainCont">
          <div class="mainRight">
              <div class="mainShow"></div>
              <div class="mainInput">
                <div class="mainInputCenter">
                  <div class="mainInputCenterTop">
                  </div>
                  <div class="mainInputCenterCont">
                      <textarea name="sendCont" ref="sendCont"  autocomplete="off" placeholder="请输入内容" maxlength="300" show-word-limit></textarea>
                  </div>
                  <div class="mainInputCenterFooter">
                      <div class="mainInputCenterName">
                        <el-input type="text" placeholder="名称" ref="sendName" :value="sendName" v-model="text" maxlength="10" show-word-limit> </el-input>
                      </div>
                      <div class="mainInputCenterSend">
                        <el-button plain class="mainSend" @click="sendText()">发送</el-button>
                      </div>
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
import { Message } from 'element-ui'
export default{
  name: 'ChatRoom',
  components: {
    publicTop,
    publicNav,
    publicFooter
  },
  data () {
    return {
      text: '',
      sourceUrl: 'https://blog.myfeiyou.com',
      socket: null,
      sendName: ''
    }
  },
  created: function() {
    this.sendName = localStorage.getItem('sendName')
    this.socket_link()
  },
  destroyed: function() {
    this.socket.close()
    this.socket = null
  },
  methods: {
    socket_link() {
      var url = 'ws://104.243.18.161:8000'
      this.socket = new WebSocket(url)
      this.socket.onopen = function() {
        console.log('连接成功')
        Message({
          showClose: true,
          message: '连接成功',
          type: 'success'
        })
      }
      this.socket.onmessage = function(msg) {
        console.log(msg)
      }
      this.socket.onclose = function() {
        console.log('断开连接')
        Message({
          showClose: true,
          message: '断开连接',
          type: 'error'
        })
      }
    },
    sendText() {
      var sendCont = this.$refs.sendCont.value
      var sendName = this.$refs.sendName.value
      var jsonobj = {'name': sendName, 'cont': sendCont}
      var json = JSON.stringify(jsonobj)
      this.socket.send(json)

      this.$refs.sendCont.value = ''
      localStorage.setItem('sendName', sendName)
    }
  }
}
</script>

<style>
.mainRight{width:60%;height:700px;margin:0px auto;padding-top:15px;}
.mainShow{width:100%;height:500px;border:solid 1px #ccc;border-bottom:none;}
.mainInput{width:100%;height:200px;border:solid 1px #ccc;}
.mainInputCenter{width:95%;height:100%;margin:0 auto;}
.mainInputCenterTop{width:100%;height:20px;}
.mainInputCenterCont{width:100%;}
.mainInputCenterCont textarea{width: 97%;border-radius: 3px;/* border: none; */padding: 10px;min-height: 100px;resize: none;}
.mainInputCenterFooter{width:100%;height:40px;}
.mainInputCenterName{width:33%;float:left;}
.mainInputCenterSend{width:50%;float:right;text-align:right;}
.mainSend{width:100px;}
</style>
