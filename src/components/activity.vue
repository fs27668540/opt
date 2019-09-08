<template>
  <div class="index-side">
      <el-container>
        <el-header>
            <commonheader></commonheader>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <sidebar :act='activity'></sidebar>
            </el-aside>
            <el-main>1</el-main>
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
            activity:'activity'
        }
    },
    components:{
        sidebar,
        commonheader
    }
}
</script>

<style>

</style>