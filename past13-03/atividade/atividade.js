class Produto {
  constructor(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }

  // Método para calcular o preço com desconto
  calcularPrecoComDesconto() {
    try {
      if (this.desconto < 0 || this.desconto > 100) {
        throw "Desconto deve ser entre 0% e 100%.";
      }

      const precoComDesconto = this.preco - (this.preco * (this.desconto / 100));
      console.log(`O preço de ${this.nome} com ${this.desconto}% de desconto é: R$ ${precoComDesconto.toFixed(2)}`);
      return precoComDesconto;
    } catch (error) {
      console.error(`Erro ao calcular preço com desconto: ${error}`);
    }
  }
}

// Criando um novo produto
let produto = new Produto("Camiseta", 100, 20); // 20% de desconto

// Calculando preço com desconto
produto.calcularPrecoComDesconto(); // R$ 80,00

// Testando erro (desconto maior que 100%)
let produtoErro = new Produto("Camiseta", 100, 120); // 120% de desconto
produtoErro.calcularPrecoComDesconto(); // Erro: Desconto deve ser entre 0% e 100%
