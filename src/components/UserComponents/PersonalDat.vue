<template>
  <div>
      <game-header></game-header>
      <app-footer></app-footer>
  </div>
</template>
<script>
import Header from '../GameComponents/GameHeader'
import Footer from '../main/Footer'
export default {
  components: {
    GameHeader: Header,
    AppFooter: Footer
  }  
}
</script>
