import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import handMoney from "../../assets/img/graficos-indicadores/hand-money.png";
import "./Graficos-indicadores.css";
import api from "../../services/API";

// import getData from "./API"

Highcharts.setOptions({
  lang: {
    thousandsSep: ".",
  },
});

export default class GraficosIndicators extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "column",
          backgroundColor: "#F3F3F3",
        },
        colors: ["#4DB6AC"],
        title: {
          text: "",
        },
        plotOptions: {
          series: {
            groupPadding: 0,
            borderColor: "none",
          },
        },
        xAxis: {
          type: "category",
          lineWidth: 1,
          lineColor: "#707070",
          labels: {
            rotation: 0,
            style: {
              fontSize: "12px",
              fontFamily: "rubik, sans-serif",
              width: 9,
              textOverflow: "auto",
            },
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "",
          },

          gridLineDashStyle: "Dash",
          lineWidth: 2,
          lineColor: "#222222",
        },
        legend: {
          enabled: false,
        },
        tooltip: {
          enable: false,
        },

        series: [
          {
            name: "Valor doado",
            data: [],

            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#222222",
              y: 55, // 10 pixels down from the top
              style: {
                fontSize: "1.25em",
                fontFamily: "rubik, sans-serif",
                fontWeight: "400",
                textOutline: "none",
              },
            },
          },
        ],
      },

      data: [],
      totalDoado: 0,
      doadores: 0,
      doadoresCampanhas: 0,
      maiorDoador: [],
      maiorValorDoado: 0,
      maiorValorDoadoCampanha: 0,
      maiorCampanha: [],
      maiorLive: [],
      totalLive: 0,
      totalLivesAxiliar: 0,
      totalCampanhas: 0,
      totalDoadoresCampanhas: 0,
      valor: 10,
      valorMaiorLive: 0,
      doacoesParaGrafico: [0],
      doacoesOrdenadas: [],
      porcentagemMaiorValor: [],
      porcentagemCampanha: [],
    };
  }

  async componentDidMount() {
    const response = await api.get();

    this.setState({ data: response.data });
    this.setState({
      totalDoado: this.formatNumber(this.state.data.Consolidação[1][1]),
      doadores: this.state.data.Doações.length - 1,
      maiorDoador: this.maiorDoador(this.state.data.Doações),
      maiorValorDoado: this.formatNumber(
        this.state.maiorDoador["Valor Anunciado"]
      ),
      totalLive: this.formatNumber(
        this.state.data.Lives[this.state.data.Lives.length - 1][5]
      ),
      totalLiveAuxiliar: this.formatNumber(
        this.state.data.Lives[this.state.data.Lives.length - 1][5]
      ),
      doadoresCampanhas:
        this.state.data.Consolidação[6][1] - this.state.doadores,
      maiorCampanha: this.maiorCampanha(this.state.data.Campanhas),
    });

    this.setState({
      totalCampanhas:
        this.formatNumber(this.state.data.Consolidação[2][1]) -
        this.state.totalLiveAuxiliar,
      maiorValorDoadoCampanha: this.formatNumber(
        this.state.maiorCampanha["Valor Doado"]
      ),
      maiorLive: this.maiorLive(this.state.data.Lives),
      doacoesOrdenadas: this.ordenaDoacoes(this.state.data.Doações),
    });

    this.setState({
      valorMaiorLive: this.formatNumber(this.state.maiorLive[5]),
      doacoesParaGrafico: this.filtraDoacoes(this.state.doacoesOrdenadas),
    });

    // chama a função que ordena a array de doações
    this.ordenaDoacoes(this.state.data.Doações);

    this.porcentagem(
      this.state.maiorDoador["Valor Anunciado"],
      this.state.totalDoado
    );

    // Atualiza o grafico com as 11 maiores doações
    this.setState({
      options: {
        series: [
          {
            data: [
              [
                this.state.doacoesParaGrafico[0].doador,
                this.state.doacoesParaGrafico[0].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[1].doador,
                this.state.doacoesParaGrafico[1].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[2].doador,
                this.state.doacoesParaGrafico[2].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[3].doador,
                this.state.doacoesParaGrafico[3].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[4].doador,
                this.state.doacoesParaGrafico[4].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[5].doador,
                this.state.doacoesParaGrafico[5].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[6].doador,
                this.state.doacoesParaGrafico[6].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[7].doador,
                this.state.doacoesParaGrafico[7].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[8].doador,
                this.state.doacoesParaGrafico[8].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[9].doador,
                this.state.doacoesParaGrafico[9].valorDoado,
              ],
              [
                this.state.doacoesParaGrafico[10].doador,
                this.state.doacoesParaGrafico[10].valorDoado,
              ],
            ],
          },
        ],
      },
    });
  }

  // Formata o número com arredondamento
  formatNumber(number) {
    let formattedNumber = Math.round(number);
    return formattedNumber;
  }

  // retorna o maior doador
  maiorDoador(array) {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item["Valor Anunciado"] > maiorDoacao &&
        item["Quem doa"] !== "Total"
      ) {
        maiorDoacao = item["Valor Anunciado"];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  }

  // retorna a maior campanha de doações (lives não estão inclusas)
  maiorCampanha(array) {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item["Valor Doado"] > maiorDoacao &&
        item["Organizador (a) / Beneficiário (a)"] !== "Total" &&
        item["Organizador (a) / Beneficiário (a)"] !== "Campanhas + lives"
      ) {
        maiorDoacao = item["Valor Doado"];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  }

  // retorna a maior live de doações
  maiorLive(array) {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item[5] > maiorDoacao &&
        item[1] !== "Artista / Projeto" &&
        item[2] !== "Total"
      ) {
        maiorDoacao = item[5];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  }

  // Ordena a array de doações de acordo com o valor doado em ordes decrescente
  ordenaDoacoes(doacoes) {
    let saida = doacoes.sort(function (a, b) {
      return b["Valor Anunciado"] - a["Valor Anunciado"];
    });
    return saida;
  }

  // filtra os primeiros 11 itens uteis da array
  filtraDoacoes(itens) {
    let maioresDoacoes = [];

    for (let item = 2; item < 13; item++) {
      maioresDoacoes.push({
        doador: itens[item]["Quem doa"],
        valorDoado: itens[item]["Valor Anunciado"],
      });
    }
    return maioresDoacoes;
  }

 porcentagem(parte, total) {
    return (parte * 100) / total;
  }

  render() {
    const { options } = this.state;

    return (
      <section className="section-chart-container">
        <div className="chart-indicators">
          <div className="div-chart">
            <h2 className="chart-title">
              <FormattedMessage id="chart-indicators-chart" />
            </h2>
            <div className="chart">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>

            <a href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137" target="_blank" rel="noopener noreferrer">
            <div className="chart-indicators-button">
             
              <FormattedMessage id="chart-indicators-button" />
            </div>
            </a>
          </div>

          <div className="div-indicators">
            <h2 className="indicators-title">
              <FormattedMessage id="indicators-title" />
            </h2>

            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="indicators-donations" />
                  </h3>
                  <h3>
                    <span className="span-h3">R$ {this.state.totalDoado}</span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>{this.state.doadores}</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-donor" />:
                      {this.state.maiorDoador["Quem doa"]}
                    </p>
                    <p>
                      <span className="valor-doado">
                        R${this.state.maiorDoador["Valor Anunciado"]}
                      </span>
                      <span>(00%)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="linhas"></div>
            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="donations-campaigns" />
                  </h3>
                  <h3>
                    <span className="span-h3">
                      R${this.state.totalCampanhas}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>{this.state.doadoresCampanhas}</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-campaign" />:
                      {this.state.maiorCampanha.Campanhas}
                    </p>
                    <p>
                      <span className="valor-doado">
                        R${this.state.maiorValorDoadoCampanha}
                      </span>
                      <span>(00%)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="linhas"></div>
            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="donations-lives" />
                  </h3>
                  <h3>
                    <span className="span-h3">R$ {this.state.totalLive}</span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div className="biggest-live">
                    <p className="biggest-donor">
                      <FormattedMessage id="biggest-live" />:
                      {this.state.maiorLive[1]}
                    </p>

                    <p>
                      <span>R${this.state.valorMaiorLive}</span>
                      <span>(00%)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
