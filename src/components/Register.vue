<template>
<div>
<main-header></main-header>
    <section class="section">
    <div class="column is-6 is-offset-3">
        <div class="box">
            <form action="/registro" method="GET">
            <div class="field">
                <label for="name">Nombre</label>
                <div class="control has-icons-left">
                    <input class="input is-rounded" id="name" type="text" placeholder="Nombre">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label for="lastname">Apellido</label>
                <div class="control">
                    <input class="input is-rounded" id="lastname" type="text" placeholder="Apellido">
                </div>
            </div>

<label for="identification">Cedula / identificacion</label>
<div class="field">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <span class="select">
          <select name="Typeidentificacion" id="Typeidentificacion">
              <option value="V">V</option>
              <option value="E">E</option>
          </select>
        </span>
        <p class="control is-expanded">
          <input class="input is-rounded" id="identification" type="text" placeholder="Documento de Identificacion">
        </p>
      </div>
      <p class="help is-danger">{{error}}</p>
    </div>
  </div>
</div>     
            
            <div class="field">
                <label for="email">Correo Electronico</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-rounded" id="email" type="email" placeholder="Correo Electronico">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-danger">{{error}}</p>
            </div>

            <div class="field">
                <label for="phone">Telefono</label>
                <div class="control has-icons-left">
                    <input class="input is-rounded" id="phone" type="tel" placeholder="Telefono">
                    <span class="icon is-small is-left">
                    <i class="fas fa-phone"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label for="password">Password</label>
                <div class="control has-icons-left">
                    <input class="input is-rounded" id="password" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </div>
                <p class="help is-danger">{{error}}</p>
            </div>

            <div class="field">
                <label for="repassword">Repetir Password</label>
                <div class="control has-icons-left">
                    <input class="input is-rounded" id="repassword" type="password" placeholder="Repetir Password">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </div>
                <p class="help is-danger">{{error}}</p>
            </div>

            <div class="field">
                <label for="refcode">Codigo Referido *</label>
                <div class="control">
                    <input class="input is-rounded" type="text" id="refcode" placeholder="Codigo Referido">
                </div>
                <p class="help is-danger">{{error}}</p>
            </div>

            <!-- Login de Google -->

            <div class="column is-offset-3 g-recaptcha" data-sitekey="6LefZEgUAAAAANG9rqoVMcAo_SYL-heBHpo-ovFY">

            </div>
            <!-- Login de Google -->
            <br>
            <div class="field has-text-centered">
                <div class="control">
                    <input type="submit" class="button is-block is-info  is-fullwidth" value="Registrarse">
                </div>
            </div>

        </form>
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
            error: 'Error Mensaje'
        }
    }
}
</script>

<style scoped>
.fa-check{
    color:rgb(53, 134, 53);
}
</style>
