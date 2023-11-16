import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todos os titulares`)
        console.log(`| 2 - Todos os Dependente`)
        console.log(`| 3 - Todos os dependentes de um titular específico`)
        console.log(`| 4 - Titular por um Dependente específico`)
        console.log(`| 5 - Titular por Documento`)
        console.log(`| 6 - Dependente por Documento`)


        console.log(`----------------------`)
    }
}