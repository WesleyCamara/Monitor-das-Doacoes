import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import ChamadaInicialIndicadores from "./components/chamada-inicial-indicadores/Chamada-inicial-indicadores";
import Blocoinfo from "./components/blocoinfo/Blocoinfo";
import BlocoInfoDois from "./components/blocoinfodois/Blocoinfodois";
import ListaDoadores from "./components/lista-doadores/Lista-Doadores";
import EvolucaoSemanal from "./components/evolucao-semanal/EvolucaoSemanal"
import DoacaoSetoresHook from "./components/doacao-setores/DoacaoSetoresHook";
import GraficosIndicadores from "./components/graficos-indicadores/Graficos-indicadores";
import GraficoTipoDoacao from "./components/grafico-oque/GraficoTipoDoacao"
import Ranking from "./components/ranking/ranking"
import Imprensa from "./components/imprensa/Imprensa";

import axios from "axios";


export default class App extends Component {
  state = {
    newData: [""],
  };

  async componentDidMount() {
    await axios
      .get(
        "https://script.google.com/macros/s/AKfycbxWEpYpxGPRKy6gHS7eWzUt_PD0dNlkQa8ynBQaBUusbLQ98qM/exec"
      )
      .then((res) => {
        const data = res.data;
        this.setState({ newData: data });
      });
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <ChamadaInicialIndicadores valor={this.state.newData} />
        <ListaDoadores valor={this.state.newData["Doações"]} />
        <EvolucaoSemanal valor={this.state.newData} />
        <GraficoTipoDoacao valor={this.state.newData} />
        <DoacaoSetoresHook valor={this.state.newData} />
        <GraficosIndicadores valor={this.state.newData} />
        <Ranking valor={this.state.newData} />
        {/* <Blocoinfo valor={this.state.newData} /> */}
        <BlocoInfoDois />
        <Imprensa valor={this.state.newData["Imprensa"]} />
        <Footer />
      </div>
    );
  }
}
