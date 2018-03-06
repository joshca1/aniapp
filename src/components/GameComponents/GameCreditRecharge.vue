<template>
    <div>
      <game-header></game-header>
      <section class="section">
        <h1 class="title has-text-centered">Recargas</h1>
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title has-text-centered">Transferencia Bancaria</p>
                <p class="subtitle has-text-centered">Registra los datos de la transferencia</p>
                <div class="box">
                  <div class="field">
                    <label for="" class="label">Fecha Transferencia:</label>
                    <div class="control">
                      <input type="date" class="input">
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">Numero Referencia:</label>
                    <div class="control">
                      <input type="text" class="input">
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">Monto Transferido:</label>
                    <div class="control">
                      <input type="text" class="input">
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">Banco Cliente:</label>
                    <div class="select">
                      <select name="banco_emisor" id="banco_emisor">
                        <option value="Bco_vzla">Banco de Venezuela</option>
                        <option value="Bco_vzla">Banco de Venezuela</option>
                        <option value="Bco_vzla">Banco de Venezuela</option>
                        <option value="Bco_vzla">Banco de Venezuela</option>
                        <option value="Bco_vzla">Banco de Venezuela</option>
                      </select>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="question">
                        Banesco
                      </label>
                    </div>
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="question">
                        Banco de Venezuela
                      </label>
                    </div>
                  </div>

                  <div class="control has-text-centered">
                   <div class="button is-warning">Enviar Orden Recarga</div>
                  </div>
                </div>
    
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <p class="title">Cuentas Bancarias Disponibles</p>
                <p class="subtitle has-text-centered">Banco de Venezuela</p>
                <div class="content">
                  <article class="message is-link is-small">
                    <div class="message-body">
                      <p>A nombre de: Juegatuanimalito, C.A.</p>
                      <p>Cuenta Numero: 0102-05-01-86-0000-56-2124</p>
                      <p>Cuenta Corriente</p>
                      <p>R.I.F j-3084578-4</p>
                      <p>Correo: pagos@juegatuanimalito.com</p>
                    </div>
                  </article>
                </div>
              </div>
               <div class="content">
                <p class="subtitle has-text-centered">Banesco</p>
                <div class="content">
                  <article class="message is-link is-small">
                    <div class="message-body">
                      <p>A nombre de: Juegatuanimalito, C.A.</p>
                      <p>Cuenta Numero: 0102-05-01-86-0000-56-2124</p>
                      <p>Cuenta Corriente</p>
                      <p>R.I.F j-3084578-4</p>
                      <p>Correo: pagos@juegatuanimalito.com</p>
                    </div>
                  </article>
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
  components: {
    GameHeader: Header,
    AppFooter: Footer
  }  
}
</script>
