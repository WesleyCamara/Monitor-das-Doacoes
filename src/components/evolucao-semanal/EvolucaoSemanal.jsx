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



  useEffect(() => {
    if (props.valor.status === "ok") {
      seriesDoacoes = chartSeries(props.valor["Gráficos"], 2)
      seriesDoadores = chartSeries(props.valor["Gráficos"], 3)
      categories = chartCategories(props.valor["Gráficos"])
      updateSeries()
    }
  }, [props]);

  const chartSeries = (values, index) => {
    let final = []
    values.forEach((item) =>{
      if(item[0] !== "" && !isNaN(item[index]) ){
      final.push(Math.round(item[index]))
      }
    })
    return final
  }

  const chartCategories = (array) => {
    const categorias = []
    array.forEach( item => {
      const date = moment(item[1]).format('DD/MM')
      if (date !== "Invalid date"){
        categorias.push(date)
      }
    }) 
    console.log(categorias)
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
            return this.value.toLocaleString("pt-BR");
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
      name: 'Doações (em milhões)',
      data: ['']
    }, {
      color: "#4C87B1",
      name: 'Doadores (em milhares)',
      data: ['']
    }]

  });

  const updateSeries = () => {
    setChartOptions({
      xAxis: {
        categories: categories
      },
      series: [{
        data: seriesDoacoes
      }, {
        data:  seriesDoadores
      }]

    })
  
  }



  //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o idioma
  const idiomaUrl = window.location.href;
  let renderizaGrafico = null;
  if (idiomaUrl.includes("/en") === false) {
    renderizaGrafico = true;
  }

  return (
    <div className="container-setores">
      
      <h2 className="chart-title-setores">
        Monitor das Doações COVID-19 - Evolução Semanal
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
      <div>
        {/* <img className="square-shape2" src={squareShapes2} alt="imagem de fundo"/> */}
      </div>
    </div>
  );
};

export default EvolucaoSemanal;
