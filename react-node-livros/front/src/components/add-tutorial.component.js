import React, { Component } from "react";
import LivrosDataService from "../services/livro.service";
import { Link } from "react-router-dom";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeAno = this.onChangeAno.bind(this);
    this.saveLivro = this.saveLivro.bind(this);
    this.newLivro = this.newLivro.bind(this);

    this.state = {
      id: null,
      name: "",
      author: "", 
      ano: 2022,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onChangeAno(e) {
    this.setState({
      ano: e.target.value
    });
  }

  saveLivro() {
    var data = {
      name: this.state.name,
      author: this.state.author,
      ano: this.state.ano
    };

    LivrosDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          author: response.data.author,
          ano: response.data.ano,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newLivro() {
    this.setState({
      id: null,
      name: "",
      author: "",
      ano: 2022,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        { this.state.submitted == false ? (
          <div>
            <h4>Livro Salvo com sucesso!</h4>
            <div style={{textAlign: 'center'}}>
              <button className="btn btn-success" style={{margin: '1em'}} onClick={this.newLivro}>
                Adicionar Novo livro
              </button>
              <Link to={"/livros"} className="btn btn-primary" >
                Retornar para Listagem
              </Link>
            </div>            
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Livro</label>
              <input type="text" className="form-control" id="name" required
                value={this.state.name} onChange={this.onChangeName} name="name" />
            </div>

            <div className="form-group">
              <label htmlFor="author">Escritor</label>
              <input type="text" className="form-control" id="author" required 
                value={this.state.author} onChange={this.onChangeAuthor} name="author" />
            </div>

            <div className="form-group">
              <label htmlFor="ano">Ano lançamento</label>
              <input type="text" className="form-control" id="ano" required 
                value={this.state.ano} onChange={this.onChangeAno} name="ano" />
            </div>

            <button onClick={this.saveLivro} className="btn btn-success">
              Enviar
            </button>
          </div>
        )}
      </div>
    );
  }
}
