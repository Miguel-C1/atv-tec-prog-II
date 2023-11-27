import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ClientesAcomodarDependente extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente
    }

    processar(): Cliente[] {
        console.clear();
        let dependentesAcomodados: Cliente[] = [];
        dependentesAcomodados.push(this.cliente);
        for (const dependente of this.cliente.Dependentes) {
            let opcao = this.entrada.receberTexto(`Deseja acomodar o Dependente de Nome: ${dependente.Nome} e Documento: ${dependente.Documentos[0]}? S/N: `)
            if (opcao == "S") {
                dependentesAcomodados.push(dependente)
            }
        }
        return dependentesAcomodados
    }

}
