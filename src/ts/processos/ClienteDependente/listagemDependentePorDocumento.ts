import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentePorDocumento extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;
    private numeroDocumento: string;
    private resultado: Cliente | undefined = undefined;

    constructor(numeroDocumento: string) {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.numeroDocumento = numeroDocumento;
    }

    processar(): void {
        console.clear();
        console.log(`Iniciando a listagem dos clientes titulares com o documento ${this.numeroDocumento}...`);

        for (const cliente of this.clientes) {
            if (this.DependenteComDocumento(cliente, this.numeroDocumento)) {
                this.impressor = new ImpressaorCliente(cliente);
                console.log(this.impressor.imprimir());

                this.resultado = cliente;
                return;
            }
        }

        console.log("Nenhum cliente encontrado com o documento especificado.");
    }

    private DependenteComDocumento(cliente: Cliente, numeroDocumento: string): boolean {
        if (cliente.Titular) {
            return cliente.Documentos.some(doc => doc.Numero === numeroDocumento);
        } else {
            return false
        }
    }

    obterResultado(): Cliente | undefined {
        return this.resultado;
    }
}
