import EstrategiaHospedagem from "../../interfaces/hospede";
import Cliente from "../../modelos/cliente";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";
import CadastroAcomodacoes from "../Acomodacoes/cadastroAcomodacoes";

export default class EstrategiaSolteiroSimples implements EstrategiaHospedagem {
    
    hospedar(cliente: Cliente): void {
        let construtor = new DiretorSolteiroSimples();
        let acomodacao = construtor.construir();
        let clientes:  Cliente[] = [cliente];
        acomodacao.setHospedes(clientes);
        const cadastrar = new CadastroAcomodacoes(acomodacao);
        cadastrar.processar();
    }
}
