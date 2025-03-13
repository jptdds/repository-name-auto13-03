let carro = {

    rodas :4,
    portas: 4,
    cor: "vermelho",
    motor: "v8",
    volante: "couro preto tipo cobra"
};
console.log(carro.cor);
buzinar= function(){
    console.log("Biiiiiiiiiiiiiiiiiiii");

}
console.log("A cor do carro é $(carro.cor) e o motor é $(carro.motor)" );
carro.cor= "verde"; // mudando cor
console.log(" A cor do carro é $(carro.cor) e o motor é $(carro.motor) " );
carro.chassi = "8878978979789789"; // adicionando chassis
console.log(" A cor do carro é $(carro.cor) e o chassi é $(carro.chassi)");
delete carro.volante; // deletando o atributo volante
console.log(carro);


/* {} = objeto [] = array */
