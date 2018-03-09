<template>
  <div>
      <game-header></game-header>
        <div class="section">
          <h1 class="title has-text-centered">Datos Basicos</h1>
          <div class="box">
            <div class="field">
              <label for="ced" class="label">Cedula de Identidad</label>
              <div class="control">
                <input type="text" id="ced" class="input">
              </div>
            </div>
            <div class="field">
              <label for="name" class="label">Nombre y Apellidos</label>
              <div class="control">
                <input type="text" id="name" class="input">
              </div>
            </div>
            <div class="field">
              <label for="email" class="label">Correo Electronico</label>
              <div class="control">
                <input type="email" id="email" class="input">
              </div>
            </div>
            <div class="field">
              <label for="userphone" class="label">Teléfono</label>
              <div class="control">
                <input type="text" id="userphone" class="input">
              </div>
            </div>
            <div class="control has-text-centered">
              <div class="button is-info">Guardar Datos</div>
            </div>
          </div>
        </div>
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
<style scoped>
.box {
  margin: 3% 25% 5% 25%;
}
</style>
