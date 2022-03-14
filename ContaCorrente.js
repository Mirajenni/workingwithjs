import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //o atributo static faz a variável pertencer à classe como uma toda e não à instância.
    static numeroDeContas = 0; 
    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    //O método instanceof ele pergunta se ele é do TIPO daquela Classe
    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) return this._cliente = novoCliente;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if(valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor) {
        if(this._saldo > valor) {
            this._saldo -= valor;
            return valor
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}