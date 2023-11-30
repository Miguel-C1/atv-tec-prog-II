import { Component } from "react";
import Home from "./home"
import BarraNavegacao from "./barraNavegacao";
import InterfaceTitular from "./ClienteTitular/interfaceTitular";
import CadastroClienteTitular from "./ClienteTitular/cadastroClienteTitular";
import ListagemTitular from "./ClienteDependente/listagemDependente";
import AlterarTitular from "./ClienteTitular/alterarTitular";
import InterfaceDependente from "./ClienteDependente/interfaceDependente";
import CadastroClienteDependente from "./ClienteDependente/cadastroDependente";
import AlterarClienteDependente from "./ClienteDependente/alterarDependente";
import ListagemDependente from "./ClienteDependente/listagemDependente";
import InterfaceAcomodacao from "./Acomodacao/interfaceAcomodacao";
import ListaAcomodacoes from "./Acomodacao/listarAcomodacao";
import CadastroAcomodacao from "./Acomodacao/cadastrarAcomodacao";


type state = {
    tela: string
}

type Acomodacao = {
    tipo: string;
    pessoas: string[];
    dependentes: string[];
};

const acomodacoesExemplo: Acomodacao[] = [
    {
        tipo: "Casal Simples",
        pessoas: ["João", "Maria"],
        dependentes: ["Filho 1", "Filho 2"],
    },
    {
        tipo: "Família Mais",
        pessoas: ["Pai", "Mãe", "Filho 1", "Filho 2"],
        dependentes: ["Neto 1", "Neto 2"],
    },
    {
        tipo: "Solteiro Simples",
        pessoas: ["Solteiro 1"],
        dependentes: [],
    },
];

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#E6E6FA" botoes={['Home', 'Acomodação']} />
        
        switch (this.state.tela) {
            case 'Home':
                return (
                    <>
                        {barraNavegacao}
                        <Home tema="#E6E6FA" seletorView={this.selecionarView} />
                    </>
                )
            case 'Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <InterfaceTitular tema="#E6E6FA" seletorView={this.selecionarView} />
                    </>
                )
            case 'cadastroTitular':
                return (
                    <>
                        {barraNavegacao}
                        <CadastroClienteTitular tema="#E6E6FA" seletorView={this.selecionarView} />
                    </>
                )
            case 'listagemTitular':
                return (
                    <>
                        {barraNavegacao}
                        <ListagemTitular tema="#E6E6FA" seletorView={this.selecionarView} />
                    </>
                )
            case 'alterarTitular':
                return (
                    <>
                        {barraNavegacao}
                        <AlterarTitular tema="#E6E6FA" seletorView={this.selecionarView} />
                    </>
                )
            case 'interfaceDependente':
                return (
                    <>
                        {barraNavegacao}
                        <InterfaceDependente tema="#E6E6FA" seletorView={this.selecionarView} />
                    </>
                )
            case 'cadastroDependente':
                return (
                    <>
                        {barraNavegacao}
                        <CadastroClienteDependente tema="#E6E6FA" />
                    </>
                )
            case 'alterarDependente':
                return (
                    <>
                        {barraNavegacao}
                        <AlterarClienteDependente tema="#E6E6FA" />
                    </>
                )
            case 'listagemDependente':
                return (
                    <>
                        {barraNavegacao}
                        <ListagemDependente tema="#E6E6FA" seletorView={this.selecionarView}/>
                    </>
                )
            case 'Acomodação':
                return (
                    <>
                        {barraNavegacao}
                        <InterfaceAcomodacao tema="#E6E6FA" seletorView={this.selecionarView}/>
                    </>
                )
            case 'listarAcomodacao':
                return (
                    <>
                        {barraNavegacao}
                        <ListaAcomodacoes tema="#E6E6FA" acomodacoes={acomodacoesExemplo} seletorView={this.selecionarView}/>
                    </>
                )
            case 'cadastrarAcomodacao':
                return (
                    <>
                        {barraNavegacao}
                        <CadastroAcomodacao tema="#E6E6FA" />
                    </>
                )
        }
    }
}