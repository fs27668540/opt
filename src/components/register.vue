<template>
  <div class="register">
    <div class="register-box">
      <p>注册账号</p>
      <el-input placeholder="请输入账号" v-model="input"></el-input>
      <el-input placeholder="请输入密码" v-model="pswinput" show-password></el-input>
      <el-button type="primary" @click="register()">注册</el-button>
      <p @click="Tologin()">已有账号？去登录</p>
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
    Tologin() {
      this.$router.push({ path: "/login" });
    },
    register() {
      if (!this.input.trim() || !this.pswinput.trim()) {
        this.$message.error("不能为空");
      } else {
        this.$http.post(
          this.ports.oauth.resigter,
          {
            username: this.input,
            password: this.pswinput,
          },
          res => {
            if (res.success) {
              // 返回正确的处理
              this.$message.success("注册成功");
              this.$router.push({ path: "/login" });
            } else {
              
            }
          },
          err => {
            
          }
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register-box {
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
.register-box .el-input {
  margin-bottom: 22px;
}
.register-box .el-button--primary {
  width: 100%;
}
</style>