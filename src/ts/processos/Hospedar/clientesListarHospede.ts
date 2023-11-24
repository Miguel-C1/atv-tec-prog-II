import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";
import ImpressorAcomodacao from "../../impressores/impressorAcomodacao";

export default class ClientesListarHospedes extends Processo {
    private cliente: Cliente;
    private acomodacoes: Acomodacao[];

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        console.clear();
        this.acomodacoes.forEach(acomodacao => {
            const clienteHospedado = acomodacao.Hospede.find(hospede => hospede === this.cliente);

            if (clienteHospedado) {
                const impressor = new ImpressorAcomodacao(acomodacao);
                const descricao = impressor.imprimir();

                console.log(descricao);
                console.log("====================================");
            }
        });

        if (!this.acomodacoes.some(acomodacao => acomodacao.Hospede.includes(this.cliente))) {
            console.log(`O cliente ${this.cliente.Nome} não está hospedado em nenhuma acomodação.`);
        }
    }
}
