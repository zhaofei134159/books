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
                        <el-input type="text" placeholder="名称" ref="sendName" v-model="sendName" maxlength="10" show-word-limit> </el-input>
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
import {getClientIp} from '@/request/api.js'
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
      sendName: localStorage.getItem('sendName'),
      clientIp: '',
    }
  },
  created: function() {
    console.log(this.sendName)
    this.socket_link()
    this.getClientIpRes()
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
        this.$message({message: '连接成功', type: 'success'})
      }
      this.socket.onmessage = function(msg) {
        console.log(msg)
      }
      this.socket.onclose = function() {
        this.$message.error('断开连接')
        console.log('断开连接')
      }
    },
    getClientIpRes() {
      var self = this
      getClientIp().then(res => {
        if (res.errorNo === '0') {
          self.clientIp = res.seccuss.clientIp
        } else {
          this.$message.error('请求错误, 请重试！')
        }
      }) 
    },
    sendText() {
      var sendCont = this.$refs.sendCont.value
      var sendName = this.$refs.sendName.value
      if (sendName === '') {
        this.$message.error('名称不能为空')
        return false
      }
      if (sendCont === '') {
        this.$message.error('内容不能为空')
        return false
      }

      var jsonobj = {'name': sendName, 'cont': sendCont, 'ip':this.clientIp}
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
