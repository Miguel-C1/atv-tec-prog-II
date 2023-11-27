import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import ListagemTitularesPorDocumento from "../ClienteTitular/listagemTitularesPorDocumento";
import CadastroEnderecoDependente from "./cadastroEnderecoDependente";
import CadastrarDocumentosDependente from "./cadastrarDocumentosDependente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let NumeroDocumentotitular = this.entrada.receberTexto('Qual o Número de Documento do Titular?')
        let readTitular = new ListagemTitularesPorDocumento(NumeroDocumentotitular)
        readTitular.processar()
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)
        if (readTitular.obterResultado()) {
            const resultado = readTitular.obterResultado();
           
            if (resultado) {
                dependente.setTitular(resultado);
                this.processo = new CadastroEnderecoDependente(resultado, dependente)
                this.processo.processar()

                this.processo = new CadastrarDocumentosDependente(resultado, dependente)
                this.processo.processar()

                let armazem = Armazem.InstanciaUnica
                armazem.Clientes.push(dependente)

                console.log('Finalizando o cadastro do cliente...')
            } else {
                console.log('Nenhum titular encontrado com o documento especificado.');
            }
        } else {
            console.log('Nenhum titular encontrado com o documento especificado.');
        }
    }
}