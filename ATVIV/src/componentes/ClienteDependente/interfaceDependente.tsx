/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

type Props = {
    tema: string;
    seletorView: Function;
};

export default class InterfaceDependente extends Component<Props> {
    render() {
        const { tema, seletorView } = this.props;

        return (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Dependentes'}>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(e) => seletorView('listagemDependente', e)}
                            style={{ backgroundColor: tema, color: "#000000" }}
                        >
                            {'Listar Dependentes'}
                        </button>
                    </li>
                    <br />
                    <li key={'Cadastrar Dependente'} >
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(e) => seletorView('cadastroDependente', e)}
                            style={{ backgroundColor: tema, color: "#000000" }}
                        >
                            {'Cadastrar Dependente'}
                        </button>
                    </li>
                    <br />
                </ul>
            </div>
        );
    }
}
