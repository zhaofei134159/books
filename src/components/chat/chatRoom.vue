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
                         <a href="https://blog.myfeiyou.com/home/login" target="__block"><img src="https://blog.myfeiyou.com/public/home/img/login.png" width="40" alt="登录" title="登录"></a>
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
import {getLoginUserInfo} from '@/request/api.js'
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
      is_login: false,
      sign: window.btoa('chatRoom'),
      sendName: localStorage.getItem('sendName')
    }
  },
  created: function() {
    console.log(this.sendName)

    // 检测是否登录成功
    window.setInterval(() => {
      this.is_login = this.check_login()

      // 如果登录成功后才链接websocket
      if (this.is_login) {
        this.socket_link()
        // 心跳测试
        window.setInterval(() => {
          this.heartbeatTest()
        }, 10000)
      }
    }, 1000)
  },
  destroyed: function() {
    var jsonobj = {'name': this.sendName, 'cont': '', 'type': 'out', 'sign': this.sign}
    var json = JSON.stringify(jsonobj)
    this.socket.send(json)

    this.socket.close()
    this.socket = null
  },
  methods: {
    check_login() {
      getLoginUserInfo().then(res => {
        if (res.errorNo === '0') {
          console.log(res)
        } else {
          Message({showClose: true, message: '请求错误, 请重试！', type: 'error'})
        }
      })
    },
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
      if (sendName === '') {
        Message({showClose: true, message: '名称不能为空', type: 'error'})
        return false
      }
      if (sendCont === '') {
        Message({showClose: true, message: '内容不能为空', type: 'error'})
        return false
      }

      var jsonobj = {'name': sendName, 'cont': sendCont, 'type': 'msg', 'sign': this.sign}
      var json = JSON.stringify(jsonobj)
      this.socket.send(json)

      this.$refs.sendCont.value = ''
      localStorage.setItem('sendName', sendName)
    },
    heartbeatTest() {
      var json = 'ping'
      this.socket.send(json)
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
