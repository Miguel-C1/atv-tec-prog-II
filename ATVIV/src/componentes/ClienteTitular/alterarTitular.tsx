import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class AlterarTitular extends Component<props> {

    render() {
        let tema = this.props.tema
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
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="País" aria-label="País" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CEP" aria-label="CEP" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <select className="form-select" aria-label="Selecionar Tipo de Documento">
                            <option value="cpf">CPF</option>
                            <option value="rg">RG</option>
                            <option value="passaporte">Passaporte</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Número do Documento" aria-label="Número do Documento" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Alterar</button>
                    </div>
                    <div className="mt-4">
                        <h4>Dependentes</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Nome Social</th>
                                    <th>Data de Nascimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].map((index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nome"
                                                aria-label={`Nome do Dependente ${index}`}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nome Social"
                                                aria-label={`Nome Social do Dependente ${index}`}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Data de Nascimento"
                                                aria-label={`Data de Nascimento do Dependente ${index}`}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: tema, color: "#000000" }}>
                            Alterar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

