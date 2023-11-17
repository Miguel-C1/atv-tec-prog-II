import Cliente from "../modelos/cliente";
import Acomodacao from "../modelos/acomodacao";

export default interface EstrategiaHospedagem {
    hospedar(cliente: Cliente, acomodacao: Acomodacao): void;
}