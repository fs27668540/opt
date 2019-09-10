<template>
  <div class="index-side">
      <el-container>
        <el-header>
            <commonheader></commonheader>
        </el-header>
        <el-container>
            <el-scrollbar style="height:100%">
                <el-aside width="200px">
                    <sidebar :act="index"></sidebar>
                </el-aside>
            </el-scrollbar>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import sidebar from './sidebar'
import commonheader from './header'
export default {
    data(){
        return{
            index:'index',
             
        }
    },
    components:{
        sidebar,
        commonheader
    },
    methods:{
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        }
    }
}
</script>

<style lang="scss" scoped>
    .index-side{
        height: 100%;
        color: #fff
    }
    header{
        line-height: 60px;
    }
</style>
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
    .demo-table-expand {
    font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 52%;
    }
</style>