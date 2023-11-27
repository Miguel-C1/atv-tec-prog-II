import Processo from "../../abstracoes/processo";
import MenuTipoDocumento from "../../menus/menuTipoDocumento";
import Cliente from "../../modelos/cliente";
import CadastroCPF from "../ClienteTitular/cadastroCPF";
import CadastroPassaPorte from "../ClienteTitular/cadastroPassaPorte";
import CadastroRg from "../ClienteTitular/cadastroRg";

export default class CadastrarDocumentosDependente extends Processo {
    private titular: Cliente
    private dependente: Cliente

    constructor(titular: Cliente, dependente: Cliente) {
        super()
        this.titular = titular
        this.dependente = dependente
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        this.titular.Documentos.forEach(documento => {
            this.dependente.setDocumentos(documento)
        });  
    }
}