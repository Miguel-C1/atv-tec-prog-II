import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import ListagemTitularesPorDocumento from "../ClienteTitular/listagemTitularesPorDocumento";

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
        let titularesAcomodados: Cliente[] = [];
        let loop = true;
        while (loop) {

            const numeroDocumento = this.entrada.receberTexto("Digite o número do Documento do Titular que você deseja Hospedar (Digite 0 para Sair): ");
            if (numeroDocumento == "0") {
                loop = false
            } else {
                const listagem = new ListagemTitularesPorDocumento(numeroDocumento);
                listagem.processar();
                const hospedar = listagem.obterResultado();
                if (hospedar)
                    titularesAcomodados.push(hospedar);
                else
                    console.log('Hospede Não encontrado');
            }

        }

        return titularesAcomodados
    }

}
