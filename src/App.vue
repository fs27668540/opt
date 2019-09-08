<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background: #0e0731
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html,body,#app{
  height: 100%;
}
</style>
