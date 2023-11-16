import Cliente from "../modelos/cliente";

export default interface EstrategiaHospedagem {
    hospedar(cliente: Cliente): void;
}