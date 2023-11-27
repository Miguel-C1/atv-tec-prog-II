import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Acomodacao from "../../modelos/acomodacao";

export default class ClientesExcluirHospedes extends Processo {
    private cliente: Cliente;
    private acomodacoes: Acomodacao[];

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        console.clear();

        for (const acomodacao of this.acomodacoes) {
            const indiceCliente = acomodacao.Hospede.findIndex(hospede => hospede === this.cliente);
            
            if (indiceCliente !== -1) {
 
                console.log(`Cliente ${this.cliente.Nome} encontrado na Acomodação ${acomodacao.NomeAcomadacao}.`);
                
                this.acomodacoes.splice(this.acomodacoes.indexOf(acomodacao), 1);
                
                acomodacao.Hospede.splice(indiceCliente, 1);
                
                console.log(`Cliente ${this.cliente.Nome} removido da Acomodação ${acomodacao.NomeAcomadacao}.`);
                return;  
            }
        }


        console.log(`Cliente ${this.cliente.Nome} não encontrado em nenhuma acomodação.`);
    }
}
