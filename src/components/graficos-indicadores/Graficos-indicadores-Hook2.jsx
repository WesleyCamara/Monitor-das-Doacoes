import React, { useState, useEffect } from "react";



  const GraficosIndicadores = (props) => {
  const [count, setCount] = useState(0);

    if(props.valor.status == 'ok'){
    console.log('tem props aqui')
    console.log(props.valor.Consolidação[2][1])

  
    
  }

  useEffect(() => {
    setCount(count +10)
  }, []);



  return <><button onClick={() => setCount(count + 1)}>{count}</button>
  
  
  
  
  </>
};
export default GraficosIndicadores