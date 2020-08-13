import React from 'react';

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
        veiculo: materia["1"],
        link: materia["3"],
      });
    })
    return saidaDados
  } 

  console.log("Materia", materia["0"]);

  let listaObject = [];
  

  materia["0"] && materia["0"].map ((valor) => {
    if (listaObject.length < contador) { 
    listaObject.push({
      veiculo: valor.veiculo,
      link: valor.link
    })
  }})

  // console.log("Lista:", lista)

  let lista = []
  
  for (var value of listaObject) {
    lista = 
    listaObject && listaObject.map ((valor, index) => (
      <div key={index}>
      
      <a href={valor.link} target="_blank">
      <div className="list__item">
      
      <p>{valor.veiculo}</p>
      
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
      O Monitor na imprensa
    </h2>
    

    <div className="list">
    {lista} 
    </div>
    
    <div className="button" onClick={() => setContador(contador + 4)}>
+ Carregar Mais
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
