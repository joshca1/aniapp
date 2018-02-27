<template>
    <div>
        <game-header></game-header>
        <section class="section">

        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './GameHeader'
import Footer from '../main/Footer'
export default {
  components: {
    GameHeader: Header,
    AppFooter: Footer
  }
}
</script>
