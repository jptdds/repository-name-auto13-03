class Carro {
    constructor(modelo, cor, ano) {
      this.modelo = modelo;
      this.cor = cor;
      this.ano = ano;
    }
  
    // Método para mostrar os detalhes do carro
    mostrarDetalhes() {
      console.log(`Detalhes do carro:
        Modelo: ${this.modelo}
        Cor: ${this.cor}
        Ano: ${this.ano}`);
    }
  }
  
  // Criando um objeto da classe Carro
  let meuCarro = new Carro("Fusca", "azul", 1980);
  
  // Exibindo os detalhes do carro
  meuCarro.mostrarDetalhes(); 
  