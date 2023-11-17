import Processo from "../abstracoes/processo";

import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(acomodacao: Acomodacao): void {
        this.acomodacoes.push(acomodacao);
    }
}