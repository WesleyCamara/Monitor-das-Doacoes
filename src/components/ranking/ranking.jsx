import React, { useState, useEffect } from "react";

import './ranking.css'

import { FormattedMessage } from "react-intl";

const Ranking = (props) => {

  const exclusionArray = ["Total Campanhas Offline", "Doadores", "Campanhas acima de 22 milhões não são somadas para evitar duplicidade de contagem de doadores", "", "Total s/ Grandes Campanhas Offline", "Total Geral", "Total Geral s/ Grandes Campanhas", "Total Geral Doadores",
    "Total Campanhas Online", "Campanhas de Doação - Offline (mínimo 10 mil reais mobilizados)", "Campanhas"]

  const [values, setValues] = useState({
    doacoes: [],
    doadores: []
  });

  useEffect(() => {
    if (props.valor.status === "ok") {
      // maiorArrecadacao(props.valor.Campanhas)

      setValues({
        ...values,
        doacoes: ordenaMaiorArrecadacao(props.valor.Campanhas),
        doadores: ordenaMaisDoadores(props.valor.Campanhas)
      })

    }
  }, [props]);


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

  return <>
    <section className="ranking-container">
      <div className="campanhas-arrecadacao">
        <table >
          <thead>
            <tr className="cabecalho">
              <td>Campanhas que mais Arrecadaram</td>
              <td>Valor</td>
            </tr>
          </thead>

          <tbody>
            {values.doacoes.map(campanha => (
              <tr className="tabela-linha">
                <td key={campanha.campanha}>{campanha.campanha}</td>
                <td key={campanha.valorDoado}>{"R$ "}{Math.round(campanha.valorDoado).toLocaleString("pt-BR")}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="campanhas-doadores">
        <table >
          <thead>
          <tr className="cabecalho">
              <td>Campanhas com mais Doadores/as</td>
              <td>Doadores/as</td>
            </tr>
          </thead>

          <tbody>
            {values.doadores.map(campanha => (
              <tr className="tabela-linha">
                <td key={campanha.campanha}>{campanha.campanha}</td>
                <td key={campanha.doadores}>{campanha.doadores.toLocaleString("pt-BR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  </>

}

export default Ranking
