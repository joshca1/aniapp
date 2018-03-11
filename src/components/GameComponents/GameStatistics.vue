<template>
  <div>
    <game-header></game-header>
      <section class="section">
        <line-chart :data="ChartData" :options="ChartOption">
        </line-chart>
      </section>
    <main-footer></main-footer>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      ChartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','dicember'],
            datasets: [
              {
                label: ['dataone','datatwo','data tree'],
                backgroundColor: '#f87979',
                data: [40, 39, 300, 40, 39, 80, 40,102]
              }
            ]
             },
      ChartOption: {responsive: true, maintainAspectRatio: false}
    }
  }
}
</script>
