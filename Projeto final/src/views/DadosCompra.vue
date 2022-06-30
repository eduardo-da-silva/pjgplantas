<template>
  <b-container>
    <div class="title">DIGITE SEUS DADOS PARA COMPRA</div>
    <b-row>
      <b-col class="col1">
        <div class="subtitle">Dados Pessoais</div>
        <div>CPF:</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Insira seu CPF:"
          ></b-form-input>
        </div>
        <div>RG:</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Insira seu RG:"
          ></b-form-input>
        </div>
        <div>Estado:</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Insira seu estado:"
          ></b-form-input>
        </div>
        <div>Cidade:</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Insira sua cidade:"
          ></b-form-input>
        </div>
        <div>CEP:</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Insira seu CEP:"
          ></b-form-input>
        </div>
        <div>Complemento:</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Insira seu complemento"
          ></b-form-input>
        </div>
        <div>Nº</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Insira o Nº:"
          ></b-form-input>
        </div>
      </b-col>
      <b-col class="col2">
        <div class="subtitle">Dados de Compra</div>
        <div>Escolha a forma de pagamento</div>
        <b-dropdown id="dropdown-1" text="Cartão de débito" class="m-md-2">
          <b-dropdown-item>Cartão de débito</b-dropdown-item>
          <b-dropdown-item>PIX</b-dropdown-item>
          <b-dropdown-item>Boleto</b-dropdown-item>
        </b-dropdown>
        <div>Numero do Cartão</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Digite o numero do cartão"
          ></b-form-input>
        </div>
        <div>CVV</div>
        <div>
          <b-form-input
            v-model="text"
            placeholder="Digite o CVV"
          ></b-form-input>
        </div>
        <div>Validade</div>
        <div>
          <b-dropdown id="dropdown-2" text="Mês" class="m-md-2" v-model="mes">
            <b-dropdown-item>Janeiro</b-dropdown-item>
            <b-dropdown-item>Fevereiro</b-dropdown-item>
            <b-dropdown-item>Março</b-dropdown-item>
            <b-dropdown-item>Abril</b-dropdown-item>
            <b-dropdown-item>Maio</b-dropdown-item>
            <b-dropdown-item>Junho</b-dropdown-item>
            <b-dropdown-item>Julho</b-dropdown-item>
            <b-dropdown-item>Agosto</b-dropdown-item>
            <b-dropdown-item>Setembro</b-dropdown-item>
            <b-dropdown-item>Outubro</b-dropdown-item>
            <b-dropdown-item>Novembro</b-dropdown-item>
            <b-dropdown-item>Dezembro</b-dropdown-item>
          </b-dropdown>
          <b-dropdown id="dropdown-3" text="Ano" class="m-md-2">
            <b-dropdown-item>2010</b-dropdown-item>
            <b-dropdown-item>2011</b-dropdown-item>
            <b-dropdown-item>2012</b-dropdown-item>
            <b-dropdown-item>2013</b-dropdown-item>
            <b-dropdown-item>2014</b-dropdown-item>
            <b-dropdown-item>2015</b-dropdown-item>
            <b-dropdown-item>2016</b-dropdown-item>
            <b-dropdown-item>2017</b-dropdown-item>
            <b-dropdown-item>2018</b-dropdown-item>
            <b-dropdown-item>2019</b-dropdown-item>
            <b-dropdown-item>2020</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="imagens">
          <img
            src="../assets/images/cartao/1200px-Hipercard_logo 1.png"
            alt=""
          />
          <img src="../assets/images/cartao/nu-icon 1.png" alt="" />
          <img src="../assets/images/cartao/2018.01.25-13.39 1.png" alt="" />
          <img src="../assets/images/cartao/MBR1uLe0_400x400 1.png" alt="" />
          <img src="../assets/images/cartao/unnamed 1.png" alt="" />
          <img src="../assets/images/cartao/1200x600wa 1.png" alt="" />
        </div>
      </b-col>
    </b-row>
    <b-button class="button">COMPRAR</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      mes: true,
    };
  },
};
</script>

<style>
.title {
  font-family: "Jomolhari";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  color: rgba(62, 150, 97, 0.95);
  padding: 5px;
  text-align: center;
  margin: 30px;
  text-transform: uppercase;
}
.subtitle {
  font-family: "Jomolhari";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  padding: 20px;
}
.btn-secondary.dropdown-toggle {
  background: white;
  border-color: rgba(62, 150, 97, 0.95);
  color: black;
  border: 0;
  font-size: 15px;
}
.btn-secondary.dropdown-toggle:hover {
  background: rgba(62, 150, 97, 0.95);
  color: white;
  border-color: rgba(62, 150, 97, 0.95);
}
.dropdown-menu {
  background: #e6e6e6;
  color: black;
  border-radius: 3px;
  font-family: "Jomolhari";
  line-height: 19px;
}
.dropdown-item:hover {
  background: rgba(62, 150, 97, 0.95);
  color: white;
}
.form-control {
  background: white;
  border-style: none none solid none;
  border-color: rgba(62, 150, 97, 0.95);
  margin: 5px;
  font-size: 15px;
  color: black;
  font-weight: bold;
}

.col2 {
  margin: 0 0 0 20%;
}
.imagens {
  margin: 5% 0 0 0;
}
.button {
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
  font-size: 1.125rem;
  margin: 8% 0 0 45%;
  width: 150px;
}
.button:hover {
  background: #ff691e;
  opacity: 80%;
  color: white;
}
@media (max-width: 844px) {
  .col1 {
    margin: 0 0 0 4%;
  }
  .col2 {
    margin: 0 10% 0 5%;
  }
  .subtitle {
    text-align: center;
  }
  .button {
    margin: 2% 0 10% 30%;
  }
  .imagens {
    margin-bottom: 10%;
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
