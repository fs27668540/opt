import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import NotFound from '@/components/404'
import index from '@/components/index'
import systems from '@/components/system'
import message from '@/components/message'
import brand from '@/components/brand'
import shop from '@/components/shop'
import activity from '@/components/activity'
import home from '@/components/home'
import deciphering from '@/components/deciphering'
import jsmethods from '@/components/jsmethods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/',
      name: 'index',
      meta:{
        isLogin:false
      },
      component: index,
      redirect:'/index'
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        isLogin:false,
        title:'登录'
      },
      component: login,
    },
    {
      path:'/index',
      name:'index',
      meta:{
        isLogin:true,
        title:'首页'
      },
      component:index,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          meta:{
            isLogin:true,
            title:'首页',
            open:true
          },
          component:home
        },
        {
          path:'/systems',
          name:'systems',
          meta:{
            isLogin:true,
            title:'系统管理',
            open:false
          },
          component:systems
        },
        {
          path:'/message',
          name:'message',
          meta:{
            isLogin:true,
            title:'基本信息管理'
          },
          component:message
        },
        {
          path:'/brand',
          name:'brand',
          meta:{
            isLogin:true,
            title:'平台管理',
            open:false
          },
          component:brand
        },
        {
          path:'/shop',
          name:'shop',
          meta:{
            isLogin:true,
            title:'商品管理',
            open:false
          },
          component:shop
        },
        {
          path:'/activity',
          name:'activity',
          meta:{
            isLogin:true,
            title:'活动管理',
            open:false
          },
          component:activity
        },
        {
          path:'/deciphering',
          name:'deciphering',
          meta:{
            isLogin:true,
            title:'加密解密',
            open:true
          },
          component:deciphering
        },
        {
          path:'/jsmethods',
          name:'jsmethods',
          meta:{
            isLogin:true,
            title:'js方法',
            open:true
          },
          component:jsmethods
        }
      ]
    },
  ]
})
