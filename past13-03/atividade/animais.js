class Animal {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  
    // Método para retornar o som característico do animal
    fazerSom() {
      switch (this.especie.toLowerCase()) {
        case "vaca":
          return "Muu!";
        case "cachorro":
          return "Au au!";
        case "gato":
          return "Miau!";
        case "elefante":
          return "Paaaah!";
        default:
          return "Som não identificado";
      }
    }
  
    // Método para exibir as informações do animal
    mostrarDetalhes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Espécie: ${this.especie}`);
      console.log(`Idade: ${this.idade} anos`);
      console.log(`Som: ${this.fazerSom()}`);
    }
  }
  
  // Criando alguns animais
  let vaca = new Animal("Mimosa", "vaca", 5);
  let cachorro = new Animal("Rex", "cachorro", 3);
  let gato = new Animal("Felix", "gato", 2);
  let elefante = new Animal("Dumbo", "elefante", 10);
  let animalDesconhecido
  