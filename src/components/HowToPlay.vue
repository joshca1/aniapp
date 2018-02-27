<template>
    <div>
    <home-header></home-header>
    <section class="section has-text-centered">
        <div class="column is-6 is-offset-3">
            <p>Entrar o <a href="/registro">Registrarse</a> </p>
            <hr>
            <p>Inicio Session con redes sociales</p>
            <div class="field has-addons is-grouped is-grouped-centered">
                <p class="control">
                    <i class="fab fa-facebook-f"></i>
                </p>
                <p class="control">
                    
                    <a class="button">Facebook</a>
                </p>
                <p class="control">
                    <a class="button">Google</a>
                </p>

                <p class="control">
                    <a class="button">Twitter</a>
                </p>
            </div>
        </div>

        <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">

          <div class="box">

            <form>
              <div class="field">
                <div class="control">
                  <input class="input " type="email" placeholder="Corre Electornico" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input " type="password" placeholder="Contraseña">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Recuerdame
                </label>
              </div>
              <button class="button is-block is-info  is-fullwidth">Login</button>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../">Ingresar</a> &nbsp;·&nbsp;
            <a href="../">¿Olvidaste tu password?</a> &nbsp;·&nbsp;
            <a href="../">¿Necesitas Ayuda?</a>
          </p>
        </div>
      </div>
    </section>
    <home-footer></home-footer>
    </div>
</template>
<script>
import Header from './main/Header'
import Footer from './main/Footer'
export default {
    components: {
    HomeHeader: Header,
    HomeFooter: Footer
  }
}
</script>

<style>
</style>
