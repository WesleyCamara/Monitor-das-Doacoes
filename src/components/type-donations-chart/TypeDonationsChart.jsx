import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./TypeDonationsChart.css";
import { FormattedMessage } from "react-intl";

const TypeDonationsChart = (props) => {
  let seriesChartWhats = []
  let categoriesChartWhats = []

  let categoriesChartWhere = []
  let seriesChartWhere = []

  let categoriesChartTo = []
  let seriesChartTo = []

  // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar
  const language = {
    categoriesChart: 0,
    percentual: 'Percentual',
    indexDonations: 2,
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
      categoriesChartWhats = chartCategories(props.valor["A"], language.categoriesChart)
      seriesChartWhats = chartSeries(props.valor["A"], language.indexDonations)

      categoriesChartWhere = chartCategories(props.valor["B"], language.categoriesChart)
      seriesChartWhere = chartSeries(props.valor["B"], language.indexDonations)

      categoriesChartTo = chartCategories(props.valor["C"], language.categoriesChart)
      seriesChartTo = chartSeries(props.valor["C"], language.indexDonations)

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

        formatter: function () {
          let item = this.value,
            len = item.length;
          if (len > 11) {
            item = item.slice(0, 11) + "<br/>" + item.slice(11, len);
          }

          if (len > 11) {
            item = item.slice(0, 50) + "...";
          }

          return item;
        },

        style: {
          fontSize: "0.6em",
          fontFamily: "rubik, sans-serif",
          fontWeight: "400",
          width: 60,
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
        align: 'center',
        reserveSpace: true,

        formatter: function () {
          let item = this.value,
            len = item.length;
          if (len > 15) {
            item = item.slice(0, 21) + "<br/>" + item.slice(21, len);
          }
          if (len > 30) {
            item = item.slice(0, 39) + "...";
          }
          return item;
        },

        style: {
          fontSize: "0.6em",
          fontFamily: "rubik, sans-serif",
          fontWeight: "400",
          width: 60,
          padding: 0,
          wordBreak: "breack-all",
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
        name: language.percentual,
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
          width: 60,
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
        name: language.percentual,
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
        name: language.percentual,
        data: seriesChartWhats
      }]
    })

    setChartWhereOptions({
      xAxis: {
        categories: categoriesChartWhere
      },
      series: [{
        name: language.percentual,
        data: seriesChartWhere
      }]
    })

    setChartToOptions({
      xAxis: {
        categories: categoriesChartTo
      },
      series: [{
        name: language.percentual,
        data: seriesChartTo
      }]
    })
  }


  //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o language
  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL
  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      language.categoriesChart = 3;
      language.percentual = 'Percentage'
      language.localeString = "en-US";
    }
  };

  formatValue()
  return (

    <div className="container-sectors">

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


      <a className="estiloBtn"
        href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <button > */}
          <FormattedMessage id="chart-indicators-button" />
        {/* </button> */}
      </a>

    </div>
  );
};

export default TypeDonationsChart;
