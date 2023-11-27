import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class updateDependente extends Processo {
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

        const clienteEncontrado = this.clientes.find(cliente => this.dependenteComDocumento(cliente, this.numeroDocumento));

        if (clienteEncontrado) {
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente?');
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?');
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
            let alteracaoTitular = this.entrada.receberTexto('Deseja alterar o Titular do Dependente? (S/N)');

            if (alteracaoTitular === 'S') {
                let novoTitular = this.entrada.receberTexto('Qual é o número do documento do Titular?');
                const clienteTitular = this.clientes.find(cliente => this.dependenteComDocumento(cliente, novoTitular));

                if (clienteTitular) {
                    clienteEncontrado.setTitular(clienteTitular);
                } else {
                    console.log('Titular não encontrado')
                }
            }

            clienteEncontrado.setNome = nome;
            clienteEncontrado.setNomeSocial = nomeSocial;
            clienteEncontrado.setDataNascimento = dataNascimento;
        } else {
            console.log("Nenhum cliente encontrado com o documento especificado.");
        }
    }

    private dependenteComDocumento(cliente: Cliente, numeroDocumento: string): boolean {
        if (cliente.Titular) {
            return cliente.Documentos.some(doc => doc.Numero === numeroDocumento);
        } else {
            return false;
        }
    }

    obterResultado(): Cliente | undefined {
        return this.resultado;
    }
}

