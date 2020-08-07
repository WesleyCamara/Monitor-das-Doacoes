import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from 'moment';

import "./GraficoTipoDoacao.css";
import { FormattedMessage } from "react-intl";

const GraficoTipoDoacao = (props) => {
  let seriesDonations = []
  let seriesDonnors = []
  let categories = []

  // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar
  const idioma = {
    legendaDoacoes: 'Doações (em milhões)',
    legendaDoadores: 'Doadores (em milhares)',
    percentual: 'Percentual',
    indiceDoacoes: 2,
    indiceDoadores: 3,
    localeString: "pt-BR",
  };

  // useEffect(() => {
  //   if (props.valor.status === "ok") {
  //     seriesDonations = chartSeries(props.valor["Gráficos"], idioma.indiceDoacoes)
  //     seriesDonnors = chartSeries(props.valor["Gráficos"], idioma.indiceDoadores)
  //     categories = chartCategories(props.valor["Gráficos"])
  //     updateSeries()
  //   }
  // }, [props]);

  const chartSeries = (values, index) => {
    let final = []
    values.forEach((item) => {
      if (item[0] !== "" && !isNaN(item[index])) {
        final.push(Math.round(item[index]))
      }
    })
    return final
  }
  const chartCategories = (array) => {
    const categorias = []
    array.forEach(item => {
      const date = moment(item[1]).format('DD/MM')
      if (date !== "Invalid date") {
        categorias.push(date)
      }
    })
    console.log(categorias)
    return categorias
  }
  const [chartChartWhatsOptions, setChartWhatsOptions] = useState({
    chart: {
      type: "column",
      backgroundColor: "#fff",
      height: 80 + "%",
    },
    credits: {
      enabled: false,
    },
    colors: ["#BB772E"],
    title: {
      text: "",
    },
    plotOptions: {
      formatter: function () {
        if (window.screen.width >= 1024) {
          return this.value + "%";
        }
      },
      series: {
        groupPadding: 0,
        borderColor: "none",
      },
      labels: {
        useHTML: true,
      }
    },
    xAxis: {
      type: "category",
      lineWidth: 1,
      lineColor: "#707070",
      labels: {
        useHTML: true,
        rotation: 0,
        style: {
          fontSize: "0.6em",
          fontFamily: "rubik, sans-serif",
          fontWeight: "400",
          width: 30,
          padding: 0,
        },
      },
    },
    yAxis: {
      max: 100,
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
            return this.value + "%";
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
        name: idioma.percentual,
        data: [["Dinheiro", 62],
        ["Produtos", 32],
        ["Serviços", 5],
        ["Estrutura", 1],
        ["Isenção de tarifas", 1]],

        dataLabels: {
          inside: false,
          enabled: true,
          rotation: -90,
          color: "#222222",

          y: -45, // 10 pixels down from the top
          style: {
            fontSize: "1em",
            fontFamily: "rubik, sans-serif",
            fontWeight: "400",
            textOutline: "none",
            wordBreak: "breack-all",
          },
        },
      },
    ],
  });

  // const updateChartWhatsSeries = () => {
  //   setChartOptions({
  //     xAxis: {
  //       categories: categories
  //     },
  //     series: [{
  //       name: idioma.legendaDoacoes,
  //       data: seriesDonations
  //     }, {
  //       name: idioma.legendaDoadores,
  //       data: seriesDonnors
  //     }]

  //   })

  // }



  //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o idioma
  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL


  const [chartChartWhereOptions, setChartWhereOptions] = useState({
    chart: {
      type: "column",
      backgroundColor: "#fff",
      height: 80 + "%",
    },
    credits: {
      enabled: false,
    },
    colors: ["#BB772E"],
    title: {
      text: "",
    },
    plotOptions: {
      formatter: function () {
        if (window.screen.width >= 1024) {
          return this.value + "%";
        }
      },
      series: {
        groupPadding: 0,
        borderColor: "none",
      },
      labels: {
        useHTML: true,
      }
    },
    xAxis: {
      type: "category",
      lineWidth: 1,
      lineColor: "#707070",
      labels: {
        useHTML: true,
        rotation: 0,
        style: {
          fontSize: "0.6em",
          fontFamily: "rubik, sans-serif",
          fontWeight: "400",
          width: 30,
          padding: 0,
        },
      },
    },
    yAxis: {
      max: 100,
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
        },
        formatter: function () {
          if (window.screen.width >= 1024) {
            return this.value + "%";
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
        name: idioma.percentual,
        data: [["Doação para pessoa jurídica", 58],
        ["Doação para instituto/fundação própria", 23],
        ["Doação para pessoa física", 9],
        ["Doação para fundo filantrópico", 6],
        ["Doação para campanha de financiamento coletivo", 4]
        ["Doação por meio de live na internet", 0]
        ],

        dataLabels: {
          inside: false,
          enabled: true,
          rotation: -90,
          color: "#222222",

          y: -45, // 10 pixels down from the top
          style: {
            fontSize: "1em",
            fontFamily: "rubik, sans-serif",
            fontWeight: "400",
            textOutline: "none",
            wordBreak: "breack-all",
          },
        },
      },
    ],
  });

  const [chartChartToOptions, setChartToOptions] = useState({
    chart: {
      type: "column",
      backgroundColor: "#fff",
      height: 80 + "%",
    },
    credits: {
      enabled: false,
    },
    colors: ["#BB772E"],
    title: {
      text: "",
    },
    plotOptions: {
      formatter: function () {
        if (window.screen.width >= 1024) {
          return this.value + "%";
        }
      },
      series: {
        groupPadding: 0,
        borderColor: "none",
      },
      labels: {
        useHTML: true,
      }
    },
    xAxis: {
      type: "category",
      lineWidth: 1,
      lineColor: "#707070",
      labels: {
        useHTML: true,
        rotation: 0,
        style: {
          fontSize: "0.6em",
          fontFamily: "rubik, sans-serif",
          fontWeight: "400",
          width: 30,
          padding: 0,
        },
      },
    },
    yAxis: {
      max: 100,
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
        },
        formatter: function () {
          if (window.screen.width >= 1024) {
            return this.value + "%";
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
        name: idioma.percentual,
        data: [["Saúde", 77],
        ["Assistência Social", 19],
        ["Educação", 5],
        ["Cultura", 0],
        ],

        dataLabels: {
          inside: false,
          enabled: true,
          rotation: -90,
          color: "#222222",

          y: -45, // 10 pixels down from the top
          style: {
            fontSize: "1em",
            fontFamily: "rubik, sans-serif",
            fontWeight: "400",
            textOutline: "none",
            wordBreak: "breack-all",
          },
        },
      },
    ],
  });



  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      idioma.legendaDoacoes = 'Donations (in millions)';
      idioma.legendaDoadores = 'Donors (in thousands)';
      idioma.percentual = 'Percentage'
      idioma.indiceDoacoes = 8;
      idioma.localeString = "en-US";
    }
  };

  formatValue()
  return (

    <div className="container-setores">

      <div className="charts-donations">

        <div className="chart-item">
          <h2>
          <FormattedMessage id="chart-whats" />
      </h2>
          <div className="chart-whats">
            <HighchartsReact highcharts={Highcharts} options={chartChartWhatsOptions} />
          </div>
        </div>

        <div className="chart-item">
          <h2>
          <FormattedMessage id="chart-where" />
      </h2>
          <div className="chart-whats">
            <HighchartsReact highcharts={Highcharts} options={chartChartWhereOptions} />
          </div>
        </div>

        <div className="chart-item">
          <h2>
          <FormattedMessage id="chart-to" />
      </h2>
          <div className="chart-whats">
            <HighchartsReact highcharts={Highcharts} options={chartChartToOptions} />
          </div>
        </div>

      </div>




      <a
        href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="estiloBtn">
          <FormattedMessage id="chart-indicators-button" />
        </button>
      </a>

    </div>
  );
};

export default GraficoTipoDoacao;
