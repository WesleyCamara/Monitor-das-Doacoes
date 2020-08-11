import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./GraficoTipoDoacao.css";
import { FormattedMessage } from "react-intl";

const GraficoTipoDoacao = (props) => {
  let seriesChartWhats = []
  let categoriesChartWhats = []

  let categoriesChartWhere = []
  let seriesChartWhere = []

  let categoriesChartTo = []
  let seriesChartTo = []

  // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar
  const idioma = {
    categoriesChart: 0,
    percentual: 'Percentual',
    indiceDoacoes: 2,
    localeString: "pt-BR",
  };

  const chartSeries = (values, index) => {
    let final = []
    for (let i = 0; i < values.length - 1; i++) {
      let percentValue = Math.round(values[i][index] * 100)
      if (percentValue) {
        final.push(percentValue)
      }
    }
    return final
  }

  const chartCategories = (array, index) => {
    const categorias = []
    for (let i = 0; i < array.length - 1; i++) {
      categorias.push(array[i][index])
    }
    return categorias
  }

  useEffect(() => {
    if (props.valor.status === "ok") {
      categoriesChartWhats = chartCategories(props.valor["A"], idioma.categoriesChart)
      seriesChartWhats = chartSeries(props.valor["A"], idioma.indiceDoacoes)

      categoriesChartWhere = chartCategories(props.valor["B"], idioma.categoriesChart)
      seriesChartWhere = chartSeries(props.valor["B"], idioma.indiceDoacoes)

      categoriesChartTo = chartCategories(props.valor["C"], idioma.categoriesChart)
      seriesChartTo = chartSeries(props.valor["C"], idioma.indiceDoacoes)

      updateChartsData()
    }
  }, [props]);


  const [chartWhatsOptions, setChartWhatsOptions] = useState({
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
        return this.value + "%";
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
          return this.value + "%";
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
        data: [],

        dataLabels: {
          inside: false,
          enabled: true,
          rotation: -90,
          color: "#222222",
          y: -45,
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
        return this.value + "%";
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
          return this.value + "%";
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
        data: [],
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
        return this.value + "%";
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
          return this.value + "%";
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
        data: [],
        dataLabels: {
          inside: false,
          enabled: true,
          rotation: -90,
          color: "#222222",
          y: -45,
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

  const updateChartsData = () => {
    setChartWhatsOptions({
      xAxis: {
        categories: categoriesChartWhats
      },
      series: [{
        name: idioma.percentual,
        data: seriesChartWhats
      }]
    })

    setChartWhereOptions({
      xAxis: {
        categories: categoriesChartWhere
      },
      series: [{
        name: idioma.percentual,
        data: seriesChartWhere
      }]
    })

    setChartToOptions({
      xAxis: {
        categories: categoriesChartTo
      },
      series: [{
        name: idioma.percentual,
        data: seriesChartTo
      }]
    })
  }


  //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o idioma
  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL
  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      idioma.categoriesChart = 3;
      idioma.percentual = 'Percentage'
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
          <div className="chart-type">
            <HighchartsReact highcharts={Highcharts} options={chartWhatsOptions} />
          </div>
        </div>

        <div className="chart-item">
          <h2>
            <FormattedMessage id="chart-where" />
          </h2>
          <div className="chart-type">
            <HighchartsReact highcharts={Highcharts} options={chartChartWhereOptions} />
          </div>
        </div>

        <div className="chart-item">
          <h2>
            <FormattedMessage id="chart-to" />
          </h2>
          <div className="chart-type">
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
