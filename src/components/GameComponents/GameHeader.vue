<template>
    <div>
        <section class="hero is-light">
    <header>
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-burger burger " data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <a href="/jugar" class="navbar-item">
                Jugar
              </a>
              <a href="/recargar" class="navbar-item">
                Recarga Saldo
              </a>
              <a href="/retirar" class="navbar-item">
                Retira
              </a>
              <a href="/historiajuego" class="navbar-item">
                Historico de Juego
              </a>
              <a href="/estadisticas" class="navbar-item">
                Estadisticas
              </a>
               <a class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link">
                Opciones
                </a>
                <div class="navbar-dropdown">
                    
                    <a href="/datosBancarios" class="navbar-item">
                    <i class="far fa-credit-card"></i>
                    <p class="">Datos Bancarios</p> 
                    </a>

                    <a href="/datosBasicos" class="navbar-item">
                    <i class="fas fa-user"></i>
                    Datos Basicos
                    </a>
                    <a href="/invitaciones" class="navbar-item">
                    <i class="far fa-envelope"></i>
                    Invitaciones
                    </a>
                    <hr href="/" class="navbar-divider">
                    
                    <a class="navbar-item">
                      <i class="fas fa-power-off"></i>
                      Salir del Sistema
                    </a>
                </div>

              </a>
            </div>
          </div>
        </div>
        
      </nav>
    </div>
    </header>
  </section>
  </div>
</template>
