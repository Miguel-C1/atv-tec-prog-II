import EstrategiaHospedagem from "../../interfaces/hospede";
import Cliente from "../../modelos/cliente";
import CadastroAcomodacoes from "../Acomodacoes/cadastroAcomodacoes";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import menuTipoClienteHospedarCasal from "../../menus/menuTipoClienteHospedarCasal";
import Entrada from "../../io/entrada";

export default class EstrategiaCasalSimples implements EstrategiaHospedagem {
    
    private menu: menuTipoClienteHospedarCasal 
    protected entrada = new Entrada()


    constructor(){
        this.menu = new menuTipoClienteHospedarCasal()
    }

    hospedar(cliente: Cliente): void {
        this.menu.mostrar()
        let opcao = this.entrada.receberNumero('Qual opção desejada?')
        let construtor = new DiretorCasalSimples();
        let acomodacao = construtor.construir();
        let qtdHospedes = (2 * acomodacao.getCamaCasal()) + acomodacao.getCamaSolteiro();


        switch (opcao) {
            case 1:
                let clientes:  Cliente[] = [cliente];
                acomodacao.setHospedes(clientes);
                const cadastrar = new CadastroAcomodacoes(acomodacao);
                cadastrar.processar();
                break
            case 2:

                break;
            default:
                console.log('Opção não entendida :(')
        }

    }
}
