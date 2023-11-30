import React, { Component } from "react";

type Props = {
    tema: string;
};

export default class CadastroClienteDependente extends Component<Props> {
    render() {
        const { tema } = this.props;

        // Array de titulares fictícios para exemplo
        const titulares = ["Titular 1", "Titular 2", "Titular 3"];

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
                    <select className="form-select" id="titularSelect">
                        <option value="" disabled>Escolha um Titular</option>
                        {titulares.map((titular, index) => (
                            <option key={index} value={titular}>{titular}</option>
                        ))}
                    </select>
                    <br />

                    {/* Botão de Cadastro */}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: tema, color: "#000000" }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        );
    }
}
