import Menu from "../interfaces/menu";

export default class MenuTipoAcomodacao  implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`**************************************************************`);
        console.log(`| Qual o tipo da Acomodação?`);
        console.log(`--------------------------------------------------------------`);
        console.log(`| 1 - Casal Simples`);
        console.log(`| 2 - Familia Mais`);
        console.log(`| 3 - Familia Simples`);
        console.log(`| 4 - Familia Super`);
        console.log(`| 5 - Solteiro Mais`);
        console.log(`| 6 - Solteiro Simples`);
        console.log(`--------------------------------------------------------------`);
    }
}