<template>
  <div class="dialog">
      <div class="dialogcon">
          <p>个人信息</p>
          <el-form :label-position="labelPosition" label-width="60px" :model="userinfo">
        <el-form-item label="账号">
            <el-input v-model="userinfo.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="userinfo.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="userinfo.sex">
                <el-radio :label="'1'">男</el-radio>
                <el-radio :label="'2'">女</el-radio>
            </el-radio-group>
        </el-form-item>
        </el-form>
        <div class="handleinfo">
            <el-button @click="closeDialog()">取消</el-button>
            <el-button type="primary" @click="saveinfo()">保存</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        userinfo:''
    },
    data(){
        return{
            labelPosition:'left',
        }
    },
    methods:{
        closeDialog(){
            this.$emit('closeDialog')
        },
        saveinfo(){
            this.$http.post(this.ports.user.updataInfo,{
                username:this.userinfo.username,
                name:this.userinfo.name,
                sex:this.userinfo.sex,
            },res=>{
                if(res.data.status==1){
                    this.$message.success('保存成功')
                    this.$emit('closeDialog')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .dialogcon{
        width: 600px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #000;
        padding: 25px;
        >p{
            text-align: center;
            flex: 1;
            padding-bottom: 25px;
        }
        .handleinfo{
            display: flex;
            justify-content: center;
        }
    }
}
</style>