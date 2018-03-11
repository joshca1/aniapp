<template>
    <div>
        <game-header></game-header>
        <section class="section">

          <div class="content">
            <div class="column is-2 is-offset-1 has-text-centered saldo-disponible">{{saldo_disponible}}</div>
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
                <div class="level-item is-gapless">
                  <div class="box">2</div>
                </div>
                <div class="level-item">
                  <div class="box">3</div>
                </div>
              </div>
            </div>

                         



              <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                  <div class="title">
                    <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                      <p class="has-text-centered">{{sorteo_actual}}</p>
                      <p class="title has-text-centered">Cuadro de Apuestas</p>
                        <div class="control has-icons-right">
                          <input type="text" class="input has-text-centered" placeholder="buscar animalito">
                          <span class="icon is-small is-right">
                            <i class="fas fa-search"></i>
                          </span>
                        </div>  
                      <div class="content is-info game_layout">
                          <div class="columns has-text-centered is-info ">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="columns has-text-centered is-info">
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                            <div class="column">
                              <div class="box">
                                <div class="control">
                                   <figure class="avatar is-128x128">
                                      <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </figure>
                                    <p for="cuadro_animalito" class="has-text-centered">Perro</p>
                                    <input id="cuadro_animalito" class="input is-small is-info has-text-centered" type="text" placeholder="300 bs">
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="buttons has-addons is-centered">
                        <a href="#" class="button">
                          <span class="icon is-small">
                            <i class="fas fa-money-bill-alt"></i>
                          </span>
                          <span>Apostar</span>
                        </a>
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
                        <div class="box">
                          <p>Lotto zulia, 3:00pm 14/11/2017</p>
                          <p>Apuesta:</p>
                          <p>Animal: Gato, monto: 300 bs</p>
                          <p>Animal: Perro, monto: 500 bs</p> 
                        </div>
                      </div>
                    </div>
                    <p class="title is-child is-info">Total Jugado:{{total_jugado}}</p>
                  </article>
                </div>
              </div>


        </section>

      <main-footer></main-footer>
    </div>
</template>

<script>

export default {
  data () {
    return {
      saldo_disponible: 'SALDO: 300 Bs.',
      sorteo_actual: 'Lotto Zulia 3:00 pm - 03-03-2019',
      total_jugado: '5000 Bs'
    }
  }
}
</script>

<style>
.saldo-disponible{

}
.loterias-disponibles{

}

.game_layout{
  overflow-y: auto;
  height:400px;
  padding-top:2%;
  padding-right: 2%;
  
}
</style>
