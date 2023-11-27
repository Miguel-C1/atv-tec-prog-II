import Processo from "../abstracoes/processo";
import MenuTipoCliente from "../menus/menuTipoCliente";
import deleteDependente from "./ClienteDependente/deleteClienteDependente";
import updateDependente from "./ClienteDependente/updateClienteDependente";
import deleteTitulares from "./ClienteTitular/deleteClienteTitular";
import updateTitular from "./ClienteTitular/updateClienteTitular";

export default class TipoExcluirClientes extends Processo {
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
                this.processo = new deleteTitulares(numeroDocumentoTitular)
                this.processo.processar()
                break;
            case 2:
                const numeroDocumentoDependente = this.entrada.receberTexto("Digite o Número de Documento: ")
                this.processo = new deleteDependente(numeroDocumentoDependente)
                this.processo.processar()
                break;
            
            default:
                console.log('Opção não entendida... :(')
        }
    }
}