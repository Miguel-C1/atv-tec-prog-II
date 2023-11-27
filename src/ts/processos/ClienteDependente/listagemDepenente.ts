import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes titulares...')
        this.clientes.forEach(cliente => {
            if (this.dependente(cliente)) {
                this.impressor = new ImpressaorCliente(cliente)
                const imprimir = this.impressor.imprimir()
                console.log(imprimir)
            }
        })
    }
    private dependente(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular) {
            verificacao = true
        }
        return verificacao
    }
}