import React, { Component } from "react";

type Props = {
    tema: string;
};

type Acomodacao = {
    tipo: string;
    pessoas: string[];
    dependentes: string[];
};

export default class CadastroAcomodacao extends Component<Props> {
    state: Acomodacao = {
        tipo: "",
        pessoas: [],
        dependentes: [],
    };

    tiposAcomodacao = [
        "Casal Simples",
        "Família Simples",
        "Família Mais",
        "Família Super",
        "Solteiro Simples",
        "Solteiro Mais",
    ];

    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ tipo: event.target.value });
    };

    handleAddPerson = () => {
        const { pessoas } = this.state;
        const novaPessoa = prompt("Digite o nome da pessoa:");
        if (novaPessoa) {
            this.setState({ pessoas: [...pessoas, novaPessoa] });
        }
    };

    handleAddDependente = () => {
        const { dependentes } = this.state;
        const novoDependente = prompt("Digite o nome do dependente:");
        if (novoDependente) {
            this.setState({ dependentes: [...dependentes, novoDependente] });
        }
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode fazer algo com os dados da acomodação, como enviá-los para o backend
        console.log("Dados da Acomodação:", this.state);
    };

    render() {
        const { tema } = this.props;
        const { tipo, pessoas, dependentes } = this.state;

        return (
            <div className="container-fluid">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <label htmlFor="tipoSelect" className="form-label">Selecione o Tipo de Acomodação:</label>
                        <select
                            className="form-select"
                            id="tipoSelect"
                            value={tipo}
                            onChange={this.handleChange}
                        >
                            <option value="" disabled>Escolha o Tipo de Acomodação</option>
                            {this.tiposAcomodacao.map((tipo, index) => (
                                <option key={index} value={tipo}>{tipo}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="pessoasInput" className="form-label">Pessoas Acomodadas:</label>
                        <ul>
                            {pessoas.map((pessoa, index) => (
                                <li key={index}>{pessoa}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={this.handleAddPerson}
                        >
                            Adicionar Pessoa
                        </button>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dependentesInput" className="form-label">Dependentes:</label>
                        <ul>
                            {dependentes.map((dependente, index) => (
                                <li key={index}>{dependente}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={this.handleAddDependente}
                        >
                            Adicionar Dependente
                        </button>
                    </div>

                    {/* Botão de Cadastro */}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit" style={{ backgroundColor: tema, color: "#000000" }}>Cadastrar Acomodação</button>
                    </div>
                </form>
            </div>
        );
    }
}
