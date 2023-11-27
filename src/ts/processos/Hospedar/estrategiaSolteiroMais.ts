import EstrategiaHospedagem from "../../interfaces/hospede";
import Cliente from "../../modelos/cliente";
import CadastroAcomodacoes from "../Acomodacoes/cadastroAcomodacoes";
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais";

export default class EstrategiaSolteiroMais implements EstrategiaHospedagem {
    
    hospedar(cliente: Cliente): void {
        let construtor = new DiretorSolteiroMais();
        let acomodacao = construtor.construir();
        let clientes:  Cliente[] = [cliente];
        acomodacao.setHospedes(clientes);
        const cadastrar = new CadastroAcomodacoes(acomodacao);
        cadastrar.processar();
    }
}
