import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from 'moment';

import "./EvolucaoSemanal.css";
import { FormattedMessage } from "react-intl";

const EvolucaoSemanal = (props) => {
  let seriesDoacoes = []
  let seriesDoadores = []
  let categories = []

  // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar
  const idioma = {
    legendaDoacoes: 'Doações (em milhões)',
    legendaDoadores: 'Doadores (em milhares)',
    indiceDoacoes: 2,
    indiceDoadores: 3,
    localeString: "pt-BR",
  };



  useEffect(() => {
    if (props.valor.status === "ok") {
      seriesDoacoes = chartSeries(props.valor["Gráficos"], idioma.indiceDoacoes)
      seriesDoadores = chartSeries(props.valor["Gráficos"], idioma.indiceDoadores)
      categories = chartCategories(props.valor["Gráficos"])
      updateSeries()
    }
  }, [props]);

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
    return categorias
  }

  const [chartOptions, setChartOptions] = useState({
    title: {
      text: ''
    },
    credits: false,
    xAxis: {
      categories: [""]
    },
    yAxis: {
      labels: {
        formatter: function () {
          return this.value.toLocaleString(idioma.localeString);
        },
      },
      title: {
        text: false
      }
    },
    plotOptions: {
      line: {
        dataLabels: {

          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      color: "#AE1920",
      name: idioma.legendaDoacoes,
      data: ['']
    }, {
      color: "#4C87B1",
      name: idioma.legendaDoadores,
      data: ['']
    }]

  });

  const updateSeries = () => {
    setChartOptions({
      xAxis: {
        categories: categories
      },
      series: [{
        name: idioma.legendaDoacoes,
        data: seriesDoacoes
      }, {
        name: idioma.legendaDoadores,
        data: seriesDoadores
      }]

    })

  }



  //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o idioma
  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL
  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      idioma.legendaDoacoes = 'Donations (in millions)';
      idioma.legendaDoadores = 'Donors (in thousands)';
      idioma.indiceDoacoes = 8;
      idioma.localeString = "en-US";
    }
  };

  formatValue()
  return (

    <div className="container-setores">

      <h2 className="chart-title-setores">
        <FormattedMessage id="chart-weekly-evolution" />
      </h2>



      <div className="grafico">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
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

export default EvolucaoSemanal;
