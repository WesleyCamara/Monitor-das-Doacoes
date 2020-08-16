import React from 'react';
import { FormattedMessage } from "react-intl";
import "../imprensa/Imprensa.css";

// import styled from 'styled-components';

// const Animacao = styled.div `
//   transition: opacity 10s;
//   opacity: ${({ isVisible }) => (isVisible) ? 1 : 0};
//   width: 80%;
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;
// const Teste = styled.div `
//   transition: opacity 10s;
//   opacity: ${({ teste }) => (teste) ? 1 : 0};
// `;

const Imprensa = ({valor}) => {

  const [materia, setMateria] = React.useState("");
  const [contador, setContador] = React.useState(8);
  // const [lista, setLista] = React.useState("");

  React.useEffect(() => {
    setMateria([
      dados(valor)
    ])
  }, [valor]);

  const dados = (valor) => {
    let saidaDados = [];
    valor && valor.map ((materia) => {
      saidaDados.push({
        titulo: materia["1"],
        veiculo: materia["2"],
        link: materia["4"],
      });
    })
    return saidaDados.reverse();
  } 

  console.log("Materia", materia["0"]);

  let listaObject = [];
  

  materia["0"] && materia["0"].map ((valor) => {
    if (listaObject.length < contador) { 
    listaObject.push({
      titulo: valor.titulo,
      veiculo: valor.veiculo,
      link: valor.link
    })
  }})

  let lista = []

  
  for (var value of listaObject) {
    lista = 
    listaObject && listaObject.map ((valor, index) => (
      <div key={index}>
      
      <a href={valor.link} target="_blank">
      <div className="list__item">
      
      <p>{valor.veiculo}</p>
      <p>"{valor.titulo}"</p>
      
      </div>
      </a>
      </div>
    
    ))};

    React.useEffect(() => {
      setContador(contador
        );
    }, [contador])

    console.log("Lista", lista.length)

  return (
    <>
    <div className="press">
    <h2>
    <FormattedMessage id="press-title" />
    </h2>
    

    <div className="list">
    {lista} 
    </div>
    
    <div className="button" onClick={() => setContador(contador + 4)}>
+ <FormattedMessage id="load-more" />
    </div>
      {/* {materia.materia && materia.materia.map ((valor, index) => (
        <div key={index}>
        <p>Veículo: {valor.veiculo}</p>
        <p>Acesse a notícia clicando <a href={valor.link} target="_blank"> AQUI </a> </p>
        </div>
        ))}; */}
    </div>
    <div>
    
    </div>
    </>
  )
}

export default Imprensa
