<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/commons/TabBar'
export default {
  name: 'app',
    components: {Tabbar}
}
</script>

<style>
@import url('./assets/reset.css');
#app {
	
}
</style>
