import { Cliente } from "./Cliente";

const cli: Cliente = new Cliente("Gladimir");
cli.telefone = "1234-5678";
console.table(cli);