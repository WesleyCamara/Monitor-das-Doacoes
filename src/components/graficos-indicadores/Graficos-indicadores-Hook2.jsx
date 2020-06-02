import React, { useState, useEffect } from "react";
import "./Graficos-indicadores.css";
import { FormattedMessage } from "react-intl";
import handMoney from "../../assets/img/graficos-indicadores/hand-money.png";

const GraficosIndicadores = (props) => {
  const [valores, setValores] = useState({
    total: 0,
    totalCampanhas: 0,
    maiorCampanha: 0,
    maiorLive: "",
    totalLives: 0,
    totalDoadores: 0,
    maiorDoador: "",
    maiorDoacao: 0,
    totalDoadoresCampanhas: 0,
  });

  // const [valoresTratados, setValoresTratados] = useState({

  // })

  useEffect(() => {
    if (props.valor.status == "ok" && valores.maiorCampanha == 0) {
      console.log("as props", props.valor["Consolidação"][3][1]);
      setValores({
        maiorDoador: filtraMaiorDoador(props.valor["Doações"]),
        maiorCampanha: filtraMaiorCampanha(props.valor["Campanhas"]),
        maiorLive: maiorLive(props.valor['Lives']),
        total: props.valor["Consolidação"][4][1],
        totalCampanhas: props.valor["Consolidação"][2][1],
        totalLives: props.valor["Consolidação"][3][1],
        totalDoadores: props.valor["Doações"].length - 2,
        
        totalDoadoresCampanhas: subtrai(
          props.valor["Consolidação"][6][1],
          valores.totalDoadores
        ),
        
      });

      console.log("maior live", maiorLive(props.valor['Lives']));
    }
  }, [props,valores.maiorCampanha]);

  // Formata o número com arredondamento
  const formatNumber = (number) => {
    let formattedNumber = Math.round(number).toLocaleString("pt-BR");
    return formattedNumber;
  };

  // retorna o maior doador
  const filtraMaiorDoador = (array) => {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item["Valor Anunciado"] > maiorDoacao &&
        item["Quem doa"] !== "Total"
      ) {
        maiorDoacao = item["Valor Anunciado"];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  };

  const filtraMaiorCampanha = (array) => {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item["Valor Doado"] > maiorDoacao &&
        item["Organizador (a) / Beneficiário (a)"] !== "Total" &&
        item["Organizador (a) / Beneficiário (a)"] !== "Campanhas + lives" &&
        item["Organizador (a) / Beneficiário (a)"] !== "Campanhas"
      ) {
        maiorDoacao = item["Valor Doado"];
        maiorDoador = item;
      }
    }
    console.log(maiorDoador)
    return maiorDoador;
  };

  const subtrai = (itemMaior, itemMenor) => {
    return itemMaior - itemMenor;
  };


  const maiorLive = (array) => {
    let maiorDoacao = 0;
    let maiorLive = [];

    for (let item of array) {
      if (
        item[5] > maiorDoacao &&
        item[1] !== "Artista / Projeto" &&
        item[2] !== "Total"
      ) {
        maiorDoacao = item[5];
        maiorLive = item;
      }
    }
    return maiorLive;
  }


  const  porcentagem = (parte, total) => {

    return Math.round((parte * 100) / total);
    
  }


  return (
    <>
      <section className="section-chart-container">
        <div className="chart-indicators">
          <div className="div-chart">
            <h2 className="chart-title">
              <FormattedMessage id="chart-indicators-chart" />
            </h2>
            <div className="chart">
              {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
            </div>

            <a
              href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="chart-indicators-button">
                <FormattedMessage id="chart-indicators-button" />
              </div>
            </a>
          </div>

          <div className="div-indicators">
            <h2 className="indicators-title">
              <FormattedMessage id="indicators-title" />
            </h2>

            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="indicators-donations" />
                  </h3>
                  <h3>
                    <span className="span-h3">R$ {formatNumber(valores.total)} </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>{formatNumber(valores.totalDoadores)}</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-donor" />:{valores.maiorDoador["Quem doa"]}
                    </p>
                    <p>
                      <span className="valor-doado">
                        R$ {formatNumber(valores.maiorDoador["Valor Anunciado"])}
                      </span>
                      <span>({ porcentagem(Number(valores.maiorDoador["Valor Anunciado"]), Number(valores.total ))})%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="linhas"></div>
            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="donations-campaigns" />
                  </h3>
                  <h3>
                    <span className="span-h3">R$ {formatNumber(valores.totalCampanhas)}</span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>{formatNumber(valores.totalDoadoresCampanhas)}</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-campaign" />: {valores.maiorCampanha['Campanhas']}
                    </p>
                    <p>
                      <span className="valor-doado">R${formatNumber(valores.maiorCampanha['Valor Doado'])}</span>
                      <span>({ porcentagem(Number(valores.maiorCampanha['Valor Doado']), Number(valores.totalCampanhas ))})%</span>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="linhas"></div>
            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="donations-lives" />
                  </h3>
                  <h3>
                    <span className="span-h3">R$ {formatNumber(valores.totalLives)}</span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="biggest-donor">
                      <FormattedMessage id="biggest-live" />: {valores.maiorLive[1]}
                    </p>

                    <p>
                      <span>R$ {formatNumber(valores.maiorLive[5])}</span>
                      <span>({ porcentagem(Number(valores.maiorLive[5]), Number(valores.totalLives))})%</span>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GraficosIndicadores;
