import Processo from "../abstracoes/processo";
import MenuTipoAcomodacao from "../menus/menuTipoAcomodacao";

import updateDependente from "./ClienteDependente/updateClienteDependente";
import ListagemTitularesPorDocumento from "./ClienteTitular/listagemTitularesPorDocumento";
import updateTitular from "./ClienteTitular/updateClienteTitular";
import EstrategiaCasalSimples from "./Hospedar/estrategiaCasalSimples";
import EstrategiaFamiliaSuper from "./Hospedar/estrategiaFamiliaSuper";
import EstrategiaSolteiroMais from "./Hospedar/estrategiaSolteiroMais";
import EstrategiaSolteiroSimples from "./Hospedar/estrategiaSolteiroSimples";

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
                // Familia Mais
                const estrategia2 = new EstrategiaCasalSimples()
                const hospede2 = listar2.obterResultado()
                if(hospede2)
                estrategia2.hospedar(hospede2);
                else
                console.log("Hospede Não encontrado!")
                break;
            case 3:
                const numeroDocumento3 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar3 = new ListagemTitularesPorDocumento(numeroDocumento3)
                listar3.processar()
                // Familia Simples
                const estrategia3 = new EstrategiaCasalSimples()
                const hospede3 = listar3.obterResultado()
                if(hospede3)
                estrategia3.hospedar(hospede3);
                else
                console.log("Hospede Não encontrado!")
                break;
            case 4:
                const numeroDocumento4 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar4 = new ListagemTitularesPorDocumento(numeroDocumento4)
                listar4.processar()
                const estrategia4 = new EstrategiaFamiliaSuper()
                const hospede4 = listar4.obterResultado()
                if(hospede4)
                estrategia4.hospedar(hospede4);
                else
                console.log("Hospede Não encontrado!")
                break;
            case 5:
                const numeroDocumento5 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar5 = new ListagemTitularesPorDocumento(numeroDocumento5)
                listar5.processar()
                const estrategia5 = new EstrategiaSolteiroMais()
                const hospede5 = listar5.obterResultado()
                if(hospede5)
                estrategia5.hospedar(hospede5);
                else
                console.log("Hospede Não encontrado!")
                break;
            case 6:
                const numeroDocumento6 = this.entrada.receberTexto("Digite o número do Documento: ")
                const listar6 = new ListagemTitularesPorDocumento(numeroDocumento6)
                listar6.processar()
                const estrategia6 = new EstrategiaSolteiroSimples()
                const hospede6 = listar6.obterResultado()
                if(hospede6)
                estrategia6.hospedar(hospede6);
                else
                console.log("Hospede Não encontrado!")
                break;
            
            default:
                console.log('Opção não entendida... :(')
        }
    }
}