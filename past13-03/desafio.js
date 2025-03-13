let compraSupermercado = [25, 36, 2.5 , 0.20 , 0.5, 60, 90, 6.99, ];

function adicionarProdutosCompra (compraSupermercado,novoProduto){
    compraSupermercado.push(novoProduto);
    return adicionarProdutosCompra;
}
function removerProdutoCompraPop (compraSupermercado){
    compraSupermercado.pop();
   return compraSupermercado;
}
function removerProdutoCompraFilter(compraSupermercado,valorRemocao){
    let compraSupermercadoRemovido = compraSupermercado.filter(produto =>{
     return produto === valorRemocao;
    });
     return compraSupermercadoRemovido
}
function valorCompra (compraSupermercado){
    let valortotal =0;
    compraSupermercado.forEach(produto => {
        valortotal += produto;
    })
    return valortotal;
}
adicionarProdutosCompra(compraSupermercado, 21.50);
adicionarProdutosCompra(compraSupermercado, 35.00);
removerProdutoCompraPop(compraSupermercado);
console.log(compraSupermercado);

console.log(removerProdutoCompraFilter(compraSupermercado,10));
console.log(valorCompra(compraSupermercado));

//array vetores const numeros = [0,1,2,3,4,5];
// const pares = numeros.filter(num => num % 2 === 0);
/* const = "João";
const.log("meu nome é", nome);
try {
    let numeros = [I0, 20,30};
        CONSOLE.LOG(NUMEROS5*/

let texto = "Hellow Fellas";
console.log("Ele disse", texto);
console.log('ELe disse ${texto}');
let numeros = (24)


