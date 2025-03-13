class ContaBancária {
    constructor(nomeTitular, saldoInicial = 0) {
      this.nomeTitular = nomeTitular;
      this.saldo = saldoInicial;
    }
  
    // Método para realizar um depósito
    deposito(valor) {
      try {
        if (valor <= 0) {
          throw "O valor do depósito deve ser positivo.";
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } catch (error) {
        console.error(`Erro ao realizar depósito: ${error}`);
      }
    }
  
    // Método para realizar um saque
    saque(valor) {
      try {
        if (valor <= 0) {
          throw "O valor do saque deve ser positivo.";
        }
        if (valor > this.saldo) {
          throw "Saldo insuficiente para realizar o saque.";
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } catch (error) {
        console.error(`Erro ao realizar saque: ${error}`);
      }
    }
  
    // Método para consultar o saldo
    consultarSaldo() {
      console.log(`Saldo atual de ${this.nomeTitular}: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  // Criando uma conta bancária
  let conta = new []
  