import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo {
    public clonar(): Prototipo {
        let telefone = new Telefone()
        telefone.ddd = this.ddd
        telefone.numero = this.ddd
        return telefone
    }
    public ddd: string
    public numero: string
    
}