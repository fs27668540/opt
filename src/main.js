// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import http from './api/http.js'
import ports from './api/port'
Vue.prototype.$http = http
Vue.prototype.ports = ports
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  var token=localStorage.getItem('token')
  if(to.meta.isLogin){
    if(token==undefined){
      next({
        path:'/login'
      })
    }else if(to.meta.open==false){
      alert('暂未开放,敬请期待')
      next(false)
    }else{
      if (to.meta.title) {
        document.title = to.meta.title
      }
      next()
    }
  }else{
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  }
})