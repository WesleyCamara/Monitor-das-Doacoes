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
            options : {
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
              ["Itaú", 625252520 ],
              ["Vale", 500000000],
              ["Cogna", 267000000],
              ["AMBEV", 110000000],
              ["Rede D'or", 108000000],
              ["Bradesco, Itaú e Santander", 80000000],
              ["Alcoa", 77000000],
              ["Nestlé", 55000000],
              ["iFood", 52000000],
              ["BRF", 50000000],
              ["Outros Doadores (200)", 1307626767],
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
      valor: 55555555,
      
    };
  }

 

  async componentDidMount() {
    const response = await api.get();

    this.setState({ data: response.data});
    this.setState({ totalDoado: Math.round(this.state.data.Consolidação[3][1])});

    this.setState({ 
      options: {
        series: [
          { data: [
            ["Itaú", 6 ],
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
          ]}
        ]
      }
    });

  }



  render() {
    const { options } = this.state;
  
    {console.log(this.state.options.series[0].data[0][1])}
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
                    <span className="span-h3">
                      R$ {this.state.totalDoado }
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>210</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-donor" />: Itaú
                    </p>
                    <p>
                      <span className="valor-doado">R$ 1.247.100.000</span>
                      <span>(32%)</span>
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
