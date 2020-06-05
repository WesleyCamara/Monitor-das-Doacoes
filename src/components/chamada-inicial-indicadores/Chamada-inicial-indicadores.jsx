import React, { useState, useEffect } from "react";
//import React from "react";
import "./Chamada-inicial-indicadores.css";
import money from "../../assets/img/chamada-inicial-indicadores/money-bill.png";
import hand from "../../assets/img/chamada-inicial-indicadores/hand-holding-money.png";
import centerImg from "../../assets/img/chamada-inicial-indicadores/center-img.png";
import { FormattedMessage } from "react-intl";
//import api from "../../services/API";

const ChamadaInicialIndicadores = (props) => {
  console.log(props.valor);

  const [valores, setValores] = useState({
    total: 0,
    totalDoadores: 0,
    totalSetor: "",
    maiorLive: "",
    maiorCampanha: 0,
    //cidadeMaiorDoacao: 0,
  });

  useEffect(() => {
    if (props.valor.status === "ok") {
      setValores({
        maiorCampanha: filtraMaiorCampanha(props.valor["Campanhas"]),
        total: props.valor["Consolidação"][4][1],
        totalDoadores: props.valor["Consolidação"][6][1],
        totalSetor: props.valor["Consolidação"][9][0],
        maiorLive: maiorLive(props.valor["Lives"]),
        //cidadeMaiorDoacao: props.valor["Campanhas"][0][0],
      });
    }
  }, [props]);

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
    return maiorDoador;
  };

  const formatNumber = (number) => {
    let formattedNumber = Math.round(number).toLocaleString("pt-BR");
    return formattedNumber;
  };

  return (
    <div id="container-chamada">
      <section id="banner">
        {/*-----section-banner------*/}
        <div className="banner-container">
          {/*-----container-main------*/}
          <div id="banner-content">
            {/*-----div-to-center-items------*/}
            <div id="money">
              {/*-----doações-recebidas-----*/}
              <img src={money} alt="quantidade doada" />
              {/*-----"doacoes"->receberá-dados-da-api-qtd-de--doações*/}
              <div id="doacoes">{formatNumber(valores.total)}</div>
              <h2>
                <FormattedMessage id="banner-title-donations" />
              </h2>
            </div>
            <div id="hand">
              {/*-----doadores------*/}
              <img src={hand} alt="doadores" />
              {/*-----"doadores"->receberá-dados-da-api-qtd-doadores----*/}
              <div id="doadores">{formatNumber(valores.totalDoadores)}</div>
              <h2>
                <FormattedMessage id="banner-title-donors" />
              </h2>
            </div>
          </div>
          <div id="img-center">
            {/*-----div-to-center-img------*/}
            <img src={centerImg} alt="imagen principal" />
          </div>
        </div>
      </section>
      <section className="container">
        {/*-----section-cards-----*/}
        <div className="section-container">
          <h4>
            <FormattedMessage id="card-title-sector" />
          </h4>
          {/*-----"dados"->receberá-dados-da-api-setor-c/-mais-doações--*/}
          <div className="dados">{valores.totalSetor}</div>
        </div>
        <div className="section-container">
          <h4>
            <FormattedMessage id="card-title-city" />
          </h4>
          {/*-----"dados"->receberá-dados-da-api-cidade-c/-mais-doações--*/}
          {/* <div className="dados">{console.log(Object.values(props.valor))}</div> */}
        </div>
        <div className="section-container">
          <h4>
            <FormattedMessage id="card-title-campaign" />
          </h4>
          {/*-----"dados"->receberá-dados-da-api--campanha-c/-mais-doações-*/}
          <div className="dados">{valores.maiorCampanha["Campanhas"]}</div>
        </div>
        <div className="section-container">
          <h4>
            <FormattedMessage id="card-title-live" />
          </h4>
          {/*-----"dados"->receberá-dados-da-api---live-c/-mais-doações------*/}
          <div className="dados">
            São Paulo
            <br />
            SP
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};
export default ChamadaInicialIndicadores;
