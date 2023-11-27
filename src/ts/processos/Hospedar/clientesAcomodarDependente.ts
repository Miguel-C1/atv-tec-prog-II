import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class ClientesAcomodarDependente extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    async processar(): Promise<Cliente[]> {
        let dependentesAcomodados: Cliente[] = [];
        dependentesAcomodados.push(this.cliente);

        // Função assíncrona para receber a opção do usuário
        const receberOpcao = async (dependente: Cliente) => {
            return this.entrada.receberTexto(`Deseja acomodar o Dependente de Nome: ${dependente.Nome} e Documento: ${dependente.Documentos[0]}? S/N: `);
        };

        // Iteração síncrona sobre a lista de dependentes usando reduce
        await this.cliente.Dependentes.reduce(async (promise, dependente) => {
            await promise; // Aguarda a resolução da chamada assíncrona anterior

            const opcao = await receberOpcao(dependente);

            if (opcao === "S") {
                dependentesAcomodados.push(dependente);
            }
        }, Promise.resolve());

        return dependentesAcomodados;
    }
}
