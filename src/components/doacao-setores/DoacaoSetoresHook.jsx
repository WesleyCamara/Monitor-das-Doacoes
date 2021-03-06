import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./estiloDoacaoSetores.css";
import { FormattedMessage } from "react-intl";

import squareShapes2 from "../../assets/img/doacao-setores/square-shapes-2.svg";
import setorBg from "../../assets/img/doacao-setores/setor-bg.svg";

const DoacaoSetoresHook = (props) => {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ".",
    },
  });

  useEffect(() => {
    if (props.valor.status === "ok") {
      updateGraficos();
      updateGraphic();
    }
  }, [props]);

  //opções do grafico em portugues

  const [optionsPT, setPtChartOptions] = useState({
    chart: {
      type: "pie",
      backgroundColor: "rgba(0,0,0,0)",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    colors: ["#408EC5"],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          connectorShape: "crookedLine",
          connectorColor: "gray",
          format: "{point.name}, {point.y:,.0f}%",
          style: {
            fontSize: "16px",
            fontFamily: "rubik, sans-serif",
            fontWeight: "regular",
          },
        },
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  connectorShape: "crookedLine",
                  connectorColor: "gray",
                  format: "{point.name}, {point.y:,.0f}%",
                  style: {
                    fontSize: "8px",
                    fontFamily: "rubik, sans-serif",
                    fontWeight: "regular",
                  },
                },
              },
            },
          },
        },
      ],
    },
    series: [
      {
        name: "Setores",
        data: [
          {
            name: "Doações",
            y: 100,
          },
        ],
      },
    ],
  });

  //opções do grafico em ingles

  const [optionsEN, setEnChartOptions] = useState({
    chart: {
      type: "pie",
      backgroundColor: "rgba(0,0,0,0)",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    colors: ["#408EC5"],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          format: "{point.name}, {point.y:,.0f}%",
          connectorShape: "crookedLine",
          connectorColor: "gray",
          style: {
            fontSize: "16px",
            fontFamily: "rubik, sans-serif",
            fontWeight: "regular",
          },
        },
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  connectorShape: "crookedLine",
                  connectorColor: "gray",
                  format: "{point.name}, {point.y:,.0f}%",
                  style: {
                    fontSize: "8px",
                    fontFamily: "rubik, sans-serif",
                    fontWeight: "regular",
                  },
                },
              },
            },
          },
        },
      ],
    },
    series: [
      {
        name: "Setores",
        data: [
          {
            name: "Donations",
            y: 100,
          },
        ],
      },
    ],
  });

  //   Opções para o gráfico em pt-BR
  const updateGraficos = () => {
    setPtChartOptions({
      series: [
        {
          name: "Doação",
          data: [
            {
              name: props.valor.Consolidação[11][6],
              y: Math.round(props.valor.Consolidação[11][8]*100),
            },
            {
              name: props.valor.Consolidação[12][6],
              y: Math.round(props.valor.Consolidação[12][8]*100),
            },
            {
              name: props.valor.Consolidação[13][6],
              y: Math.round(props.valor.Consolidação[13][8]*100),
            },
            {
              name: props.valor.Consolidação[14][6],
              y: Math.round(props.valor.Consolidação[14][8]*100),
            },
            {
              name: props.valor.Consolidação[15][6],
              y: Math.round(props.valor.Consolidação[15][8]*100),
            },
            {
              name: props.valor.Consolidação[16][6],
              y: Math.round(props.valor.Consolidação[16][8]*100),
            },
            {
              name: props.valor.Consolidação[17][6],
              y: Math.round(props.valor.Consolidação[17][8]*100),
            },
            {
              name: props.valor.Consolidação[18][6],
              y: Math.round(props.valor.Consolidação[18][8]*100),
            },
            {
              name: props.valor.Consolidação[19][6],
              y: Math.round(props.valor.Consolidação[19][8]*100),
            },
            {
              name: props.valor.Consolidação[20][6],
              y: Math.round(props.valor.Consolidação[20][8]*100),
            },
            {
              name: props.valor.Consolidação[21][6],
              y: Math.round(props.valor.Consolidação[21][8]*100),
            },
            {
              name: props.valor.Consolidação[22][6],
              y: Math.round(props.valor.Consolidação[22][8]*100),
            },
            {
              name: props.valor.Consolidação[23][6],
              y: Math.round(props.valor.Consolidação[23][8]*100),
            },
          ],
        },
      ],
    });
  };

  //   Opções para o gráfico em en-US
  const updateGraphic = () => {
    setEnChartOptions({
      series: [
        {
          name: "Donation",
          data: [
            {
              name: props.valor.Consolidação[36][6],
              y: Math.round(props.valor.Consolidação[36][8]*100),
            },
            {
              name: props.valor.Consolidação[37][6],
              y: Math.round(props.valor.Consolidação[37][8]*100),
            },
            {
              name: props.valor.Consolidação[38][6],
              y: Math.round(props.valor.Consolidação[38][8]*100),
            },
            {
              name: props.valor.Consolidação[39][6],
              y: Math.round(props.valor.Consolidação[39][8]*100),
            },
            {
              name: props.valor.Consolidação[40][6],
              y: Math.round(props.valor.Consolidação[40][8]*100),
            },
            {
              name: props.valor.Consolidação[41][6],
              y: Math.round(props.valor.Consolidação[41][8]*100),
            },
            {
              name: props.valor.Consolidação[42][6],
              y: Math.round(props.valor.Consolidação[42][8]*100),
            },
            {
              name: props.valor.Consolidação[43][6],
              y: Math.round(props.valor.Consolidação[43][8]*100),
            },
            {
              name: props.valor.Consolidação[44][6],
              y: Math.round(props.valor.Consolidação[44][8]*100),
            },
            {
              name: props.valor.Consolidação[45][6],
              y: Math.round(props.valor.Consolidação[45][8]*100),
            },
            {
              name: props.valor.Consolidação[46][6],
              y: Math.round(props.valor.Consolidação[46][8]*100),
            },
            {
              name: props.valor.Consolidação[47][6],
              y: Math.round(props.valor.Consolidação[47][8]*100),
            },
            {
              name: props.valor.Consolidação[48][6],
              y: Math.round(props.valor.Consolidação[48][8]*100),
            },
          ],
        },
      ],
    });
  };

  //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o idioma
  const idiomaUrl = window.location.href;
  let renderizaGrafico = null;
  if (idiomaUrl.includes("/en") === false) {
    renderizaGrafico = true;
  }

  return (
    <div className="container-setores">
      <div>
        <img className="img-fundo-setor" src={setorBg} alt="imagem de fundo"/>
      </div>
      <h2 className="chart-title-setores">
        <FormattedMessage id="chart-sectors-chart" />
      </h2>

      <div id="doacao-setores">
        {renderizaGrafico ? (
          <HighchartsReact
            className="grafico-pie"
            highcharts={Highcharts}
            options={optionsPT}
          />
        ) : (
          <HighchartsReact
            className="grafico-pie"
            highcharts={Highcharts}
            options={optionsEN}
          />
        )}
      </div>

      
        <div >
        <a className="estiloBtn"
        href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137"
        target="_blank"
        rel="noopener noreferrer"
      >
          <FormattedMessage id="chart-indicators-button" />
          </a>
        </div>
      
      <div>
        <img className="square-shape2" src={squareShapes2} alt="imagem de fundo"/>
      </div>
    </div>
  );
};

export default DoacaoSetoresHook;
