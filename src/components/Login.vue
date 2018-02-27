<template>
    <div>
    <app-header></app-header>
    <section class="section has-text-centered">
        <div class="column is-6 is-offset-3">
            <p>Entrar o <a href="/registro">Registrarse</a> </p>
            <hr>
            <p class="content">Inicio Session con redes sociales</p>

    <facebook-login
      appId="326022817735322"
      loginLabel="Continuar con Facebook"
      logoutLabel="Salir Session Facebook"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
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
    <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './main/Header'
import Footer from './main/Footer'
import facebookLogin from 'facebook-login-vuejs'
export default {
  components: {
    AppHeader: Header,
    AppFooter: Footer,
    facebookLogin
  },
  created () {
    
  }
}
</script>

