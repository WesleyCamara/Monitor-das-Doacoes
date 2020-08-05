import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./EvolucaoSemanal.css";
import { FormattedMessage } from "react-intl";

// import squareShapes2 from "../../assets/img/doacao-setores/square-shapes-2.svg";
// import setorBg from "../../assets/img/doacao-setores/setor-bg.svg";

const EvolucaoSemanal = (props) => {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ".",
    },
  });

  // useEffect(() => {
  //   if (props.valor.status === "ok") {
  //     updateGraficos();
  //     updateGraphic();
  //   }
  // }, [props]);

  const [chartOptions, setChartOptions] = useState({

    title: {
      text: 'Monitor das Doações COVID-19 - Evolução Semanal'
    },

    // subtitle: {
    //     text: ''
    // },

    xAxis: {
      categories: ["31/03", "11/04", "18/04", "25/04", "02/05",]
    },
    yAxis: {
      title: {
        text: ''
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
      data: [450, 1200, 2700, 3700, 3996]
    }, {
      color: "#4C87B1",
      name: 'Doadores (em milhares)',
      data: ['', '', 100, 154, 178]
    }]

  });



  //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o idioma
  const idiomaUrl = window.location.href;
  let renderizaGrafico = null;
  if (idiomaUrl.includes("/en") === false) {
    renderizaGrafico = true;
  }

  return (
    <div className="container-setores">
      <div>
        {/* <img className="img-fundo-setor" src={setorBg} alt="imagem de fundo"/> */}
      </div>
      <h2 className="chart-title-setores">
        {/* <FormattedMessage id="chart-sectors-chart" /> */}
        Monitor das Doações COVID-19 - Evolução Semanal
      </h2>


      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      {/* <div id="doacao-setores">
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
      </div> */}

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
