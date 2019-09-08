<template>
      <el-header>
          <div>
              <p>数据分析管理平台</p>
              <el-input
                placeholder="搜索"
                v-model="input"
                clearable>
                </el-input>
          </div>
          <div>
              <i class="el-icon-bell"></i>
              <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              <img src="../assets/img/01.png" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user-solid" command='usercenter'>个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button" command="quitlogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
          </div>
      </el-header>
</template>

<script>
export default {
    data(){
        return{
            input:''
        }
    },
    methods:{
        handleCommand(command){
            if(command=='quitlogin'){
                localStorage.setItem('timer','0')
                this.$router.push('/login')
            }
            if(command=='usercenter'){
                alert('没写呢')
            }
        }
    }
}
</script>

<style>
.el-aside{
        height: 100%;
    }
    .el-container{
        height: 100%;
    }
    .el-aside{
        background: #140D43;
        border-radius: 10px
    }
    .index-side{
        height: 100%;
        color: #fff
    }
    header{
        width: 100%;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
    }
    header i{
        font-size: 20px;
        cursor: pointer;
        color: #14B2FF
    }
    header div{
        display: flex;
        align-items: center
    }
    header img{
        width: 35px;
        height: 35px;
        cursor: pointer;
    }
    header p{
        white-space: nowrap
    }
    header .el-input--suffix{
        margin-left: 50px;
    }
    header .el-input--suffix input{
        height: 30px;
    }
    header .el-dropdown{
        height: 35px;
    }
    header .el-icon-bell{
        margin-right: 30px;
    }
</style>