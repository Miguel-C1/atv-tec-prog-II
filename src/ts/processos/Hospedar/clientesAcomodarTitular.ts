import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class ClientesAcomodarTitular extends Processo {
    private cliente: Cliente;
    private quantidade: number;

    constructor(cliente: Cliente, quantidade: number) {
        super();
        this.cliente = cliente
        this.quantidade = quantidade
    }

    processar(): Cliente[] {
        console.clear();
        let titularesAcomodados: Cliente[]  = [];
        titularesAcomodados.push(this.cliente);
        let loop = true
        while (loop && titularesAcomodados.length + 1 < this.quantidade){
            
        }

        return titularesAcomodados
    }

}
