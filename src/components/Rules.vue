<template>
  <div>
  <app-home></app-home>
    <section class="section">
      <div class="column is-10 is-offset-1">
        <div class="box has-text-justified">
          <h1 class="title has-text-centered">Reglas de Juego.</h1>
                    <ol>
            <li>LOTOANIMALITO es un juego de ENVITE Y AZAR, que consiste en la extracción aleatoria de UN (1) ANIMAL que resultará ganador en cada uno de los sorteos establecidos. Permitiendo escoger entre 38 animales y pagándose 30 veces el monto de la apuesta .</li>
            <li>Se incluye la modalidad de juego ANIMAL COMODÍN. 3. Si en un determinado sorteo el ANIMAL COMODÍN sale seleccionado mediante la selección aleatoria , el premio resultante será  mínimo 36 veces el monto apostado al ANIMAL COMODÍN.</li>
            <li>En algunos sorteos especiales el premio a pagar por el ANIMAL COMODÍN puede llegar a ser superior a 36 veces, cuando esto ocurra se anunciara por los medios autorizados cuales serian estos sorteos especiales.</li>
            <li>El ANIMAL COMODÍN en todos los sorteos será el OSO PANDA identificado con el número 33, a menos que se considere algún cambio  por los medios autorizados .</li>
            <li>. La(s) apuesta(s) de los jugadores se harán a través de las taquillas autorizadas, ubicadas en los centros de apuestas identificados.</li>
            <li>Las taquillas de venta emite un ticket a modo de comprobante de la jugada que muestra el serial del ticket, código para verificar la apuesta, nombre de la taquilla, nombre del animal o animales seleccionados, monto apostado al animal o a los animales, monto total a pagar del ticket, sorteo al que está asociada la jugada.</li>
            <li>La jugada mínima y máxima será informada en la taquilla donde se realice la apuesta.</li>
            <li>EL jugador se compromete a entregar el ticket para reclamar el premio en caso de que el ticket este premiado únicamente en el centro de apuesta donde realizó la jugada.</li>
            <li>El jugador se compromete a entregar el ticket original y en perfecto estado. Tickets con evidentes daños que incapaciten parte de su lectura no se aceptarán para comprobación y/o pago de premio si los tuviese.</li>
            <li>El jugador a la hora de reclamar su premio debe comprobar que es mayor de edad.</li>
            <li>Las jugadas se realizarán hasta 10 minutos antes de cada sorteo. Jugadas realizadas por encima de ese horario se considerará como jugadas no válidas retornando de forma automática el monto de la jugada.</li>
            <li>El jugador puede reclamar el premio en el centro de apuesta donde realizó la jugada el mismo día del sorteo si el ticket estuviese premiado.</li>
            <li>Los centros de apuestas vendedoras del juego LOTOANIMALITO, son intermediarios independientes que asumen la responsabilidad por la perfecta ejecución de todas las operaciones a su cargo, sin que tal responsabilidad pueda ser imputada al operador de LOTOANIMALITO.</li>
            <li>Los dias y horas de sorteos se establecen en la pagina web http://www.lotoanimalito.com/sorteos y de existir algun cambio se informara por los medios autorizados.</li>
            <li>De existir algún problema técnico, se podrá aplazar el sorteo hasta 1 hora con 30 minutos. De no solventar los inconvenientes en ese horario, el sorteo se fusiona con el próximo sorteo disponible. siendo todos los tickets válidos para el siguiente sorteo.</li>
            <li>Los tickets vencerán a los cinco(5) días consecutivos al sorteo, a las 11:40pm. Luego del vencimiento del ticket el jugador perderá el derecho de reclamar el premio de la jugada en caso de existir.</li>
            <li>El pago de los premios es responsabilidad exclusiva del administrador de LOTOANIMALITO.</li>
          </ol>
        </div>
      </div>
    </section>

  <app-footer></app-footer>
  </div>
</template>


<script>
import Home from './main/Header'
import Footer from './main/Footer'
export default {
  components: {
    AppHome: Home,
    AppFooter: Footer
  }
}
</script>
