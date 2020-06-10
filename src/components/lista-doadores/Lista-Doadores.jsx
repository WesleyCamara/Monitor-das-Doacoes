import React, { Component } from "react";
import "./Lista-Doadores.css";
import Loading from "../../assets/img/lista-doadores/loading.gif";
import shape from "../../assets/img/lista-doadores/square-shapes.svg";
import { FormattedMessage } from "react-intl";

export default class ListaDoadores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      doacao: [],
      num: 10,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  doacaoObject = [];
  url_atual = window.location.pathname;

  // Evento de clique no botão chamando as funções
  handleSubmit(event) {
    this.emptyDoacaoObject();
    this.moreResults();
    event.preventDefault();
  }

  // Acrescenta mais 10 resultados na lista de doadores
  moreResults = () => {
    this.setState({
      num: this.state.num + 10,
      doacao: []
    });
  };

  // Limpa o vetor doacaoObject
  emptyDoacaoObject = () => {
    this.doacaoObject.length = 0;
  };

  // Define o formato do valor da doação entre real e dolar dependendo do idioma escolhido
  formatValue(value) {
    if (this.url_atual !== "/en") {
      let formattedValue = Math.round(value).toLocaleString("pt-BR");
      return formattedValue;
    } else {
      let formattedValue = Math.round(value).toLocaleString("en-US");
      return formattedValue;
    }
  }
  // Armazena o tamanho do vetor doacaoObject em uma variável
  amount = (qtde) => {
    let amount = this.doacaoObject.length;
    return amount;
  };

  // Re-renderiza se houver mudança no state.num
  shouldComponentUpdate(nextState) {
    if (this.state.num !== nextState.num) {
      return true;
    }
  }

  // Armazena o props.valor na state lista
  componentDidUpdate(prevProps) {
    if (this.props.valor !== prevProps.valor) {
      this.setState({ lista: this.props.valor });
    }
  }

  render() {
    const { lista } = this.state;
    // Busca as informações na state lista e reorganiza no vetor doacaoObject apenas com as informações necessária.
    // O vetor é criado sem resultados que possuam 'Quem doa' e 'Total'.
    // Logo depois o vetor é organizado em ordem alfabetica
    lista &&
      lista.map((donation) => {
        if (
          donation["Quem doa"] !== "Quem doa" &&
          donation["Quem doa"] !== "Total"
        ) {
          this.doacaoObject.push({
            quemdoa: donation["Quem doa"],
            valor: donation["Valor Anunciado"],
            dollar: donation["in Dollars"],
            referencia: donation["Referência"],
          });
          this.doacaoObject.sort(function (a, b) {
            return a.quemdoa > b.quemdoa ? 1 : b.quemdoa > a.quemdoa ? -1 : 0;
          });
        }
      });

    // O state doacao recebe os resultados do vetor doacaoObject de acordo com o idioma escolhido
    this.doacaoObject.map((donation) => {
      if (
        this.state.doacao.length < this.state.num &&
        this.url_atual !== "/en"
      ) {
        this.setState.doacao = this.state.doacao.push({
          quemdoa: donation.quemdoa,
          valor: donation.valor,
          referencia: donation.referencia,
        });
      } else if (this.state.doacao.length < this.state.num) {
        this.setState.doacao = this.state.doacao.push({
          quemdoa: donation.quemdoa,
          valor: donation.dollar,
          referencia: donation.referencia,
        });
      }
    });

    // Lista as empresas e os valores doados com o link para a materia
    for (var listaDoadores of this.state.doacao) {
      this.listaDoadores =
        this.state.doacao &&
        this.state.doacao.map((donation, index) => (
          <div key={"donations" + index}>
            <p>
              <span className="donation">
                {" "}
                <a href={donation.referencia} target="_blank" rel="noopener noreferrer">
                  {" "}
                  {donation.quemdoa}{" "}
                </a>{" "}
                -{" "}
              </span>{" "}
              <FormattedMessage id="donation-value" />{" "}
              {this.formatValue(donation.valor)}
            </p>
          </div>
        ));
    }

    return (
      <div className="container-donations-list">
        <div className="donations">
          <div className="donations-top">
            <div className="donations-top-text">
              <div className="donations-top-title">
                <h2>
                  <FormattedMessage id="donations-top-title" />{" "}
                </h2>
              </div>
              <div className="donations-top-description">
                <p>
                  <FormattedMessage id="donations-top-description" />
                  {this.amount() || "0"}
                  <FormattedMessage id="donations-top-description-two" />
                </p>
              </div>
            </div>
            <div className="donations-top-img">
              <img src={shape} alt="" />
            </div>
          </div>
          <div className="donations-list">
            <div className="lista">
              {this.listaDoadores || (
                <div className="loading">
                  <img src={Loading} alt="Carregando..."/>
                </div>
              )}
            </div>
            <div className="load-more">
              <div className="button" onClick={this.handleSubmit}>
                + <FormattedMessage id="load-more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
