import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import ChamadaInicialIndicadores from "./components/chamada-inicial-indicadores/Chamada-inicial-indicadores";
import Blocoinfo from "./components/blocoinfo/Blocoinfo";
import BlocoInfoDois from "./components/blocoinfodois/Blocoinfodois";
import ListaDoadores from "./components/lista-doadores/Lista-Doadores";
import DoacaoSetoresHook from "./components/doacao-setores/DoacaoSetoresHook";
import GraficosIndicadores from "./components/graficos-indicadores/Graficos-indicadores";

import axios from "axios";

export default class App extends Component {
  state = {
    newData: [],
  };

  async componentDidMount() {
    await axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=JdkNA3_2GGI1yLyhx-9KkYn_e4McqwXBerMsDP3yW4Fkx5HuChnO1HhUZ6So0tV6Xsqi3qLV-Qlu0hSwjTn-_ghLklj8mWwUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFkSJ3OGPU4PNUNksnCEJmJS93T2ZzyujjUpxX3tYNvUSMYBj7AgB7_TWN7yU7wky0W-dnclfdIe&lib=MiU-jTl38wC2L3rz6MLSQoNcSVaJnOjrd"
      )
      .then((res) => {
        const data = res.data;
        this.setState({ newData: data });
        console.log("chamada API ", this.state.newData);
      });
  }

  render() {
    return (
      <div className="App">
         <Menu />
        <ChamadaInicialIndicadores />
        <ListaDoadores valor={this.state.newData["Doações"]}/>
        <DoacaoSetoresHook valor={this.state.newData} />
        <GraficosIndicadores valor={this.state.newData} />
        <Blocoinfo valor={this.state.newData}/>
        <BlocoInfoDois />
        <Footer />
      </div>
    );
  }
}
