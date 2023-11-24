import Processo from "../abstracoes/processo";
import MenuTipoAcomodacao from "../menus/menuTipoAcomodacao";

import updateDependente from "./ClienteDependente/updateClienteDependente";
import ListagemTitularesPorDocumento from "./ClienteTitular/listagemTitularesPorDocumento";
import updateTitular from "./ClienteTitular/updateClienteTitular";
import EstrategiaCasalSimples from "./Hospedar/estrategiaCasalSimples";

export default class TipoCadastroAcomodacao extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoAcomodacao()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                const numeroDocumento = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar = new ListagemTitularesPorDocumento(numeroDocumento)
                listar.processar()
                const estrategia = new EstrategiaCasalSimples()
                const hospede = listar.obterResultado()
                if(hospede)
                estrategia.hospedar(hospede);
                else
                console.log("Hospede Não encontrado!")
                break;
            case 2:
                const numeroDocumento2 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar2 = new ListagemTitularesPorDocumento(numeroDocumento2)
                listar2.processar()
                break;
            case 3:
                const numeroDocumento3 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar3 = new ListagemTitularesPorDocumento(numeroDocumento3)
                listar3.processar()
                break;
            case 4:
                const numeroDocumento4 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar4 = new ListagemTitularesPorDocumento(numeroDocumento4)
                listar4.processar()
                break;
            case 5:
                const numeroDocumento5 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar5 = new ListagemTitularesPorDocumento(numeroDocumento5)
                listar5.processar()
                break;
            case 6:
                const numeroDocumento6 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar6 = new ListagemTitularesPorDocumento(numeroDocumento6)
                listar6.processar()
                break;
            
            default:
                console.log('Opção não entendida... :(')
        }
    }
}