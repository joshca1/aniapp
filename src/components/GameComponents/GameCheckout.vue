<template>
    <div>
     <game-header></game-header>
      <div class="section">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification ">
                  <p class="title has-text-centered">Complete los datos para retirar su saldo</p>
                  <div class="content">
                    <div class="field">
                      <label for="cta_usuario" class="label">Cuenta Bancaria Usuario</label>
                      <div class="control">
                        <input type="text" class="input">
                      </div>
                    </div>
                    <div class="field">
                      <label for="cta_usuario" class="label">Nombre y Apellido</label>
                      <div class="control">
                        <input type="text" class="input">
                      </div>
                    </div>
                    <div class="field">
                      <label for="cta_usuario" class="label">Cedula de Identidad</label>
                      <div class="control">
                        <input type="text" class="input">
                      </div>
                    </div>
                    <div class="field">
                      <label for="cta_usuario" class="label">Tipo Cuenta</label>
                        <div class="control">
                        <label class="radio">
                          <input type="radio" name="question">
                          Corriente
                        </label>
                        <label class="radio">
                          <input type="radio" name="question">
                          Ahorro
                        </label>
                      </div>
                    </div>
                    <div class="field">
                      <label for="cta_usuario" class="label">Monto a Retirar</label>
                      <div class="control">
                        <input type="text" class="input">
                      </div>
                    </div>
                    <div class="field">
                    <label for="" class="label">Banco Cliente:</label>
                    <div class="select">
                      <select name="banco">
                        <option value="" disabled selected>Seleccione un Banco</option>
                        <option value="0156">100% BANCO</option>
                        <option value="0196">ABN AMRO BANK</option>
                        <option value="0172">BANCAMIGA BANCO MICROFINANCIERO, C.A.</option>
                        <option value="0171">BANCO ACTIVO BANCO COMERCIAL, C.A.</option>
                        <option value="0166">BANCO AGRICOLA</option>
                        <option value="0175">BANCO BICENTENARIO</option>
                        <option value="0128">BANCO CARONI, C.A. BANCO UNIVERSAL</option>
                        <option value="0164">BANCO DE DESARROLLO DEL MICROEMPRESARIO</option>
                        <option value="0102">BANCO DE VENEZUELA S.A.I.C.A.</option>
                        <option value="0114">BANCO DEL CARIBE C.A.</option>
                        <option value="0149">BANCO DEL PUEBLO SOBERANO C.A.</option>
                        <option value="0163">BANCO DEL TESORO</option>
                        <option value="0176">BANCO ESPIRITO SANTO, S.A.</option>
                        <option value="0115">BANCO EXTERIOR C.A.</option>
                        <option value="0003">BANCO INDUSTRIAL DE VENEZUELA.</option>
                        <option value="0173">BANCO INTERNACIONAL DE DESARROLLO, C.A.</option>
                        <option value="0105">BANCO MERCANTIL C.A.</option>
                        <option value="0191">BANCO NACIONAL DE CREDITO</option>
                        <option value="0116">BANCO OCCIDENTAL DE DESCUENTO.</option>
                        <option value="0138">BANCO PLAZA</option>
                        <option value="0108">BANCO PROVINCIAL BBVA</option>
                        <option value="0104">BANCO VENEZOLANO DE CREDITO S.A.</option>
                        <option value="0168">BANCRECER S.A. BANCO DE DESARROLLO</option>
                        <option value="0134">BANESCO BANCO UNIVERSAL</option>  
                        <option value="0177">BANFANB</option>
                        <option value="0146">BANGENTE</option>
                        <option value="0174">BANPLUS BANCO COMERCIAL C.A</option>
                        <option value="0190">CITIBANK.</option>
                        <option value="0121">CORP BANCA.</option>
                        <option value="0157">DELSUR BANCO UNIVERSAL</option>
                        <option value="0151">FONDO COMUN</option>
                        <option value="0601">INSTITUTO MUNICIPAL DE CR&#201;DITO POPULAR</option>
                        <option value="0169">MIBANCO BANCO DE DESARROLLO, C.A.</option>
                        <option value="0137">SOFITASA</option>
                      </select>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control has-text-centered">
                      <div class="button is-success">Enviar Orden Retiro</div>
                    </div>
                  </div>

                  </div>
                </article>
              </div>
            </div>

          </div>
          <div class="tile is-parent">
            <article class="tile is-child has-text-justified notification is-danger">
              <div class="content">
                <p class="title has-text-centered">Importante!</p>
                <p class="subtitle">Debe cargar los datos bancarios en las opciones de usuario o click en el boton Bancos</p>
                <div class="content">
                  <div class="control has-text-centered">
                    <div class="button is-info">
                      Bancos
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
     <main-footer></main-footer>
  </div>
</template>

<script>
export default {
}
</script>
