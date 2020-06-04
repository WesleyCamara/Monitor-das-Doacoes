import React, { Component } from "react";
import "./Lista-Doadores.css";
import Loading from "../../assets/img/lista-doadores/loading.gif";
import shape from "../../assets/img/lista-doadores/square-shapes.svg";
import { FormattedMessage } from "react-intl";

import api from "../../services/API";

export default class ListaDoadores extends Component {
  constructor(props) {
    super(props);
    
    // this.setState = {
    //     oi: this.props.teste

    // }

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        lista: [],
        doacao: [],
        num: 10,
        oi: []
      };
  }

  

  handleSubmit(event) {
    this.state.doacao = [];
    this.limparDoacaoObject();
    this.maisResultados();
    event.preventDefault();
  }
  
  maisResultados = () => {
    this.setState({
        num: this.state.num + 10
    })
  };

  limparDoacaoObject = () => {
    this.doacaoObject.length = 0;
  };

  doacaoObject = [];
  url_atual = window.location.pathname;


  async componentDidMount(props) {
    // const options =
    //   "https://script.googleusercontent.com/macros/echo?user_content_key=HHPgHY0VTjUOtvbiM59KZSfpXISWkOsv6VDGAbI-16-RHELWJOk66ERsKhQ73D6Z7ohS8jGm_iyH3nHl8n7O4S0WuK_EtGHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFkSJ3OGPU4PNUNksnCEJmJS93T2ZzyujjUpxX3tYNvUSMYBj7AgB7_TWN7yU7wky0W-dnclfdIe&lib=MiU-jTl38wC2L3rz6MLSQoNcSVaJnOjrd";

    // const response = await fetch(options);

    // const body = await response.json();

    // const response = await api.get('');

    // const response = this.props.oi;
    
    // const teste = this.props.teste;

    // this.setState({ lista: this.response });
    // console.log("Teste", this.state.lista)
    // this.setState({ oi: teste });
    
  }
  

  shouldComponentUpdate(nextState) {
    if (this.state.lista !== nextState.lista) {
        return console.log("Lista", this.state.lista);
    }
  }


  formatValue(value) {
      if (this.url_atual !== "/en") {
        let formattedValue = Math.round(value).toLocaleString("pt-BR");
        return formattedValue;
      } else {
        let formattedValue = Math.round(value).toLocaleString("en-US");
        return formattedValue;
      }
  }

  quantidade = (qtde) => {
    let quantidade = this.doacaoObject.length;  
    return quantidade
  }

  shouldComponentUpdate(nextState) {
    if (this.state.num !== nextState.num) {
        return true;
    }
  }

  componentDidUpdate(prevProps) {

    if ( this.props.teste !== prevProps.teste){
      
    const teste = this.props.teste;

    this.setState({ oi: teste });
  }
}

  render() {

    const { oi } = this.state;
    

    console.log("OI", this.state.oi);

    // console.log("TESTE", this.teste);

    oi &&
      oi.map((donation) => {
        if (donation["Quem doa"] !== "Quem doa" && donation["Quem doa"] !== "Total") {
          this.doacaoObject.push({
            quemdoa: donation["Quem doa"],
            valor: donation["Valor Anunciado"],
            dollar: donation["in Dollars"],
            referencia: donation["Referência"]
          });
        }
      });

    this.doacaoObject.map((donation) => {
      if (this.state.doacao.length < this.state.num && this.url_atual !== "/en") {
       this.setState.doacao = this.state.doacao.push({
          quemdoa: donation.quemdoa,
          valor: donation.valor,
          referencia: donation.referencia
        });
      } else if (this.state.doacao.length < this.state.num) {
        this.setState.doacao = this.state.doacao.push({
            quemdoa: donation.quemdoa,
            valor: donation.dollar,
            referencia: donation.referencia
      })
    }
    });

    for (var listaDoadores of this.state.doacao) {
      this.listaDoadores =
        this.state.doacao &&
        this.state.doacao.map((donation, index) => (
          <div key={'donations' + index}>
            <p>
              <span className="donation"> <a href={(donation.referencia)} target="_blank"> {donation.quemdoa} </a> - </span> <FormattedMessage id="donation-value"/> {" "}
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
                <h2> <FormattedMessage id="donations-top-title"/> </h2>
              </div>
              <div className="donations-top-description">
                <p>
                <FormattedMessage id="donations-top-description"/>
                {this.quantidade() || "0"}
                <FormattedMessage id="donations-top-description-two"/>
                </p>
              </div>
            </div>
            <div className="donations-top-img">
              <img src={shape} />
            </div>
          </div>
          <div className="donations-list">
            <div className="lista">
              { this.listaDoadores || (
                <div className="loading">
                  {" "}
                  <img src={Loading} />{" "}
                </div>
              )}
            </div>
            <div className="load-more">
              <a onClick={this.handleSubmit}>  + <FormattedMessage id="load-more"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}