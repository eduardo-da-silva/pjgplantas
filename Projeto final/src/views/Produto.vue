<template>
  <b-container fluid class="produto">
    <b-row class="row">
      <b-col class="col1">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_963647-MLB48382302651_112021-W.webp"
          alt=""
          class="img"
        />
      </b-col>
      <b-col class="col2">
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
  border: 0;
  border-radius: 6px;
  font-weight: 500;
  font-style: normal;
  font-family: "Jomolhari";
  color: #fff;
  background: #ff691e;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 20px;
  margin: 8% 0 0 45%;
}
.btncad:hover {
  background: #ff691e;
  opacity: 80%;
  color: white;
}
.img {
  filter: drop-shadow(0px 5px 10px rgba(15, 52, 6, 0.42));
}
.spinb {
  margin: 0 0 0 12%;
}

@media (max-width: 844px) {
  .row {
    border: 0;
    width: 390px;
  }
  .col1 {
    width: 390px;
    box-shadow: none;
    border-style: solid none solid none;
    border-color: #0f3406;
  }
  .navpr {
    box-shadow: none;
  }
  .produto {
    padding: 0;
    height: 1150px;
  }
  .img {
    width: 390px;
    height: 390px;
  }
  .col2 {
    width: 390px;
    box-shadow: none;
    height: 100px;
    margin: 0;
    padding: 0;
  }
  .dprincipal {
    width: 390px;
  }
  .nome {
    margin: 15% 0 0 0;
    text-align: center;
  }
  .btncad {
    margin: 9% 0 0 35%;
  }
  #footer {
    margin: 0 0 0 5%;
    display: flex;
  }
  .footer1 {
    margin: 5% 0 0 0;
    text-align: center;
  }
  .footer2 {
    margin: 0 20% 0 0;
    text-align: center;
  }
}
</style>
