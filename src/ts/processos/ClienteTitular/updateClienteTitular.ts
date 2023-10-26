import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class updateTitular extends Processo {
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
        console.log(`Iniciando a alterção do cliente titulares com o documento ${this.numeroDocumento}...`);

        const clienteTitular = this.clientes.find(cliente => this.dependenteComDocumento(cliente, this.numeroDocumento));

        if (clienteTitular) {
            let nome = this.entrada.receberTexto('Qual o nome novo do cliente?');
            let nomeSocial = this.entrada.receberTexto('Qual o nome social novo do cliente?');
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
            let alteracaoDependente = this.entrada.receberTexto('Deseja alterar os dependentes do Titular? (S/N)');

            if (alteracaoDependente === 'S') {
                let loop = true
                while (loop) {
                    console.log('OPÇÃO 1 - DELETAR ATRIBUIÇÃO DE DEPENDENTE DO TITULAR')
                    console.log('OPÇÃO 2 - ADICIONAR ATRIBUIÇÃO DE DEPENDENTE DO TITULAR')
                    console.log('OPÇÃO 0 - PARAR ALTERAÇÃO DE ATRIBUIÇÃO DE DEPENDENTE DO TITULAR')
                    let opcao = this.entrada.receberNumero('Qual opção você deseja fazer para os Dependentes?');
                    switch (opcao) {
                        case 1:
                            let documentoDependente2 = this.entrada.receberTexto('Qual é o número do documento do Dependente?');
                            const indexDependente2 = clienteTitular.Dependentes.findIndex(cliente => this.dependenteComDocumento(cliente, documentoDependente2));
                            if (indexDependente2 !== -1) {
                                clienteTitular.Dependentes.splice(indexDependente2, 1);
                                console.log('Cliente dependente removido com sucesso');
                            } else {
                                console.log('Cliente dependente não encontrado');
                            }
                            break;
                        case 2:
                            let documentoDependente = this.entrada.receberTexto('Qual é o número do documento do Dependente?');
                            const clienteDependente = this.clientes.find(cliente => this.dependenteComDocumento(cliente, documentoDependente));
                            if (clienteDependente) {
                                clienteTitular.Dependentes.push(clienteDependente);
                            } else {
                                console.log('Dependente não encontrado');
                            }
                            break;
                        case 0:
                            loop = false;
                            break;
                        default:
                            console.log("Opção padrão ou não reconhecida");
                    }


                }



            }

            clienteTitular.setNome = nome;
            clienteTitular.setNomeSocial = nomeSocial;
            clienteTitular.setDataNascimento = dataNascimento;
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

