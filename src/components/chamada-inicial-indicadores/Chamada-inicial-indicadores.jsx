import React, { useState, useEffect } from "react";
import "./Chamada-inicial-indicadores.css";
import money from "../../assets/img/chamada-inicial-indicadores/money-bill.svg";
import campaign from "../../assets/img/chamada-inicial-indicadores/money-campaign.svg";
import hand from "../../assets/img/chamada-inicial-indicadores/hand-holding-money.svg";
import nv2 from "../../assets/img/chamada-inicial-indicadores/Caminho49.svg";
import nv1 from "../../assets/img/chamada-inicial-indicadores/Caminho59.svg";
import centerImg from "../../assets/img/chamada-inicial-indicadores/Grupo1.svg";
import loading from "../../assets/img/chamada-inicial-indicadores/loading.svg";
import { FormattedMessage } from "react-intl";


const ChamadaInicialIndicadores = (props) => {
  //termos usados nos titulos da planilha
  const exclusionArray = ["Total Campanhas Offline", "Doadores", "Campanhas acima de 22 milhões não são somadas para evitar duplicidade de contagem de doadores", "", "Total s/ Grandes Campanhas Offline", "Total Geral", "Total Geral s/ Grandes Campanhas", "Total Geral Doadores", 
  "Total Campanhas Online", "Campanhas de Doação - Offline (mínimo 10 mil reais mobilizados)", "Campanhas"]

  // Guarda os valores "iniciais"
  const [valores, setValores] = useState({
    total: 0,
    totalDoadores: 0,
    totalSetor: "",
    totalCampanhas: "",
    maiorLive: "",
    maiorCampanha: 0,
    cidadeMaiorDoacao: "",
    totalGeralCampanhas: 0
  });

  // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar
  const moeda = {
    acessoIndiceTotal: 1,
    simbolo: "R$",
    localeString: "pt-BR",
    acessoTotalGeral: "Valor Captado"
  };

  // Alterna o loading entre visível ou não
  const [visible, setVisible] = useState({
    loading: { display: "block" },
    number: { display: "none" },
  });

  useEffect(() => {
    if (props.valor.status === "ok") {
      setValores({
        maiorCampanha: filtraMaiorCampanha(props.valor["Campanhas"]),
        total: props.valor["Consolidação"][3][moeda.acessoIndiceTotal],
        totalDoadores: props.valor["Consolidação"][5][1],
        totalSetor: props.valor["Consolidação"][8][0],
        maiorLive: maiorLive(props.valor["Lives"]),
        cidadeMaiorDoacao: cidadeMaisDoacoes(props.valor["Campanhas"]),
        totalGeralCampanhas: totalGeral(props.valor["Campanhas"]),
        totalCampanhas : totalCampanhas(props.valor["Campanhas"])
      });
      cidadeMaisDoacoes(props.valor["Campanhas"]);
      totalGeral(props.valor["Campanhas"], moeda.acessoTotalGeral)



      // Torna o loading invisivel e o número visível
      setVisible({
        loading: { display: "none" },
        number: { display: "block" },
      });
    }
  }, [props]);

  // Cria um nova array contendo somente o nome da cidade e a quantidade de doadores
  const cidadeMaisDoacoes = (array) => {
    let saida = [];
    for (let item of array) {
      if (item.Doadores / item.Doadores === 1 && item.Cidade !== "") {
        saida.push({
          cidade: item.Cidade,
          doadores: item.Doadores,
        });
      }
    }
    return somaItensCidades(saida);
  };

  // Soma e agrupa a quantidade de doadores de cada cidade
  const somaItensCidades = (array) => {
    // Separa as cidades
    let arrayCity = [];
    array.map((item) => {
      if (arrayCity.indexOf(item.cidade) === -1) {
        arrayCity.push(item.cidade);
      }
    });

    // Agrupa as doações por cidade
    let arrayComplete = [];
    arrayCity.map((city) => {
      const total = array.reduce(
        (total, data) =>
          data.cidade === city ? total + data.doadores : parseInt(total),
        0
      );
      arrayComplete.push({ cidade: city, doadores: total });
    });

    return filtraCidadeMaisDoacoes(arrayComplete);
  };

  // Filtra a cidade com mais doações
  const filtraCidadeMaisDoacoes = (array) => {
    let maiorDoacao = 0;
    let maiorCidade = [];

    for (let item of array) {
      if (item.doadores > maiorDoacao) {
        maiorDoacao = item.doadores;
        maiorCidade = item;
      }
    }

    return maiorCidade;
  };

  //  Encontra a live com maior valor de doação
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

  // Filtra a campanha com maior valor de doação
  const filtraMaiorCampanha = (array) => {
    let maiorDoacao = 0;
    let maiorDoador = [];
    for (let item of array) {
      if (
        item["Valor Captado"] > maiorDoacao &&
        !exclusionArray.includes(item["Organizador (a) / Beneficiário (a)"])
      ) {
        maiorDoacao = item["Valor Captado"];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  };

  const totalGeral = (donations) => {
    let total
    donations.forEach(item => {
      if (item["Organizador (a) / Beneficiário (a)"] === "Total Geral") {
        total = item
      }
    })
    return total[moeda.acessoTotalGeral]
  }

  const totalCampanhas = (geral) => {
    let total = 0
    geral.forEach(item => {
      if (!exclusionArray.includes(item.Campanhas)) {
        total++
      }
    }
    )
    return total
  }
  // Arredonda e formada o número de acordo com o idioma
  const formatNumber = (number) => {
    let formattedNumber = Math.round(number).toLocaleString(moeda.localeString);
    return formattedNumber;
  };

  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL
  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      moeda.acessoIndiceTotal = 2;
      moeda.simbolo = "$";
      moeda.localeString = "en-US";
      moeda.acessoTotalGeral = "in Dollars"
    }
  };


  return (
    <div id="container-chamada">
      {formatValue()}
      <section id="banner">
        {/*-----section-banner------*/}
        <div className="banner-container">
          {/*-----container-main------*/}
          <div id="banner-content">
            {/*-----div-to-center-items------*/}
            <div id="money">
              <div id="nvd">
                <img id="nv1" src={nv1} alt="nuvem" />
              </div>
              {/*-----doações-recebidas-----*/}
              <img id="doa" src={money} alt="quantidade doada" />
              {/*-----"doacoes"->receberá-dados-da-api-qtd-de--doações*/}
              <div id="doacoes" style={visible.number}>
                {moeda.simbolo} {formatNumber(valores.total)}
              </div>
              <div style={visible.loading}>
                <img src={loading} alt="imagem de loading" />
              </div>
              <h2>
                <FormattedMessage id="banner-title-donations" />
              </h2>
            </div>
            <div id="hand">
              <div id="nve">
                <img id="nv2" src={nv2} alt="nuvem" />
              </div>
              {/*-----doadores------*/}
              <img id="hand-p" src={hand} alt="doadores" />
              {/*-----"doadores"->receberá-dados-da-api-qtd-doadores----*/}
              <div id="doadores" style={visible.number}>
                {formatNumber(valores.totalDoadores)}
              </div>
              <div style={visible.loading}>
                <img src={loading} alt="imagem de loading" />
              </div>
              <h2>
                <FormattedMessage id="banner-title-donors" />
              </h2>
            </div>

            {/* Soma geral das campanhas  */}
            <div className="total-campanhas">
              <img src={campaign} alt="doadores" />
              <div id="money-campaign" style={visible.number}>
                {moeda.simbolo} {formatNumber(valores.totalGeralCampanhas)}
              </div>
              <div style={visible.loading}>
                <img src={loading} alt="imagem de loading" />
              </div>
              <h2>
                <FormattedMessage id="banner-title-campaigns" /> {valores.totalCampanhas}
                {" "}<FormattedMessage id="banner-title-campaigns2" />              </h2>
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
          <div className="dados">{valores.cidadeMaiorDoacao["cidade"]}</div>
        </div>
        <div className="section-container">
          <h4>
            <FormattedMessage id="card-title-campaign" />
          </h4>
          {/* -----"dados"->receberá-dados-da-api--campanha-c/-mais-doações- */}
          <div className="dados">{valores.maiorCampanha["Campanhas"]}</div>
        </div>
        <div className="section-container">
          <h4>
            <FormattedMessage id="card-title-live" />
          </h4>
          {/*-----"dados"->receberá-dados-da-api---live-c/-mais-doações------*/}
          <div className="dados">{valores.maiorLive[1]}</div>
        </div>
        <div></div>
      </section>
    </div>
  );
};
export default ChamadaInicialIndicadores;
