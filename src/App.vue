<template>
<div class="hero">
<router-view></router-view>
<line-chart></line-chart>
</div>
</template>

<script>
import menu from './components/HomeMenu'
export default {
  data () {
    return {
      pepe: ['hola','lolca','tres','uno']
    }
  },
  components: {
    appMenu: menu
  }
}
</script>

<style>
.section{
background-color: lightblue;
}
</style>