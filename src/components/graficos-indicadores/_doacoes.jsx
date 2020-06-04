import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import './Blocoinfo.css';


const Blocoinfo = (props) => {

//   Highcharts.setOptions({
//     lang: {
//       thousandsSep: ".",
//     },
//   });

//   const [visible, setVisible] = useState({
//     visibleStyle: {opacity: 0},
// })

  // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar 
//   const moeda = {
//     valorAnunciado : "Valor Anunciado",
//     valorDoado: "Valor Doado",
//     acessoIndiceTotal: 1,
//     acessoIndiceLives: 5,
//     simbolo: "R$",
//     valorDoadoLabel: "Valor doado"
//   }


  // Possui os valores iniciais de estado, serão atualizados quando receber as props pela API 
  const [valores, setValores] = useState({
    total: 0,
    // totalCampanhas: 0,
    // maiorCampanha: 0,
    // maiorLive: "",
    // totalLives: 0,
    // totalDoadores: 0,
    // maiorDoador: "",
    // maiorDoacao: 0,
    // totalDoadoresCampanhas: 0,
    // doacoesOrdenadas: [],
  });

  // Atualiza os dados que serão tratados, somente quando recebe os valores das props
  useEffect(() => {
    if (props.valor.status === "ok") {
      setValores({
        total: props.valor["Consolidação"][4][1],

      });
      

    }
  }, [props]);

//   // Se a array com os valores para o gráfico estiver pronta, chama a atualização dele
//   useEffect(() => {
//     if (
//       valores.doacoesOrdenadas.length > 0 &&
//       valores.doacoesOrdenadas[0].doador.length > 0
//     ) {
//       updateSeries();

//     }
//   }, [valores.doacoesOrdenadas]);

//   // Formata o número com arredondamento e adiciona os pontos nos milhares
//   const formatNumber = (number) => {
//     let formattedNumber = Math.round(number).toLocaleString("pt-BR");
//     return formattedNumber;
//   };

//   // retorna o maior doador
//   const filtraMaiorDoador = (array) => {
//     let maiorDoacao = 0;
//     let maiorDoador = [];

//     for (let item of array) {
//       if (
//         item[moeda.valorAnunciado] > maiorDoacao &&
//         item["Quem doa"] !== "Total"
//       ) {
//         maiorDoacao = item[moeda.valorAnunciado];
//         maiorDoador = item;
//       }
//     }
//     return maiorDoador;
//   };

//   // filtra a campanha com maior arrecadação
//   const filtraMaiorCampanha = (array) => {
//     let maiorDoacao = 0;
//     let maiorDoador = [];
//     for (let item of array) {
//       if (
//         item["Valor Doado"] > maiorDoacao &&
//         item["Organizador (a) / Beneficiário (a)"] !== "Total" &&
//         item["Organizador (a) / Beneficiário (a)"] !== "Campanhas + lives" &&
//         item["Organizador (a) / Beneficiário (a)"] !== "Campanhas"
//       ) {
//         maiorDoacao = item["Valor Doado"];
//         maiorDoador = item;
//       }
//     }
//     return maiorDoador;
//   };

//   const subtrai = (itemMaior, itemMenor) => {
//     return itemMaior - itemMenor;
//   };

//   // filtra a live com maior arrecadação
//   const maiorLive = (array) => {
//     let maiorDoacao = 0;
//     let maiorLive = [];

//     for (let item of array) {
//       if (
//         item[5] > maiorDoacao &&
//         item[1] !== "Artista / Projeto" &&
//         item[2] !== "Total"
//       ) {
//         maiorDoacao = item[5];
//         maiorLive = item;
//       }
//     }
//     return maiorLive;
//   };

//   // Calcula a porcentagem de uma valor sobre o outro
//   const porcentagem = (parte, total) => {
//     return Math.round((parte * 100) / total);
//   };

//   // Ordena as doações pelo maior valor e retorna as 11 maiores
//   const ordenaDoacoes = (doacoes) => {
//     let maioresDoacoes = [];

//     let saida = doacoes.sort(function (a, b) {
//       return b[moeda.valorAnunciado] - a[moeda.valorAnunciado];
//     });

//     for (let item = 2; item < 13; item++) {
//       maioresDoacoes.push({
//         doador: saida[item]["Quem doa"],
//         valorDoado: saida[item][moeda.valorAnunciado],
//       });
//     }


//     return maioresDoacoes;
//   };

//   // Opções do gráfico
//   const [chartOptions, setChartOptions] = useState({
//     chart: {
//       type: "column",
//       backgroundColor: "#F3F3F3",
//       height: (92) + '%'
//     },
//     colors: ["#4DB6AC"],
//     title: {
//       text: "",
//     },
//     plotOptions: {
//       series: {
//         groupPadding: 0,
//         borderColor: "none",
//       },
//     },
//     xAxis: {
//       type: "category",
//       lineWidth: 1,
//       lineColor: "#707070",
//       labels: {
//         rotation: 0,
//         style: {
//           fontSize: "12px",
//           fontFamily: "rubik, sans-serif",
//           width: 9,
//           // textOverflow: "auto",
//         },
//       },
//     },
//     yAxis: {
//       min: 0,
//       title: {
//         text: "",
//       },

//       gridLineDashStyle: "Dash",
//       lineWidth: 2,
//       lineColor: "#222222",
//       labels: {
//         rotation: 0,
//         style: {
//           fontSize: "12px",
//           fontFamily: "rubik, sans-serif",
//           width: 9,
//           // textOverflow: "auto",
//         },
//         formatter: function () {
//           return  this.value.toLocaleString("pt-BR")
//       }
//       },
//     },
//     legend: {
//       enabled: false,
//     },
//     tooltip: {
//       enable: false,
//     },

//     series: [
//       {
//         name: moeda.valorDoadoLabel,
//         data: [],

//         dataLabels: {
//           enabled: true,
//           rotation: -90,
//           color: "#222222",
//           y: 50, // 10 pixels down from the top
//           style: {
//             fontSize: "1.25em",
//             fontFamily: "rubik, sans-serif",
//             fontWeight: "400",
//             textOutline: "none",
//           },
//         },
//       },
//     ],
//   });

//   // Atualiza as series do gráfico, é alimentado pela const doacoesOrdenadas e chamado quando essa const está pronta
//   const updateSeries = () => {
//     setChartOptions({
//       series: [
//         {
//           data: [
//             [
//               valores.doacoesOrdenadas[0]["doador"],
//               Math.round(valores.doacoesOrdenadas[0]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[1]["doador"],
//               Math.round(valores.doacoesOrdenadas[1]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[2]["doador"],
//               Math.round(valores.doacoesOrdenadas[2]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[3]["doador"],
//               Math.round(valores.doacoesOrdenadas[3]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[4]["doador"],
//               Math.round(valores.doacoesOrdenadas[4]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[5]["doador"],
//               Math.round(valores.doacoesOrdenadas[5]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[6]["doador"],
//               Math.round(valores.doacoesOrdenadas[6]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[7]["doador"],
//               Math.round(valores.doacoesOrdenadas[7]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[8]["doador"],
//               Math.round(valores.doacoesOrdenadas[8]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[9]["doador"],
//               Math.round(valores.doacoesOrdenadas[9]["valorDoado"]),
//             ],
//             [
//               valores.doacoesOrdenadas[10]["doador"],
//               Math.round(valores.doacoesOrdenadas[10]["valorDoado"]),
//             ],
//           ],
//         },
//       ],
//     });
//   };

  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL 
//   const formatValue = () => {
//     const url_atual = window.location.pathname;
//     if (url_atual !== "/pt") {
//       moeda.valorAnunciado = "in Dollars"
//       moeda.valorDoado = "in Dollars"
//       moeda.acessoIndiceTotal = 2
//       moeda.acessoIndiceLives = 6
//       moeda.simbolo = "$"
//       moeda.valorDoadoLabel = "Donated amount"
//     } 
 
//   };

  return (
    
    <>
  <div className="container-bloco-info">
                        <div className="blocoinfo">
                            <div className="container-partesuperior">
                                <div className="campanha">
                                    <h1>Campanha de Doação:</h1>
                                    <p><FormattedMessage id="paragrafo-exemplo" /></p>
                                </div>
                                <div className="totaldoado">
                                    <h1>R$  {valores.total}</h1>
                                </div>
                                <div className="informacao">
                                    <h3>São 295 campanhas - mínimo 10 mil reais - e lives atualmente mapeadas.<br />
                                    Clique <a href='https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0' target="_blank">AQUI</a> para conhecê-las e acessar os links</h3>
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};
export default Blocoinfo;
