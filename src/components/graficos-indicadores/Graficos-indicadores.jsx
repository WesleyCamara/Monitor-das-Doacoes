import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// categories: [
//   'Itaú',
//   'Vale',
//   'Cogna',
//   'AMBEV',
//   "Rede D'or",
//   'Bradesco, Itaú e Santander',
//   'Alcoa',
//   'Nestlé',
//   'iFood',
//   'BRF',
//   'Outros Doadores (200)'
// ]

const options = {
  chart: {
    type: "column",
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
        fontFamily: "Verdana, sans-serif",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
    format: "R${point.y:.2f}",
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat: "Population in 2017: <b>{point.y:.1f} millions</b>",
  },
  series: [
    {
      name: "Population",
      data: [
        ["Shanghai", 5245564.2],
        ["Beijing", 3245564.2],
        ["Karachi", 7245564.2],
        ["Shenzhen", 1245564.2],
        ["Guangzhou", 5245564.21],
        ["Istanbul", 2045564.2],
        ["Mumbai", 15242422.4],
        ["Moscow", 12245245.2],
        ["São Paulo", 12542522.0],
        ["Delhi", 1252421.7],
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: "#222222",
        // align: 'right',
        format: "R${point.y:.2f}", // one decimal
        y: 65, // 10 pixels down from the top
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
  ],
};

function GraficoIndicadores() {
  return (
    <section>
      <div>
        <h2>Empresas com mais doações</h2>

        <HighchartsReact highcharts={Highcharts} options={options} />

        <div> Gráfico</div>
        <div>ver detalhes</div>
      </div>

      <div>
        <h2>Resumo</h2>

        <div>
          <div>
            <h3> Doações (mínimo R$3.000)</h3>
            <span>R$ 3.853.726.767</span>
          </div>

          <div>
            <p>
              Total de doadores <br />
              <span>210</span>
            </p>

            <p>
              Maior doador: <span>Itaú</span> <br />
              R$<span>1.127.100.000</span>
              <span>(32%)</span>
            </p>
          </div>
        </div>

        <div>
          <div>
            <h3>Capanhas Doações </h3>
            <span>R$ 278.275.247</span>
          </div>

          <div>
            <p>
              Total de doadores <br />
              <span>191.032</span>
            </p>

            <p>
              Maior Campanha: <span>Na Luta contra a COVID-19</span> <br />
              R$<span>38.144.000</span>
              <span>(14%)</span>
            </p>
          </div>
        </div>

        <div>
          <div>
            <h3>Lives de Doações</h3> <br />
            <span>R$ 12.258.946</span>
          </div>

          <div>
            <p>
              Total de doadores <br />
              <span>191.032</span>
            </p>

            <p>
              Maior Live: <span>Fome de Música (inclui Sandy&Junior)</span>{" "}
              <br />
              R$<span>6.750.757</span>
              <span>(55%)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GraficoIndicadores;
