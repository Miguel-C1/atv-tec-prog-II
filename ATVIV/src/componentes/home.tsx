/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class Home extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Clientes Titulares'}>
                        <button type="button" className="btn btn-outline-primary"  style={{ backgroundColor: tema, color: "#000000" }} onClick={(e) => this.props.seletorView('Cliente', e)}>{'Clientes Titulares'}</button>
                    </li>
                    <li key={'Clientes Dependentes'}>
                        <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: tema, color: "#000000" }} onClick={(e) => this.props.seletorView('interfaceDependente', e)}>{'Clientes Dependentes'}</button>
                    </li>
                    
                </ul>
            </div>
        )
    }
}