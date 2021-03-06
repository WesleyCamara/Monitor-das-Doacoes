import React from 'react';
import { FormattedMessage } from "react-intl";
import "../imprensa/Imprensa.css";
import Loading from '../../assets/img/lista-doadores/loading.svg';

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
  // Alterna o loading entre visível ou não
  const [visible, setVisible] = React.useState({
    Loading: { display: "block" },
  });

  React.useEffect(() => {
    setMateria([
      dados(valor)
    ])
    if(materia !== "") {
      setVisible({
        Loading: { display: "none" },
      });
    }
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


  let listaObject = [];
  

  materia["0"] && materia["0"].map ((valor) => {
    if (listaObject.length < contador) { 
    listaObject.push({
      titulo: valor.titulo,
      veiculo: valor.veiculo,
      link: valor.link
    })
  }
})

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
    )) 
  };

    React.useEffect(() => {
      setContador(contador
        );
    }, [contador])


  return (
    <>
    <div className="press">
    <h2>
    <FormattedMessage id="press-title" />
    </h2>
    

    <div className="list">
    {lista}
    </div>
    <div style={visible.Loading}>
    <img src={Loading} alt="imagem de loading" />
    </div>
    
    <div className="button" onClick={() => setContador(contador + 4)}>
+ <FormattedMessage id="load-more" />
    </div>
    </div>
    <div>
    
    </div>
    </>
  )
}

export default Imprensa
