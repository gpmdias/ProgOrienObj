export class Cliente{
     nome: string = "";
     telefone: string = "";


     // Método especial que executa apenas uma vez, que é ao criar o objeto 
     
     constructor(nomeCliente: string) {
          this.nome = nomeCliente;
          this.telefone = "";
     }
    
     criarCliente(nome: string, telefone: string): Cliente {
          const cliente: Cliente = new Cliente(nome);
          cliente.telefone = telefone;
          return cliente;
      }
}   