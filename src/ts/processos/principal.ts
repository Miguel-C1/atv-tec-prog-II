import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import ListagemTitularesPorDocumento from "./ClienteTitular/listagemTitularesPorDocumento"
import ClientesExcluirHospedes from "./Hospedar/clientesExcluirHospede"
import ClientesListarHospedes from "./Hospedar/clientesListarHospede"
import TipoAlteracaoClientes from "./tipoAlteracaoClientes"
import TipoCadastroAcomodacao from "./tipoCadastroAcomodacao"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoExcluirClientes from "./tipoExcluirClientes"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break;
            case 2:
                this.processo = new TipoAlteracaoClientes()
                this.processo.processar()
                break;
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break;
            case 4:
                this.processo = new TipoExcluirClientes()
                this.processo.processar()
                break;
            case 5:
                this.processo = new TipoCadastroAcomodacao()
                this.processo.processar()
                break;
            case 6:
                const numeroDocuemntos = this.entrada.receberTexto("Qual é o Número do Documento do Titular Hospedado?"); 
                const listagem = new ListagemTitularesPorDocumento(numeroDocuemntos)
                listagem.processar()
                const hospede = listagem.obterResultado()
                if(hospede) {
                    this.processo = new ClientesListarHospedes(hospede)
                    this.processo.processar()
                } else {
                    console.log('Hospede Não encontrado');
                }
               
                break;
            case 7:
                const numeroDocuemntoExclusao = this.entrada.receberTexto("Qual é o Número do Documento do Titular Hospedado?"); 
                const listagemExclusao = new ListagemTitularesPorDocumento(numeroDocuemntoExclusao)
                listagemExclusao.processar()
                const hospedeExclusao = listagemExclusao.obterResultado()
                if(hospedeExclusao) {
                    this.processo = new ClientesExcluirHospedes(hospedeExclusao)
                    this.processo.processar()
                } else {
                    console.log('Hospede Não encontrado');
                }
                break;
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}