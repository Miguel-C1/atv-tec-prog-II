import React, { Component } from "react";

type Props = {
    tema: string;
    acomodacoes: Acomodacao[];
    seletorView: Function;
};

type Acomodacao = {
    tipo: string;
    pessoas: string[];
    dependentes: string[];
};

export default class ListaAcomodacoes extends Component<Props> {
    render() {
        const { tema, acomodacoes } = this.props;

        // Exemplo de acomodações fictícias
        const acomodacoesExemplo: Acomodacao[] = [
            {
                tipo: "Casal Simples",
                pessoas: ["João", "Maria"],
                dependentes: ["Filho 1", "Filho 2"],
            },
            {
                tipo: "Família Mais",
                pessoas: ["Pai", "Mãe", "Filho 1", "Filho 2"],
                dependentes: ["Neto 1", "Neto 2"],
            },
            {
                tipo: "Solteiro Simples",
                pessoas: ["Solteiro 1"],
                dependentes: [],
            },
        ];

        // Usar acomodações reais ou de exemplo dependendo do caso
        const acomodacoesVisualizacao = acomodacoes.length > 0 ? acomodacoes : acomodacoesExemplo;

        return (
            <div className="container-fluid">
                <div className="list-group">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Pessoas Acomodadas</th>
                                <th scope="col">Dependentes</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {acomodacoesVisualizacao.map((acomodacao, index) => (
                                <tr key={index}>
                                    <td>{acomodacao.tipo}</td>
                                    <td>{acomodacao.pessoas.join(", ")}</td>
                                    <td>{acomodacao.dependentes.join(", ")}</td>
                                    <td><input type="checkbox" name="" id="" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button type="button"  style={{ backgroundColor: tema, color: "#000000" }} className="btn btn-outline-primary">{'Deletar'}</button>
                </div>
            </div>
        );
    }
}
