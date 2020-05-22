import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Graficos-indicadores.css";
import handMoney from '../../assets/img/graficos-indicadores/hand-money.png';

Highcharts.setOptions({
  lang: {
    thousandsSep: ".",
  },
});

const options = {
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
      borderColor: 'none'
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
          <div><img className="imagem-mao-dinheiro" src={handMoney} /></div>
            <div>
           <div>
              <h3>Doações (mínimo R$3.000) </h3>
              <h3>
                <span className="span-h3">R$ 3.853.726.767</span>
              </h3>
            </div>

            <div className="indicadores-subitem-doadores">
              <div>
                <p className="total-doadores">Total de doadores</p>
                <p>
                  <span>210</span>
                </p>
              </div>

              <div className="maior-doador">
                <p>Maior doador: Itaú</p>
                <p >
                  <span className="valor-doado">R$ 1.247.100.000</span>
                  <span>(32%)</span>
                </p>
              </div>
            </div>
            </div>
          </div>
          <div className="linhas"></div>
          <div className="indicadores-subitem" >
          <div><img className="imagem-mao-dinheiro" src={handMoney} /></div>
            <div>
           <div>
              <h3>Capanhas Doações </h3>
              <h3>
                <span className="span-h3">R$ 278.275.247</span>
              </h3>
            </div>

            <div className="indicadores-subitem-doadores">
              <div>
                <p className="total-doadores">Total de doadores</p>
                <p>
                  <span>191.032</span>
                </p>
              </div>

              <div className="maior-doador">
                <p>Maior Campanha: Na Luta contra a COVID-19</p>
                <p>
                  <span className="valor-doado">R$ 38.144.000</span>
                  <span>(14%)</span>
                </p>
              </div>
            </div>
            </div>
          </div>
    <div className="linhas"></div>
          <div className="indicadores-subitem">
          <div><img className="imagem-mao-dinheiro" src={handMoney} /></div>
          <div>
            <div>
              <h3>Lives de Doações</h3>
              <h3>
                <span className="span-h3">R$ 12.258.946</span>
              </h3>
            </div>

            <div className="indicadores-subitem-doadores">


              <div>
                <p className="maior-doador">Maior Live: Fome de Música (inclui Sandy&Junior) </p>

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

export default GraficoIndicadores;
