import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1_nome = "Jennifer";
const cliente1_cpf = "11122233344";
const cliente2_nome = "Victor"
const cliente2_cpf =  "22233344455";

const cliente1 = new Cliente(cliente1_nome, cliente1_cpf);
const cliente2 = new Cliente(cliente2_nome, cliente2_cpf);

//console.log(cliente1.cpf);

const contaCorrenteJennifer = new ContaCorrente("1001", cliente1);
contaCorrenteJennifer.depositar(200);

const conta2 = new ContaCorrente("102", cliente2);

// conta2._cliente.nome = "Victor";
// conta2._cliente.cpf = "22233344455";
conta2.agencia = "102";

contaCorrenteJennifer.transferir(50, conta2)
console.log(ContaCorrente.numeroDeContas);
//console.log(contaCorrenteJennifer, conta2);
