<template>
  <div>
    <div class="bg"></div>
    <div class="login-box">
      <p>Login</p>
      <el-input placeholder="请输入账号" v-model="input"></el-input>
      <el-input placeholder="请输入密码" v-model="pswinput" show-password></el-input>
      <el-button type="primary" @click="goIndex()">登录</el-button>
      <p @click="Toregister()">还没有账号？立即注册</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      pswinput: ""
    };
  },
  methods: {
    goIndex() {
      if (!this.input.trim() || !this.pswinput.trim()) {
        this.$message.error("不能为空");
      } else {
        this.$http.post(
          this.ports.oauth.login,
          {
            username: this.input,
            password: this.pswinput
          },
          res => {
            if (res.data.status == 1) {
              this.$message.success("登录成功");
              localStorage.setItem('uid',res.data.uid)
              localStorage.setItem('token',res.data.token)
              this.$router.push({ path: "/home" });
            } else {
              this.$message.error(res.data.info);
            }
          }
        );
      }
    },
    Toregister() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>

<style lang='scss' scoped>
.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #0e0731;
  z-index: -1;
}
.login-box {
  width: 450px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  button + p {
    font-size: 14px;
    color: #32baf0;
    font-weight: normal;
    text-align: right;
    margin-top: 15px;
    cursor: pointer;
  }
}
</style>
<style>
.login-box .el-input {
  margin-bottom: 22px;
}
.login-box .el-button--primary {
  width: 100%;
}
</style>