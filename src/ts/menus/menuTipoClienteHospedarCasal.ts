import Menu from "../interfaces/menu";

export default class MenuTipoClienteHospedarCasal  implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`**************************************************************`)
        console.log(`| Qual o tipo do cliente que irá ser Hospedado com o Titular? `)
        console.log(`--------------------------------------------------------------`)
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(`| 0 - Sair`)
        console.log(`--------------------------------------------------------------`)
    }
}