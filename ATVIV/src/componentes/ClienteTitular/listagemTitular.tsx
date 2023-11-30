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

export default class ListagemTitular extends Component<Props> {
    render() {
        const { tema, seletorView } = this.props;

        const clientesTitulares: ClienteTitular[] = [
            { id: 1, nome: "Cliente 1", cpf: "063.442.980-90" },
            { id: 2, nome: "Cliente 2", cpf: "168.204.420-33" },
            { id: 3, nome: "Cliente 3", cpf: "079.062.520-20" },
        ];

        return (
            <div className="container-fluid">
                <div className="list-group">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Documento</th>
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
                                            onClick={(e) => seletorView('alterarTitular', e)}
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
