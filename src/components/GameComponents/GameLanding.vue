<template>
    <div>
        <game-header></game-header>
        <section class="section">

          <div class="content">
            <div class="column is-2 is-offset-1 has-text-centered saldo-disponible">{{saldo_disponible}}</div>
            <div class="columns is-gapless loterias-disponibles is-info">
              <div class="colum">1</div>
              <div class="colum">2</div>
              <div class="colum">3</div>
            </div>
          </div>


              <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                  <div class="title">
                    <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-warning">
                      <p class="title has-text-centered">Cuadro de Apuestas</p>
                      <div class="content">
                        <div class="box"></div>
                      </div>
                    </article>
                  </div>
                  </div>
                </div>

                <div class="tile is-parent">
                  <article class="tile is-child notification is-info">
                    <div class="content">
                      <p class="title has-text-centered">Resumen de Juego</p>
                      <div class="content">
                        <div class="box"></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>


        </section>

      <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './GameHeader'
import Footer from '../main/Footer'
export default {
  data () {
    return {
      saldo_disponible: 'SALDO: 300 Bs.'
    }
  },
  components: {
    GameHeader: Header,
    AppFooter: Footer
  }
}
</script>

<style>
.saldo-disponible{
background-color: lightcoral;
}
.loterias-disponibles{
  background-color: lightcoral;
}
</style>
