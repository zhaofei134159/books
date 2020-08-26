<template>
  <div class="bodyDiv">
    <el-row>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="16">
        <div class="grid-content top">{{msg}}</div>
        <div class="grid-content content">{{msg}}</div>
        <div class="grid-content footer">{{msg}}</div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .bodyDiv{margin:0px;padding:0px;}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .top{width:100%;height:200px;background:red;}
  .content{width:100%;min-height:800px;background:blue;}
  .footer{width:100%;height:200px;background:yellow;}
</style>
