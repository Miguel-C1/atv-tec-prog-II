import EstrategiaHospedagem from "../../interfaces/hospede";
import Cliente from "../../modelos/cliente";
import CadastroAcomodacoes from "../Acomodacoes/cadastroAcomodacoes";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import menuTipoClienteHospedarCasal from "../../menus/menuTipoClienteHospedarCasal";
import Entrada from "../../io/entrada";
import ClientesAcomodarDependente from "./clientesAcomodarDependente";
import ClientesAcomodarTitular from "./clientesAcomodarTitular";

export default class EstrategiaCasalSimples implements EstrategiaHospedagem {

    private menu: menuTipoClienteHospedarCasal
    protected entrada = new Entrada()


    constructor() {
        this.menu = new menuTipoClienteHospedarCasal()
    }

    async hospedar(cliente: Cliente): Promise<void> {
        let construtor = new DiretorCasalSimples();
        let acomodacao = construtor.construir();
        let qtdHospedes = (2 * acomodacao.getCamaCasal()) + acomodacao.getCamaSolteiro();
        let loop = true
        while (loop) {
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (opcao) {
                case 2:
                    let clientesDependente = new ClientesAcomodarDependente(cliente);
                    acomodacao.setHospedes(acomodacao.Hospede.concat(cliente.Dependentes));

                    break;
                case 1:
                    let clientesTitulares = new ClientesAcomodarTitular(cliente, qtdHospedes);
                    acomodacao.setHospedes(clientesTitulares.processar());
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
