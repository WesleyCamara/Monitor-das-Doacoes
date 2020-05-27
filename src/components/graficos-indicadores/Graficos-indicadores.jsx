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

export default class graficosIndicators extends Component {
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
            data: [
              ["Itaú", 12],
              ["Vale", 13],
              ["Cogna", 85],
              ["AMBEV", 74],
              ["Rede D'or", 15],
              ["Bradesco, Itaú e Santander", 63],
              ["Alcoa", 48],
              ["Nestlé", 24],
              ["iFood", 10],
              ["BRF", 5],
              ["Outros Doadores (200)", 85],
            ],

            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#222222",
              y: 65, // 10 pixels down from the top
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
      totalDoado: [],
      doadores: 0,
      maiorDoador: [],
      maiorValorDoado: [],
      valor: 50,
    };
  }

  formatNumber(number) {
    let aux = Math.round(number);
  }

  async componentDidMount() {
    const response = await api.get();

    this.setState({ data: response.data });
    this.setState({
      totalDoado: this.formatNumber(this.state.data.Consolidação[3][1]),
      doadores: this.state.data.Doações.length - 1,
      maiorDoador: this.maiorDoador(this.state.data.Doações),
      maiorValorDoado: this.formatNumber(this.state.maiorDoador["Valor Anunciado"])

    });

    this.setState({
      options: {
        series: [
          {
            data: [
              ["Itaú", 6],
              ["Vale", this.state.valor],
              ["Cogna", 3],
              ["AMBEV", 4],
              ["Rede D'or", 5],
              ["Bradesco, Itaú e Santander", 6],
              ["Alcoa", 7],
              ["Nestlé", 8],
              ["iFood", 9],
              ["BRF", 10],
              ["Outros Doadores (200)", 11],
            ],
          },
        ],
      },
    });

    
  }

  // Formata o número com arredondamento e formatação de ponto no milhar
  formatNumber(number) {
    let formattedNumber = Math.round(number).toLocaleString("pt-BR");
    return formattedNumber;
  }

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

    console.log(maiorDoador);
    // let novo = {
    //   Valor: item["Valor Anunciado"],
    //   Setor: item["Setor"],
    //   Doador: item["Quem doa"],
    //   Classificacao: item["Classificação"],
    //   EmDolar : item["in Dollars"],
    //   Referencia: item["Referência"]
    // }
    // console.log(novo);

    return maiorDoador;
  }

  render() {
    const { options } = this.state;

    {
      console.log(this.state.maiorDoador);
    }
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
            <div className="chart-indicators-button">
              {" "}
              <FormattedMessage id="chart-indicators-button" />
            </div>
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
                    <FormattedMessage id="indicators-donations" />{" "}
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
                      <FormattedMessage id="largest-donor" />: {this.state.maiorDoador["Quem doa"]}
                    </p>
                    <p>
                      <span className="valor-doado">R$ {this.state.maiorDoador["Valor Anunciado"]}</span>
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
                    <span className="span-h3">R$ 278.275.247</span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>191.032</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-campaign" />: Na Luta contra
                      a COVID-19
                    </p>
                    <p>
                      <span className="valor-doado">R$ 38.144.000</span>
                      <span>(14%)</span>
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
                    <span className="span-h3">R$ 12.258.946</span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="biggest-donor">
                      <FormattedMessage id="biggest-live" />: Fome de Música
                      (inclui Sandy&Junior){" "}
                    </p>

                    <p>
                      <span>R$ 6.750.757</span>
                      <span>(55%)</span>
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
