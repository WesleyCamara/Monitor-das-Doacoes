import React, { useState, useEffect } from "react";

import './ranking.css'

import { FormattedMessage } from "react-intl";

const Ranking = (props) => {

    // A const possui os valores iniciais que servirão de referencia para mudar os valores para dolar
    const [idioma, setIdioma] = useState({
      valorDoado: "valorDoado",
      localeString: "pt-BR",
      moeda: "R$ "
    });

  const exclusionArray = ["Total Campanhas Offline", "Doadores", "Campanhas acima de 22 milhões não são somadas para evitar duplicidade de contagem de doadores", "", "Total s/ Grandes Campanhas Offline", "Total Geral", "Total Geral s/ Grandes Campanhas", "Total Geral Doadores",
    "Total Campanhas Online", "Campanhas de Doação - Offline (mínimo 10 mil reais mobilizados)", "Campanhas"]

  const [values, setValues] = useState({
    doacoes: [],
    doadores: []
  });

  useEffect(() => {
    if (props.valor.status === "ok") {
      setValues({
        ...values,
        doacoes: ordenaMaiorArrecadacao(props.valor.Campanhas),
        doadores: ordenaMaisDoadores(props.valor.Campanhas)
      })
    }
  }, [props]);

  useEffect(() => {
    if (props.valor.status === "ok") {
      formatValue()
    }
  }, []);


  const ordenaMaiorArrecadacao = (doacoes) => {
    let maioresDoacoes = [];
    let campanhasFiltradas = []

    doacoes.forEach(item => {
      if (!exclusionArray.includes(item["Valor Captado"]) &&
        !exclusionArray.includes(item["Campanhas"])) {
        campanhasFiltradas.push(item)
      }
    })

    let saida = campanhasFiltradas.sort(function (a, b) {
      return b["Valor Captado"] - a["Valor Captado"];
    });

    for (let item = 0; item < 10; item++) {
      maioresDoacoes.push({
        campanha: saida[item]["Campanhas"],
        valorDoado: saida[item]["Valor Captado"],
        valorDoadoDolar: saida[item]["in Dollars"]
      });
    }
    return maioresDoacoes;
  };

  const ordenaMaisDoadores = (doacoes) => {
    let maioresDoacoes = [];
    let campanhasFiltradas = []

    doacoes.forEach(item => {
      if (!exclusionArray.includes(item["Valor Captado"]) &&
        !exclusionArray.includes(item["Campanhas"])) {
        campanhasFiltradas.push(item)
      }
    })

    let saida = campanhasFiltradas.sort(function (a, b) {
      return b["Doadores"] - a["Doadores"];
    });

    for (let item = 0; item < 10; item++) {
      maioresDoacoes.push({
        campanha: saida[item]["Campanhas"],
        doadores: saida[item]["Doadores"],
      });
    }
    return maioresDoacoes;
  };

    //   Verifica o idima do site de acordo com a URL, depois altera as informações do gráfico de acordo com o idioma
  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL
  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      setIdioma({
        valorDoado: 'valorDoadoDolar',
        localeString: "en-US",
        moeda: "$ "
      })
    }
  };

  return <>
    <section className="ranking-container">
      <div className="campanhas-arrecadacao">
        <table >
          <thead>
            <tr className="cabecalho">
              <td><FormattedMessage id="biggest-campaigns" />
              </td>
              <td><FormattedMessage id="raised" />
              </td>
            </tr>
          </thead>

          <tbody>
            {values.doacoes.map(campanha => (
              <tr key={campanha.campanha + campanha.valorDoado} className="tabela-linha">
                <td >{campanha.campanha}</td>
                <td >{idioma.moeda}{Math.round(campanha[idioma.valorDoado]).toLocaleString(idioma.localeString)}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="campanhas-doadores">
        <table >
          <thead>
            <tr className="cabecalho">
              <td><FormattedMessage id="campaigns-donors" />
              </td>
              <td><FormattedMessage id="donors" />
              </td>
            </tr>
          </thead>

          <tbody>
            {values.doadores.map(campanha => (
              <tr key={campanha.campanha + campanha.doadores} className="tabela-linha">
                <td >{campanha.campanha}</td>
                <td >{campanha.doadores.toLocaleString(idioma.localeString)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  </>

}

export default Ranking
