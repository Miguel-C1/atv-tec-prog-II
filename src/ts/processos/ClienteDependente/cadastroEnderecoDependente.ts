import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class cadastroEnderecoDependente extends Processo {
    private titular: Cliente
    private dependente: Cliente

    constructor(titular: Cliente, dependente: Cliente) {
        super()
        this.titular = titular
        this.dependente = dependente
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        let rua = this.titular.Endereco.Rua
        let bairro = this.titular.Endereco.Bairro
        let cidade = this.titular.Endereco.Cidade
        let estado = this.titular.Endereco.Estado
        let pais = this.titular.Endereco.Pais
        let codigoPostal = this.titular.Endereco.CodigoPostal
        let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
        this.dependente.setEndereco = endereco
    }

}