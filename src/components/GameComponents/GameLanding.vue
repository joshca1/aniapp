<template>
    <div>
        <game-header></game-header>
        <section class="section">

          <div class="content">
            <div class="column is-2 is-offset-1 has-text-centered saldo-disponible">{{saldo_disponible}}</div>
          </div>

            <div class="content">
              <div class="level">
                <div class="level-item">
                  <button class="button is-warning is-outlined">Lotto Activo</button>
                </div>
                <div class="level-item">
                  <button class="button is-info is-outlined">Lotto Zulia</button>
                </div>
                <div class="level-item">
                  <button class="button is-primary is-outlined">Lotto Panda</button>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="level">
                <div class="level-item">
                  <div class="box">1</div>
                </div>
                <div class="level-item">
                  <div class="box">2</div>
                </div>
                <div class="level-item">
                  <div class="box">3</div>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="field is-horizontal">
                <div class="control has-icons-right">
                  <input type="text" class="input has-text-centered" placeholder="buscar animalito">
                  <span class="icon is-small is-right">
                    <i class="fas fa-search"></i>
                  </span>
                </div>
              </div>
            </div>


              <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                  <div class="title">
                    <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-warning">
                      <p>{{sorteo_actual}}</p>
                      <p class="title has-text-centered">Cuadro de Apuestas</p>
                      <div class="content is-info">
                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <input class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">1</div>
                            <div class="column">1</div>
                            <div class="column">1</div>
                          </div>
                      </div>
                      <div class="button is-info">
                        <p>Apostar</p>
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
      saldo_disponible: 'SALDO: 300 Bs.',
      sorteo_actual: 'Lotto Zulia 3:00 pm - 03-03-2019'
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
  background-color: lightseagreen;
}
</style>
