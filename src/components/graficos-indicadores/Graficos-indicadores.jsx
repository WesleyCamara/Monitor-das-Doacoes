import React, { useState, useEffect } from "react";
import "./Graficos-indicadores.css";
import { FormattedMessage } from "react-intl";
import handMoney from "../../assets/img/graficos-indicadores/hand-money.png";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const GraficosIndicadores = (props) => {
  // Esconde os números vazios antes de receber o valor da API
  const [visible, setVisible] = useState({
    visibleStyle: { opacity: 0 },
  });

  // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar
  const moeda = {
    valorAnunciado: "Valor Anunciado",
    valorDoado: "Valor Doado",
    acessoIndiceTotal: 1,
    acessoIndiceLives: 5,
    simbolo: "R$",
    valorDoadoLabel: "Valor doado",
    localeString: "pt-BR",
  };

  // Possui os valores iniciais de estado, serão atualizados quando receber as props pela API
  const [valores, setValores] = useState({
    total: 0,
    totalCampanhas: 0,
    maiorCampanha: 0,
    maiorLive: "",
    totalLives: 0,
    totalDoadores: 0,
    maiorDoador: "",
    maiorDoacao: 0,
    totalDoadoresCampanhas: 0,
    doacoesOrdenadas: [],
  });

  // Atualiza os dados que serão tratados, somente quando recebe os valores das props
  useEffect(() => {
    if (props.valor.status === "ok" && valores.maiorCampanha === 0) {
      setValores({
        maiorDoador: filtraMaiorDoador(props.valor["Doações"]),
        maiorCampanha: filtraMaiorCampanha(props.valor["Campanhas"]),
        maiorLive: maiorLive(props.valor["Lives"]),
        total: props.valor["Consolidação"][3][moeda.acessoIndiceTotal],
        totalCampanhas: props.valor["Consolidação"][1][moeda.acessoIndiceTotal],
        totalLives: props.valor["Consolidação"][2][moeda.acessoIndiceTotal],
        totalDoadores: props.valor["Doações"].length - 2,
        totalDoadoresCampanhas: subtrai(
          props.valor["Consolidação"][5][1],
          valores.totalDoadores
        ),
        doacoesOrdenadas: ordenaDoacoes(props.valor["Doações"]),
      });

      // Torna os dados visiveis após receber e processar da API
      setVisible({
        visibleStyle: { opacity: 1 },
      });
    }
  }, [props, valores.maiorCampanha]);

  // Se a array com os valores para o gráfico estiver pronta, chama a atualização dele
  useEffect(() => {
    if (
      valores.doacoesOrdenadas.length > 0 &&
      valores.doacoesOrdenadas[0].doador.length > 0
    ) {
      updateSeries();
    }
  }, [valores.doacoesOrdenadas]);

  // Formata o número com arredondamento e adiciona os pontos nos milhares
  const formatNumber = (number) => {
    let formattedNumber = Math.round(number).toLocaleString(moeda.localeString);
    return formattedNumber;
  };

  // retorna o maior doador
  const filtraMaiorDoador = (array) => {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item[moeda.valorAnunciado] > maiorDoacao &&
        item["Quem doa"] !== "Total"
      ) {
        maiorDoacao = item[moeda.valorAnunciado];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  };

  // filtra a campanha com maior arrecadação
  const filtraMaiorCampanha = (array) => {
    let maiorDoacao = 0;
    let maiorDoador = [];
    for (let item of array) {
      if (
        item["Valor Doado"] > maiorDoacao &&
        item["Organizador (a) / Beneficiário (a)"] !== "Total" &&
        item["Organizador (a) / Beneficiário (a)"] !== "Campanhas + lives" &&
        item["Organizador (a) / Beneficiário (a)"] !== "Campanhas"
      ) {
        maiorDoacao = item["Valor Doado"];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  };

  const subtrai = (itemMaior, itemMenor) => {
    return itemMaior - itemMenor;
  };

  // filtra a live com maior arrecadação
  const maiorLive = (array) => {
    let maiorDoacao = 0;
    let maiorLive = [];

    for (let item of array) {
      if (
        item[5] > maiorDoacao &&
        item[1] !== "Artista / Projeto" &&
        item[2] !== "Total"
      ) {
        maiorDoacao = item[5];
        maiorLive = item;
      }
    }
    return maiorLive;
  };

  // Calcula a porcentagem de uma valor sobre o outro
  const porcentagem = (parte, total) => {
    return Math.round((parte * 100) / total);
  };

  // Ordena as doações pelo maior valor e retorna as 11 maiores
  const ordenaDoacoes = (doacoes) => {
    let maioresDoacoes = [];

    let saida = doacoes.sort(function (a, b) {
      return b[moeda.valorAnunciado] - a[moeda.valorAnunciado];
    });

    for (let item = 2; item < 13; item++) {
      maioresDoacoes.push({
        doador: saida[item]["Quem doa"],
        valorDoado: saida[item][moeda.valorAnunciado],
      });
    }

    return maioresDoacoes;
  };

  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL
  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      moeda.valorAnunciado = "in Dollars";
      moeda.valorDoado = "in Dollars";
      moeda.acessoIndiceTotal = 2;
      moeda.acessoIndiceLives = 6;
      moeda.simbolo = "$";
      moeda.valorDoadoLabel = "Donated amount";
      moeda.localeString = "en-US";
    }
  };

  Highcharts.setOptions({
    lang: {
      thousandsSep: ".",
    },
  });

  // Opções do gráfico
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "column",
      backgroundColor: "#F3F3F3",
      height: 92 + "%",

      events: {
        load: function () {
          const chart = this,
            points = chart.series[0].data,
            options = {
              dataLabels: {
                inside: false,
                style: {
                  color: "black",
                },
              },
            };

          points.forEach(function (point) {
            if (point.shapeArgs.height > 80) {
              point.update(options, false);
            }
          });

          chart.redraw();
        },
      },
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
        rotation: window.screen.width < 1024 ? -45 : 0,
        style: {
          fontSize: "12px",
          fontFamily: "rubik, sans-serif",
          width: 9,
          // textOverflow: "auto",
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
      labels: {
        rotation: 0,
        style: {
          fontSize: "12px",
          fontFamily: "rubik, sans-serif",
          width: 9,
          // textOverflow: "auto",
        },
        formatter: function () {
          if (window.screen.width >= 1024) {
            return this.value.toLocaleString(moeda.localeString);
          } else {
            return "";
          }
        },
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enable: false,
    },

    series: [
      {
        name: moeda.valorDoadoLabel,
        data: [],

        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#222222",
          y: 50, // 10 pixels down from the top
          style: {
            fontSize: "1.25em",
            fontFamily: "rubik, sans-serif",
            fontWeight: "400",
            textOutline: "none",
          },
        },
      },
    ],
  });

  // Atualiza as series do gráfico, é alimentado pela const doacoesOrdenadas e chamado quando essa const está pronta
  const updateSeries = () => {
    setChartOptions({
      series: [
        {
          data: [
            [
              valores.doacoesOrdenadas[0]["doador"],
              Math.round(valores.doacoesOrdenadas[0]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[1]["doador"],
              Math.round(valores.doacoesOrdenadas[1]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[2]["doador"],
              Math.round(valores.doacoesOrdenadas[2]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[3]["doador"],
              Math.round(valores.doacoesOrdenadas[3]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[4]["doador"],
              Math.round(valores.doacoesOrdenadas[4]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[5]["doador"],
              Math.round(valores.doacoesOrdenadas[5]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[6]["doador"],
              Math.round(valores.doacoesOrdenadas[6]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[7]["doador"],
              Math.round(valores.doacoesOrdenadas[7]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[8]["doador"],
              Math.round(valores.doacoesOrdenadas[8]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[9]["doador"],
              Math.round(valores.doacoesOrdenadas[9]["valorDoado"]),
            ],
            [
              valores.doacoesOrdenadas[10]["doador"],
              Math.round(valores.doacoesOrdenadas[10]["valorDoado"]),
            ],
          ],
        },
      ],
    });
  };

  return (
    <>
      {formatValue()}
      <section className="section-chart-container">
        <div className="chart-indicators">
          <div className="div-chart">
            <h2 className="chart-title">
              <FormattedMessage id="chart-indicators-chart" />
            </h2>
            <div className="chart">
              {/* Import do gráfico  */}
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>

            <a
              href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    <span className="span-h3" style={visible.visibleStyle}>
                      {moeda.simbolo} {formatNumber(valores.total)}{" "}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div className="total-doadores-div">
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span style={visible.visibleStyle}>
                        {formatNumber(valores.totalDoadores)}
                      </span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="biggest-donor" />:
                      {valores.maiorDoador["Quem doa"]}
                    </p>
                    <p>
                      <span
                        className="valor-doado"
                        style={visible.visibleStyle}
                      >
                        {moeda.simbolo}
                        {formatNumber(
                          valores.maiorDoador[moeda.valorAnunciado]
                        )}
                      </span>
                      <span style={visible.visibleStyle}>
                        (
                        {porcentagem(
                          Number(valores.maiorDoador[moeda.valorAnunciado]),
                          Number(valores.total)
                        )}
                        )%
                      </span>
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
                    <span className="span-h3" style={visible.visibleStyle}>
                      {moeda.simbolo} {formatNumber(valores.totalCampanhas)}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div className="total-doadores-div">
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span style={visible.visibleStyle}>
                        {formatNumber(
                          valores.totalDoadoresCampanhas - valores.totalDoadores
                        )}
                      </span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="biggest-campaign" />:{" "}
                      {valores.maiorCampanha["Campanhas"]}
                    </p>
                    <p>
                      <span
                        className="valor-doado"
                        style={visible.visibleStyle}
                      >
                        {moeda.simbolo}
                        {formatNumber(valores.maiorCampanha[moeda.valorDoado])}
                      </span>
                      <span style={visible.visibleStyle}>
                        (
                        {porcentagem(
                          Number(valores.maiorCampanha[moeda.valorDoado]),
                          Number(valores.totalCampanhas)
                        )}
                        )%
                      </span>
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
                    <span className="span-h3" style={visible.visibleStyle}>
                      {moeda.simbolo} {formatNumber(valores.totalLives)}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div className="biggest-live">
                    <p className="biggest-donor">
                      <FormattedMessage id="biggest-live" />:
                      {valores.maiorLive[1]}
                    </p>

                    <p style={visible.visibleStyle}>
                      <span>
                        {moeda.simbolo}{" "}
                        {formatNumber(
                          valores.maiorLive[moeda.acessoIndiceLives]
                        )}
                      </span>
                      <span style={visible.visibleStyle}>
                        (
                        {porcentagem(
                          Number(valores.maiorLive[moeda.acessoIndiceLives]),
                          Number(valores.totalLives)
                        )}
                        )%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GraficosIndicadores;
