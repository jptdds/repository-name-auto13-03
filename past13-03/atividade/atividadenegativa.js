class Estoque {
    constructor() {
      this.produtos = {};
    }
  
    // Método para adicionar um produto ao estoque
    adicionarProduto(nome, quantidade) {
      try {
        if (quantidade < 0) {
          throw "A quantidade a ser adicionada não pode ser negativa.";
        }
        if (!this.produtos[nome]) {
          this.produtos[nome] = 0; // Se o produto não existir, inicializa com 0
        }
        this.produtos[nome] += quantidade;
        console.log(`Adicionado ${quantidade} unidades de ${nome}. Novo estoque: ${this.produtos[nome]}`);
      } catch (error) {
        console.error(`Erro ao adicionar produto: ${error}`);
      }
    }
  
    // Método para subtrair a quantidade de um produto no estoque
    subtrairProduto(nome, quantidade) {
      try {
        if (quantidade < 0) {
          throw "A quantidade a ser subtraída não pode ser negativa.";
        }
        if (!this.produtos[nome]) {
          throw `Produto ${nome} não encontrado no estoque.`;
        }
        if (this.produtos[nome] < quantidade) {
          throw `Estoque insuficiente de ${nome} para realizar a subtração.`;
        }
        this.produtos[nome] -= quantidade;
        console.log(`Subtraído ${quantidade} unidades de ${nome}. Novo estoque: ${this.produtos[nome]}`);
      } catch (error) {
        console.error(`Erro ao subtrair produto: ${error}`);
      }
    }
  
    // Método para mostrar o estoque de um produto
    mostrarEstoque(nome) {
      if (this.produtos[nome] !== undefined) {
        console.log(`Estoque de ${nome}: ${this.produtos[nome]} unidades.`);
      } else {
        console.log(`Produto ${nome} não encontrado no estoque.`);
      }
    }
  }
  
  // Criando um estoque
  let estoque = new Estoque();
  
  // Adicionando e subtraindo produtos
  estoque.adicionarProduto("Camiseta", 100);  // Adiciona 100 unidades
  estoque.adicionarProduto("Camiseta", 50);   // Adiciona mais 50 unidades
  estoque.subtrairProduto("Camiseta", 30);    // Subtrai 30 unidades
  estoque.subtrairProduto("Camiseta", 200);   // Tenta subtrair mais do que o estoque disponível
  
  // Testando com erro: subtrair quantidade negativa
  estoque.subtrairProduto("Camiseta", -5);    // Erro: A quantidade a ser subtraída não pode ser negativa
  
  // Testando com erro: produto inexistente
  estoque.subtrairProduto("Calça", 10);       // Erro: Produto Calça não encontrado no estoque
  
  // Mostrando o estoque final
  estoque.mostrarEstoque("Camiseta");         // Estoque de Camiseta: 120 unidades
  estoque.mostrarEstoque("Calça");            // Produto Calça não encontrado no estoque
  