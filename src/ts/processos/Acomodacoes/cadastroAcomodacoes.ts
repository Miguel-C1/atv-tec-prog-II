import Processo from "../../abstracoes/processo";

import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    private acomodacao: Acomodacao
    constructor(acomodacao: Acomodacao) {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.acomodacao = acomodacao
    }
    processar(): void {
        this.acomodacoes.push(this.acomodacao);
    }
}