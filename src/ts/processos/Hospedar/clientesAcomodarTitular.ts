import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ClientesAcomodarTitular extends Processo {
    private cliente: Cliente;
    private impressor!: Impressor;
    private numeroDocumento: string;
    private resultado: Cliente | undefined = undefined;

    constructor(numeroDocumento: string, cliente: Cliente) {
        super();
        this.numeroDocumento = numeroDocumento;
        this.cliente = cliente
    }

    processar(): void {
        console.clear();
        console.log(`Iniciando a listagem dos clientes Dependentes do Titular com o documento ${this.numeroDocumento}...`);
        let dependentesAcomodados: Cliente;
       

        console.log("Nenhum cliente encontrado com o documento especificado.");
    }

    private titularComDocumento(cliente: Cliente, numeroDocumento: string): boolean {
        if (cliente.Titular == undefined) {
            return cliente.Documentos.some(doc => doc.Numero === numeroDocumento);
        } else {
            return false
        }
    }

    obterResultado(): Cliente | undefined {
        return this.resultado;
    }
}
