import Processo from "../abstracoes/processo";
import MenuTipoCliente from "../menus/menuTipoCliente copy";
import updateDependente from "./ClienteDependente/updateClienteDependente";
import updateTitular from "./ClienteTitular/updateClienteTitular";

export default class TipoAlteracaoClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                const numeroDocumentoTitular = this.entrada.receberTexto("Digite o Número de Documento: ")
                this.processo = new updateTitular(numeroDocumentoTitular)
                this.processo.processar()
                break;
            case 2:
                const numeroDocumentoDependente = this.entrada.receberTexto("Digite o Número de Documento: ")
                this.processo = new updateDependente(numeroDocumentoDependente)
                this.processo.processar()
                break;
            
            default:
                console.log('Opção não entendida... :(')
        }
    }
}