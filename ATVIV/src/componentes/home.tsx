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
                    <li key={'Clientes'}>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => this.props.seletorView('Clientes', e)}>{'Clientes'}</button>
                    </li>
                    
                </ul>
            </div>
        )
    }
}