<template>
  <div class="sidebar">
      <el-menu
      :default-active="act"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#14B2FF">
      <el-menu-item index="index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="message">
        <i class="el-icon-document"></i>
        <span slot="title">基本信息管理</span>
      </el-menu-item>
      <el-menu-item index="systems">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
      <el-menu-item index="brand">
        <i class="el-icon-menu"></i>
        <span slot="title">平台管理</span>
      </el-menu-item>
      <el-menu-item index="shop">
        <i class="el-icon-s-shop"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="activity">
        <i class="el-icon-s-flag"></i>
        <span slot="title">活动管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    props:{
        act:''
    },
    methods:{
        
    }
}
</script>

<style>
.el-menu{
    border:none;
    background: none !important
}
.el-menu-item{
    background: none !important;
}
.el-aside{
    overflow: visible
}
.el-scrollbar__view{
    height: 100%;
}
.el-scrollbar__wrap{
    overflow-x: hidden
}
</style>