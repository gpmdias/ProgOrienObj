import { Cliente } from "./Cliente";

function criarCliente(nome: string, telefone: string): Cliente {
    const cliente: Cliente = new Cliente(nome);
    cliente.telefone = telefone;
    return cliente;
}

const clientes: Cliente[] = [];
clientes.push(criarCliente("Bruna", "123456789"));
clientes.push(criarCliente("Edécio", "123456789"));
clientes.push(criarCliente("Gladimir", "123456789"));