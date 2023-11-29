import { Component } from "react";
import Home from "./home"
import BarraNavegacao from "./barraNavegacao";


type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#E6E6FA" botoes={['Clientes', 'Hospedar']} />
        
        switch (this.state.tela) {
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <Home tema="#E6E6FA" seletorView={this.selecionarView} />
                    </>
                )
                break;
        }
    }
}