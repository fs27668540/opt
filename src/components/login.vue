<template>
  <div>
      <div class="bg"></div>
      <div class="login-box">
          <p>Login</p>
        <el-input
            placeholder="请输入账号"
            v-model="input">
        </el-input>
        <el-input placeholder="请输入密码" v-model="pswinput" show-password></el-input>
        <el-button type="primary" @click="goIndex()">登录</el-button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        input: 'admin',
        pswinput:'123456'
      }
    },
    methods:{
        goIndex(){
            if(this.input=='admin'&&this.pswinput=='123456'){
                var dates=new Date().getTime()
                localStorage.setItem('timer',dates)
                this.$router.push('/index')
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .bg{
        width: 100%;
        height: 100%;
        position: fixed;
        background: #0e0731;
        z-index: -1;
    }
    .login-box{
        width: 450px;
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        p{
            font-size: 26px;
            color: #eee;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }
</style>
<style>
.login-box .el-input{
    margin-bottom: 22px;
}
.login-box .el-button--primary{
    width: 100%
}
</style>