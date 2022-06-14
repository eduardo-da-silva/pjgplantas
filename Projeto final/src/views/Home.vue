<template>
  <div class="row">
    <div class="col-9 offset-1 text-center mt-5 pb-4 text-dark">
      <h1 id="PDT" class="h1">Produtos à venda</h1>
    </div>
    <div
      class="col-10 offset-1 bg-light mb-5 border border-info p-4"
      v-for="(planta, i) in plantas"
      :key="i"
    >
      <div class="row">
        <div
          id="Comprar1Logo"
          class="col-6 p-4 bg-light d-flex justify-content-center"
        >
          <img
            src="@/assets/images/plantas/planta2.png"
            alt="Logo Produto 1"
            width="75%"
          />
        </div>
        <div class="col-6 p-5">
          <div id="ComprarForm">
            <h2 class="h1 text-center text-dark mb-5">{{ planta.nome }}</h2>
            <div class="form-group h5">
              <hr class="border-dark" />
              Orquídea à vista por R${{ planta.valor }} em todas as formas de
              pagamento que o cliente preferir.
              <br />
              <br />
              <a
                href="produto.html"
                id="botãoComprar"
                type="button"
                class="btn btn-info"
              >
                Comprar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "e",
  data() {
    return {
      plantas: [
        { id: 1, nome: "Orquídea", valor: "R$50,00" },
        { id: 2, nome: "Orquídea 2", valor: "R$150,00" },
        { id: 3, nome: "Orquídea 3", valor: "R$250,00" },
      ],
    };
  },
};
</script>
