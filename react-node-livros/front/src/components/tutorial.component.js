import React, { Component } from "react";
import LivrosDataService from "../services/livro.service";

export default class Livro extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeAno = this.onChangeAno.bind(this);
    this.getLivro = this.getLivro.bind(this);
    this.updateLivro = this.updateLivro.bind(this);
    this.deleteLivro = this.deleteLivro.bind(this);

    this.state = {
      currentLivro: {
        id: null,
        name: "",
        author: "",
        ano: 2022
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getLivro(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentLivro: {
          ...prevState.currentLivro,
          name: name
        }
      };
    });
  }

  onChangeAuthor(e) {
    const author = e.target.value;

    this.setState(prevState => ({
      currentLivro: {
        ...prevState.currentLivro,
        author: author
      }
    }));
  }

  onChangeAno(e) {
    const ano = e.target.value;

    this.setState(prevState => ({
      currentLivro: {
        ...prevState.currentLivro,
        ano: ano
      }
    }));
  }

  getLivro(id) {
    LivrosDataService.get(id)
      .then(response => {
        this.setState({
          currentLivro: response.data.livro
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }  

  updateLivro() {
    LivrosDataService.update(
      this.state.currentLivro.id,
      this.state.currentLivro
    )
      .then(response => {
        console.log(response.data.livro);
        this.setState({
          message: "Livro atualizado com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteLivro() {
    LivrosDataService.delete(this.state.currentLivro.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/livros')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentLivro } = this.state;

    return (
      <div>
        {currentLivro ? (
          <div className="edit-form">
            <h4>Livro</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={currentLivro.name} onChange={this.onChangeName} />
              </div>

              <div className="form-group">
                <label htmlFor="author">Escritor</label>
                <input type="text" className="form-control" id="author" value={currentLivro.author} onChange={this.onChangeAuthor} />
              </div>
            
              <div className="form-group">
                <label htmlFor="ano">Ano</label>
                <input type="text" className="form-control" id="ano" value={currentLivro.ano} onChange={this.onChangeAno} />
              </div>             
            </form>         

            <button className="btn btn-danger mr-2" onClick={this.deleteLivro} >
              Remover
            </button>

            <button type="submit" className="btn btn-success" onClick={this.updateLivro} >
              Salvar
            </button>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Clique em um Livro...</p>
          </div>
        )}
      </div>
    );
  }
}
