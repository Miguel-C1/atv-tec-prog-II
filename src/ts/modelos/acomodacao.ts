import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"
import Cliente from "./cliente"

export default class Acomodacao {
    private nomeAcomadacao: NomeAcomadacao
    private camaSolteiro: number
    private camaCasal: number
    private suite: Number
    private climatizacao: Boolean
    private garagem: Number
    private hospedes: Cliente[] = []

    constructor(nomeAcomadacao: NomeAcomadacao, camaSolteiro: number, camaCasal: number,
        suite: Number, climatizacao: Boolean, garagem: Number) {
        this.nomeAcomadacao = nomeAcomadacao
        this.camaSolteiro = camaSolteiro
        this.camaCasal = camaCasal
        this.suite = suite
        this.climatizacao = climatizacao
        this.garagem = garagem
    }

    public get NomeAcomadacao() { return this.nomeAcomadacao; }
    public get CamaSolteiro() { return this.camaSolteiro; }
    public get CamaCasal() { return this.camaCasal; }
    public get Suite() { return this.suite; }
    public get Climatizacao() { return this.climatizacao; }
    public get Garagem() { return this.garagem; }
    public get Hospede() { return this.hospedes; }
    public setHospedes(hospedes: Cliente[]): void {
        this.hospedes = hospedes;
    }
    public getCamaCasal(): number {
        return this.camaCasal;
    }
    public getCamaSolteiro(): number {return this.camaSolteiro}

}