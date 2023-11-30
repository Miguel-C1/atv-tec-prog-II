/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

type Props = {
    tema: string;
    seletorView: Function;
};

export default class InterfaceAcomodacao extends Component<Props> {
    render() {
        const { tema, seletorView } = this.props;

        return (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Cadastrar Acomodacao'}>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(e) => seletorView('cadastrarAcomodacao', e)}
                            style={{ backgroundColor: tema, color: "#000000" }}
                        >
                            {'Cadastrar Acomodacao'}
                        </button>
                    </li>
                    <br />
                    <li key={'Listar Acomodacao'} >
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(e) => seletorView('listarAcomodacao', e)}
                            style={{ backgroundColor: tema, color: "#000000" }}
                        >
                            {'Listar Acomodacao'}
                        </button>
                    </li>
                    <br />
                </ul>
            </div>
        );
    }
}
