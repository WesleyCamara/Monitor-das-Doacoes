import React, { useState, useEffect } from "react";
import "./Graficos-indicadores.css";
import { FormattedMessage } from "react-intl";
import handMoney from "../../assets/img/graficos-indicadores/hand-money.png";



  const GraficosIndicadores = (props) => {
  const [count, setCount] = useState(0);
  var [valores, setValores] = useState({
    total: 0,
    totalCampanhas: 0,
    totalLives: 0,
    totalDoadores: 0,
    maiorDoador: ''
  })

  useEffect(() => {
    if(props.valor.status == 'ok'){
      console.log('as props', props.valor['Consolidação'][3][1])
      setValores({
        total : formatNumber(props.valor['Consolidação'][4][1]),
      totalCampanhas : formatNumber(props.valor['Consolidação'][2][1]),
      totalLives : formatNumber(props.valor['Consolidação'][3][1]),
      totalDoadores: props.valor['Doações'].length -2,
      maiorDoador: maiorDoador(props.valor['Doações'])
    })
    console.log(maiorDoador(props.valor['Doações']))
    console.log(valores.maiorDoador)

  }
  }, [props]);


    // Formata o número com arredondamento
    const formatNumber = (number) => {
      let formattedNumber = Math.round(number).toLocaleString('pt-BR');
      return formattedNumber;
    }


      // retorna o maior doador
  const maiorDoador = (array)=> {
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
  }






  return (<>
  <button onClick={() => setCount(count + 1)}>{count}</button>
   <section className="section-chart-container">
        <div className="chart-indicators">
          <div className="div-chart">
            <h2 className="chart-title">
              <FormattedMessage id="chart-indicators-chart" />
            </h2>
            <div className="chart">
              {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
            </div>

            <a href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137" target="_blank" rel="noopener noreferrer">
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
                    <span className="span-h3">R$ {valores.total} </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>{valores.totalDoadores}</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-donor" />: {valores.maiorDoador["Quem doa"]}
                 
                    </p>
                    <p>
                      <span className="valor-doado">
                        R$
                      </span>
                      <span>(00%)</span>
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
                    <span className="span-h3">
                      R$ {valores.totalCampanhas}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span></span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-campaign" />:
                  
                    </p>
                    <p>
                      <span className="valor-doado">
                        R$
                      </span>
                      <span>(00%)</span>
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
                    <span className="span-h3">R$ {valores.totalLives}</span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="biggest-donor">
                      <FormattedMessage id="biggest-live" />:
    
                    </p>

                    <p>
                      <span>R$ </span>
                      <span>(00%)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  
  
  </>)
};
export default GraficosIndicadores