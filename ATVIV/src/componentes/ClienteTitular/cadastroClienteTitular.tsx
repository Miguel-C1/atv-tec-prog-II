import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class CadastroClienteTitular extends Component<props> {

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

                    {/* Endereço */}
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

                    {/* Tipo de Documento */}
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

                    {/* Botão de Cadastro */}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: tema, color: "#000000" }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}
