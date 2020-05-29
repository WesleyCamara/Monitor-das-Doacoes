import React, { Component } from "react";
import "./Lista-Doadores.css";
import Loading from "../../assets/img/lista-doadores/loading.gif";
import shape from "../../assets/img/lista-doadores/square-shapes.svg";

export default class ListaDoadores extends Component {
  constructor(props) {
    super(props);
    // this.state = {doacao:[]};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    teste: [],
    doacao: ([] = []),
  };

  handleSubmit(event) {
    this.state.doacao = [];
    this.limparDoacaoObject();
    this.maisResultados();
    this.componentDidMount();
    // this.carregar();
    event.preventDefault();
  }

  maisResultados = (num) => {
    this.num += 10;
    // this.doacaoObject.length += 10;
    console.log("Clicou", this.num);
    return num;
  };

  carregar = () => {
    return this.listaDoadores;
  };

  limparDoacaoObject = () => {
    this.doacaoObject.length = 0;
  };

  doacaoObject = [];
  // doacao= [];
  num = 10;

  async componentDidMount() {
    const options =
      "https://script.googleusercontent.com/macros/echo?user_content_key=HHPgHY0VTjUOtvbiM59KZSfpXISWkOsv6VDGAbI-16-RHELWJOk66ERsKhQ73D6Z7ohS8jGm_iyH3nHl8n7O4S0WuK_EtGHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFkSJ3OGPU4PNUNksnCEJmJS93T2ZzyujjUpxX3tYNvUSMYBj7AgB7_TWN7yU7wky0W-dnclfdIe&lib=MiU-jTl38wC2L3rz6MLSQoNcSVaJnOjrd";

    const response = await fetch(options);
    console.log("res ", response);

    const body = await response.json();

    this.setState({ teste: body.Doações });
    console.log("data", this.state.data);
  }

  formatValor(valor) {
    let valorFormatado = Math.round(valor).toLocaleString("pt-BR");
    return valorFormatado;
  }

  render() {
    const { teste } = this.state;

    teste &&
      teste.map((donation) => {
        console.log("NUM", this.num);
        if (donation["Quem doa"] !== "Quem doa") {
          this.doacaoObject.push({
            quemdoa: donation["Quem doa"],
            valor: donation["Valor Anunciado"],
          });
        }
        console.log("Teste", this.doacaoObject);
      });

    this.doacaoObject.map((donation) => {
      if (this.state.doacao.length < this.num) {
        this.state.doacao.push({
          quemdoa: donation.quemdoa,
          valor: donation.valor,
        });
      }
    });

    console.log("Objeto de doação", this.state.doacao);

    for (var listaDoadores of this.state.doacao) {
      // if (this.doacaoObject.length < (this.num)) {
      this.listaDoadores =
        this.state.doacao &&
        this.state.doacao.map((teste) => (
          <div>
            <p>
              <span className="donation"> {teste.quemdoa} - </span> R${" "}
              {this.formatValor(teste.valor)}
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
                <h2>Quem está doando:</h2>
              </div>
              <div className="donations-top-description">
                <p>
                  (para cada um dos 232 doadores - mínimo de 3 mil reais - há um
                  link com a referência principal da notícia sobre a doação)
                </p>
              </div>
            </div>
            <div className="donations-top-img">
              <img src={shape} />
            </div>
          </div>
          <div className="donations-list">
            <div className="lista">
              {this.listaDoadores || (
                <div className="loading">
                  {" "}
                  <img src={Loading} />{" "}
                </div>
              )}
            </div>
            <div className="load-more">
              <a onClick={this.handleSubmit}> + Carregar mais </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
