import EstrategiaHospedagem from "../../interfaces/hospede";
import Cliente from "../../modelos/cliente";
import CadastroAcomodacoes from "../Acomodacoes/cadastroAcomodacoes";
import menuTipoClienteHospedarCasal from "../../menus/menuTipoClienteHospedarCasal";
import Entrada from "../../io/entrada";
import ClientesAcomodarDependente from "./clientesAcomodarDependente";
import ClientesAcomodarTitular from "./clientesAcomodarTitular";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";

export default class EstrategiaFamiliaSuper implements EstrategiaHospedagem {

    private menu: menuTipoClienteHospedarCasal
    protected entrada = new Entrada()


    constructor() {
        this.menu = new menuTipoClienteHospedarCasal()
    }

    hospedar(cliente: Cliente): void {
        let construtor = new DiretorFamiliaSuper();
        let acomodacao = construtor.construir();
        let qtdHospedes = (2 * acomodacao.getCamaCasal()) + acomodacao.getCamaSolteiro();
        let loop = true
        while (loop) {
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (opcao) {
                case 1:
                    let clientesDependente = new ClientesAcomodarDependente(cliente, qtdHospedes);
                    acomodacao.setHospedes(acomodacao.Hospede.concat(clientesDependente.processar()));
                    qtdHospedes = qtdHospedes - (acomodacao.Hospede.length + 1);

                    break;
                case 2:
                    let clientesTitulares = new ClientesAcomodarTitular(cliente, qtdHospedes);
                    acomodacao.setHospedes(acomodacao.Hospede.concat(clientesTitulares.processar()));
                    qtdHospedes = qtdHospedes - (acomodacao.Hospede.length + 1);
                    break;
                case 0:
                    loop = false;
                    break;
                default:
                    console.log('Opção não entendida :(')
            }
        }
        const cadastrar = new CadastroAcomodacoes(acomodacao);
        cadastrar.processar();


    }
}
