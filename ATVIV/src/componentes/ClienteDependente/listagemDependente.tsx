import React, { Component } from "react";

type Props = {
    tema: string;
    seletorView: Function;
};

type ClienteTitular = {
    id: number;
    nome: string;
    cpf: string;
};

export default class ListagemDependente extends Component<Props> {
    render() {
        const { tema, seletorView } = this.props;

        const clientesTitulares: ClienteTitular[] = [
            { id: 1, nome: "Dependente 1", cpf: "Titular 1" },
            { id: 2, nome: "Dependente 2", cpf: "Titular 2" },
            { id: 3, nome: "Dependente 3", cpf: "Titular 1" },
        ];

        return (
            <div className="container-fluid">
                <div className="list-group">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Titular</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientesTitulares.map((cliente) => (
                                <tr key={cliente.id}>
                                    <th scope="row">
                                        <button
                                            type="button"
                                            style={{ backgroundColor: tema, color: "#000000" }}
                                            className="btn btn-outline-primary"
                                            onClick={(e) => seletorView('alterarDependente', e)}
                                        >
                                            Alterar
                                        </button>
                                    </th>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button type="button" className="btn btn-outline-primary"  style={{ backgroundColor: tema, color: "#000000" }}>
                        {'Deletar'}
                    </button>
                </div>
            </div>
        );
    }
}
