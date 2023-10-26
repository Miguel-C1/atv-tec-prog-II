import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class deleteTitulares extends Processo {
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
            if (this.titularComDocumento(cliente, this.numeroDocumento)) {
                const index = this.clientes.indexOf(cliente);
                if (index !== -1) {
                    this.clientes.splice(index, 1);
                }
            }
        }

        console.log("Nenhum cliente encontrado com o documento especificado.");
    }

    private titularComDocumento(cliente: Cliente, numeroDocumento: string): boolean {
        if (cliente.Titular == undefined) {
            return cliente.Documentos.some(doc => doc.Numero === numeroDocumento);
        } else {
            return false;
        }
    }

    obterResultado(): Cliente | undefined {
        return this.resultado;
    }
}
