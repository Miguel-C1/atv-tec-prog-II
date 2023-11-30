import React, { Component } from "react";

type Props = {
    tema: string;
};

export default class AlterarClienteDependente extends Component<Props> {
    render() {
        const { tema } = this.props;

        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Data de Nascimento" aria-label="Data de Nascimento" aria-describedby="basic-addon1" />
                    </div>
                    {/* Botão de Cadastro */}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: tema, color: "#000000" }}>Alterar</button>
                    </div>
                </form>
            </div>
        );
    }
}
