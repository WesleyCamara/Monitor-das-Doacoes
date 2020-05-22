import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import './Graficos-indicadores.css'



const options = {
  chart: {
    type: "column",
    backgroundColor: "#F3F3F3",
    

  },
  colors: ["#4DB6AC"],
  title: {
    text: "",
  },
  xAxis: {
    type: "category",
    labels: {
      rotation: 0,

      style: {
        fontSize: "13px",
        fontFamily: "rubik, sans-serif",
        
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
    format: "{point.y:,.1f}",
    gridLineDashStyle: 'Dash',
    
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
        ["Itaú", 1247100000],
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

        // align: 'right',
        format: "{point.y:,.0f}", // one decimal
        y: 65, // 10 pixels down from the top
        style: {
          fontSize: "1em",
          fontFamily: "rubik, sans-serif",
          fontWeight: "400",
          textOutline: "none",
        },
      },
    },
  ],
};

function GraficoIndicadores() {
  return (
    <section className="section-grafico-container">
      <div className="grafico-indicadores">
      <div className="div-grafico">
        <h2 className="titulo">Empresas com mais doações</h2>
        <div className="grafico">
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="grafico-indicadores-botao">ver detalhes</div>
      </div>

      <div className="div-indicadores">
        <h2 className="titulo">Resumo</h2>

        <div className="indicadores-subitem">
          <div >
            <h3> Doações (mínimo R$3.000)</h3>
            <span className="span-h3">R$ 3.853.726.767</span>
          </div>

          <div className="indicadores-subitem-doadores">
            <p>
              Total de doadores <br />
              <span>210</span>
            </p>

            <p>
              Maior doador: Itaú <br />
              <span>R$ 1.127.100.000</span>
              <span>(32%)</span>
            </p>
          </div>
        </div>

        <div className="indicadores-subitem">
          <div >
            <h3>Capanhas Doações </h3>
            <span className="span-h3">R$ 278.275.247</span>
          </div>

          <div className="indicadores-subitem-doadores">
            <p>
              Total de doadores <br />
              <span>191.032</span>
            </p>

            <p>
              Maior Campanha: Na Luta contra a COVID-19 <br />
              <span>R$ 38.144.000</span>
              <span>(14%)</span>
            </p>
          </div>
        </div>

        <div className="indicadores-subitem">
          <div >
            <h3>Lives de Doações</h3> <br />
            <span className="span-h3">R$ 12.258.946</span>
          </div>

          <div className="indicadores-subitem-doadores">
            <p>
              Total de doadores <br />
              <span>191.032</span>
            </p>

            <p>
              Maior Live: Fome de Música (inclui Sandy&Junior)
              <br />
              <span>R$ 6.750.757</span>
              <span>(55%)</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default GraficoIndicadores;
