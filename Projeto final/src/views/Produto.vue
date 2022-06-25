<template>
  <b-container fluid class="produto">
    <b-row class="row">
      <b-col class="col1">
        <img
          src="https://img.freepik.com/psd-gratuitas/sombra-de-folhas-de-palmeira-na-parede_53876-84542.jpg?t=st=1655673278~exp=1655673878~hmac=f8b41a2447ba456492405f6e40ac1e574cceb38c893f2629b627779e06b3a654&w=826"
          alt=""
          height="840px"
          width="100%"
        />
      </b-col>
      <b-col class="col2 border border-light">
        <h1><div class="nome">Nome do Produto</div></h1>
        <br />
        <br />
        <h4>
          <div class="descricao">
            Produto de não sei oq la entendeu e simplesmente é isso. silencio e
            trabalho, e não se esqueça... FORGET!
          </div>
        </h4>
        <div class="subdescricao">
          Por R$50,00 a vista <br />
          ou 3x de R$ 19,50. <br />
          <p></p>
          Quantidade:
        </div>
        <div class="spinb">
          <b-form-spinbutton
            id="demo-sb"
            v-model="value"
            min="1"
            max="10"
            inline
          ></b-form-spinbutton>
        </div>
        <div class="Total">
          <h3>TOTAL:</h3>
        </div>
        <br />
        <b-button class="btncad" type="submit" href="/dadoscompra"
          >Finalizar</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
};
</script>

<style>
.row {
  background: #ffffff;
  border-radius: 5px;
}
.produto {
  padding: 30px;
  margin-top: 15px;
  font-family: "Jomolhari", serif;
  height: 100vh;
}
.col1 {
  border-radius: 4px;
  padding: 1px;
  margin-left: 5px;
  box-shadow: 5px 8px 7px 6px rgba(15, 52, 6, 0.85);
}
.col2 {
  border-radius: 4px;
  box-shadow: 5px 8px 7px 6px rgba(15, 52, 6, 0.85);
}
.nome {
  margin-top: 170px;
  color: #0f3406;
  text-align: center;
}
.descricao {
  text-align: left;
  color: #0f3406;
  padding: 20px;
  margin: 0 0 0 10%;
}
.subdescricao {
  text-align: left;
  color: #3e9661;
  opacity: 80%;
  font-size: 22px;
  padding: 18px;
  margin: 0 0 0 10%;
}
.Total {
  margin: 0 0 0 12%;
  padding: 10px;
}
.btncad {
  padding: 15px;
  background-color: #3e9661;
  border-color: #3e9661;
  font-size: 25px;
  margin: 0 0 0 45%;
}
.btncad:hover {
  background-color: #43b973;
  border: 0;
  color: white;
}
.img {
  filter: drop-shadow(0px 5px 10px rgba(15, 52, 6, 0.42));
}
.spinb {
  margin: 0 0 0 12%;
}
</style>
