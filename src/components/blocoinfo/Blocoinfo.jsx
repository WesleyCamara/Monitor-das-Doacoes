import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import "./Blocoinfo.css";

const Blocoinfo = (props) => {
  const moeda = {
    acessoIndiceTotal: 1,
    simbolo: "R$",
  };

  // Possui os valores iniciais de estado, serão atualizados quando receber as props pela API
  const [valores, setValores] = useState({
    total: 0,
    campanhas: 0,
    totalCampanhas: 0,
  });

  // Atualiza os dados que serão tratados, somente quando recebe os valores das props
  useEffect(() => {
    if (props.valor.status === "ok") {
      setValores({
        total: props.valor["Consolidação"][4][moeda.acessoIndiceTotal],
        campanhas: props.valor["Campanhas"],
        totalCampanhas:
          totalCampanhas(props.valor["Campanhas"]) +
          totalLives(props.valor["Lives"]),
      });
    }
  }, [props, valores.campanhas]);

  const formatNumber = (number) => {
    let formattedNumber = Math.round(number).toLocaleString("pt-BR");
    return formattedNumber;
  };

  //  Retorna a quantidade de campanhas, filtrando da Array
  const totalCampanhas = (array) => {
    let total = 0;
    for (let item of array) {
      // Retorna chegar no indice onde começam a apararecer as lives
      if (item.Campanhas === "Lives") {
        break;
      }
      // filtra retirando
      if (
        item.Campanhas.length !== 0 &&
        item.Campanhas !== "valor" &&
        !item.Campanhas.includes("Campanhas")
      ) {
        total++;
      }
    }
    return total;
  };

  //  Retorna a quantidade de Lives, filtrando da Array
  const totalLives = (array) => {
    let contador = 0;
    for (let item of array) {
      if (item[0] / item[0] === 1) {
        ++contador;
      }
    }
    console.log("valor final", contador);
    return contador;
  };

  // Altera os parametros quando o site estiver em ingles, os dados são buscados na URL
  const formatValue = () => {
    const url_atual = window.location.pathname;
    if (url_atual !== "/pt") {
      moeda.valorAnunciado = "in Dollars";
      moeda.valorDoado = "in Dollars";
      moeda.acessoIndiceTotal = 2;
      moeda.acessoIndiceLives = 6;
      moeda.simbolo = "$";
      moeda.valorDoadoLabel = "Donated amount";
    }
  };

  return (
    <>
      {formatValue()}
      <div className="container-bloco-info">
        <div className="blocoinfo">
          <div className="container-partesuperior">
            <div className="campanha">
              <h1>Campanha de Doação:</h1>
              <p></p>
            </div>
            <div className="totaldoado">
              <h1>
                {" "}
                {moeda.simbolo} {formatNumber(valores.total)}
              </h1>
            </div>
            <div className="informacao">
              <h3>
                São {valores.totalCampanhas} campanhas - mínimo 10 mil reais - e
                lives atualmente mapeadas.
                <br />
                Clique{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0"
                  target="_blank"
                >
                  AQUI
                </a>{" "}
                para conhecê-las e acessar os links
              </h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blocoinfo;
