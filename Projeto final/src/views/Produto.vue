<template>
    <b-container fluid class="produto">
        <b-row class="row">
            <b-col class="col1 border border-light">
                <img src="https://img.freepik.com/psd-gratuitas/sombra-de-folhas-de-palmeira-na-parede_53876-84542.jpg?t=st=1655673278~exp=1655673878~hmac=f8b41a2447ba456492405f6e40ac1e574cceb38c893f2629b627779e06b3a654&w=826" alt="" 
                    height="830px"
                    width=100%>
            </b-col>
            <b-col class="col2 border border-light">
                <h1><div class="nome">Nome do Produto</div></h1><br>
                <br>
                <h4><div class="descricao"> Produto de não sei oq la entendeu e simplesmente é isso. silencio e trabalho, e não se esqueça... FORGET! </div></h4>
                <div class="subdescricao">
                    Por R$50,00 a vista <br>
                    ou 3x de R$ 19,50. <br> <p></p>
                    Quantidade:
                </div>
                <div class="btnv">
                    <button class="btp btn btn-light"> - </button>3 <button class="btp btn btn-light" > + </button>
                </div>
                <div class="Total" >
                    <h3>
                TOTAL:
                    </h3>
                </div> <br>
                <b-button class="btncad" type="submit">Finalizar</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<style>

.produto{
    padding: 20px;
    margin-top: 15px;
    font-family: 'Jomolhari', serif;
}
.col1{
    border-radius: 4px;
    border-right: white;
    border-right-color: aliceblue;
    padding: 1px;
    margin-left: 5px;
}
.col2{
    text-align: center;
    border-radius: 4px;
    border-left-color: aliceblue;
}

.nome {
    margin-top: 170px;
    color: #0F3406;
}
.descricao{
    text-align: left;
    color: #0F3406;
    padding: 20px;
}
.subdescricao{
    text-align: left;
    color: #3E9661;
    opacity: 80%;
    font-size: 22px;
    padding: 13px;
}
.btp {
    border-color: white;
}
.btnv{
    padding: 20px;
    text-align: left;
    
}
.Total{
    margin-right: 750px;
}
.btncad{
    padding: 15px;
    background-color:#3E9661;
    border-color: #3E9661;
    font-size: 25px;
}
</style>