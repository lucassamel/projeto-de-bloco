<template>
  <div id="app">
    <Header/>
    <b-container >
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header'


export default {
  name: 'App',
  data: function(){
    return{};
  },
  components: {
    Header,
    
  }
}
</script>

<style>

.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
