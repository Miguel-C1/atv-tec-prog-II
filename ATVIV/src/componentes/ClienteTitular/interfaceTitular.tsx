/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

type Props = {
    tema: string;
    seletorView: Function;
};

export default class InterfaceTitular extends Component<Props> {
    render() {
        const { tema, seletorView } = this.props;

        return (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Titulares'}>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(e) => seletorView('listagemTitular', e)}
                            style={{ backgroundColor: tema, color: "#000000" }}
                        >
                            {'Listar Titulares'}
                        </button>
                    </li>
                    <br />
                    <li key={'Cadastrar Titular'} >
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(e) => seletorView('cadastroTitular', e)}
                            style={{ backgroundColor: tema, color: "#000000" }}
                        >
                            {'Cadastrar Titular'}
                        </button>
                    </li>
                    <br />
                </ul>
            </div>
        );
    }
}
