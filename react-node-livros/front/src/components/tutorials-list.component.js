import React, { Component } from "react";
import LivrosDataService from "../services/livro.service";
import { Link } from "react-router-dom";

export default class LivrosList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveLivros = this.retrieveLivros.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveLivro = this.setActiveLivro.bind(this);
    this.removeAllLivros = this.removeAllLivros.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      livros: [],
      currentLivro: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveLivros();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveLivros() {
    LivrosDataService.getAll()
      .then(response => {
        this.setState({
          livros: response.data.livros
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveLivros();
    this.setState({
      currentLivro: null,
      currentIndex: -1
    });
  }

  setActiveLivro(livro, index) {
    this.setState({
      currentLivro: livro,
      currentIndex: index
    });
  }

  removeAllLivros() {
    LivrosDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentLivro: null,
      currentIndex: -1
    });

    LivrosDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          livros: response.data.livros
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, livros, currentLivro, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Pesquisar por nome" value={searchName} onChange={this.onChangeSearchName} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={this.searchName}>
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Listagem dos livros</h4>

          <ul className="list-group">
            {this.state.livros &&
              this.state.livros.map((livro, index) => (
                <li className={"list-group-item " + (index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveLivro(livro, index)} key={index} >
                  {livro.name}
                </li>
              ))}
          </ul>

          <button className="my-3 btn btn-sm btn-danger" onClick={this.removeAllLivros} >
            Remover todos
          </button>
        </div>
        <div className="col-md-6">
          {currentLivro ? (
            <div>
              <h4>Livro</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentLivro.name}
              </div>
              <div>
                <label>
                  <strong>Escritor:</strong>
                </label>{" "}
                {currentLivro.author}
              </div>
              <div>
                <label>
                  <strong>Ano: </strong>
                </label>{" "}
                {currentLivro.ano}
              </div>

              <Link to={"/livros/" + currentLivro.id} className="btn btn-warning" >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Selecione um livro...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
