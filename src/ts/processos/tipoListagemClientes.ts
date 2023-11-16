import Processo from "../abstracoes/processo";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemDependentePorDocumento from "./ClienteDependente/listagemDependentePorDocumento";
import ListagemDependente from "./ClienteDependente/listagemDepenente";
import ListagemTitulares from "./ClienteTitular/listagemTitulares";
import ListagemTitularesPorDocumento from "./ClienteDependente/listagemDependentePorTitular";
import ListagemDependentePorTitular from "./ClienteDependente/listagemDependentePorTitular";
import ListagemTitularesPorDependente from "./ClienteTitular/listagemTitularesPorDependente";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependente()
                this.processo.processar()
                break;
            case 3:
                const numero = this.entrada.receberTexto("Digite o número do Documento: ")
                this.processo = new ListagemDependentePorTitular(numero)
                this.processo.processar()
                break;
            case 4:
                const numero1 = this.entrada.receberTexto("Digite o número do Documento: ")
                this.processo = new ListagemTitularesPorDependente(numero1)
                this.processo.processar()
                break;
            case 5:
                const numeroDocumento = this.entrada.receberTexto("Digite o número do Documento: ")
                this.processo = new ListagemTitularesPorDocumento(numeroDocumento)
                this.processo.processar()
                break;
            case 6:
                const numeroDocumentoDependente = this.entrada.receberTexto("Digite o número do Documento: ")
                this.processo = new ListagemDependentePorDocumento(numeroDocumentoDependente)
                this.processo.processar()
            
            default:
                console.log('Opção não entendida... :(')
        }
    }
}