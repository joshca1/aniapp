<template>
    <div>
     <game-header></game-header>
      <section class="section">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child notification is-info">
                    <p class="title has-text-centered">Ultimos Movimientos</p>
                    
                    <figure class="image">
                      
                    </figure>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-success">
                <div class="content">
                  <p class="title">Tall tile</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </div>
              </article>
            </div>
          </div>
            <nav class="pagination" role="navigation" aria-label="pagination">
              <a class="pagination-previous" title="This is the first page" disabled>Anterior</a>
              <a class="pagination-next">Siguiente Pagina</a>
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 2">2</a>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 3">3</a>
                </li>
              </ul>
          </nav>
        </div>
      </section>
     <main-footer></main-footer>
  </div>
</template>

<script>
export default { 
}
</script>
