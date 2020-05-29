// import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
// import ComponenteClasse2 from './components/graficos-indicadores/ComponenteClasse2'
import GraficosIndicadores from './components/graficos-indicadores/Graficos-indicadores'



import React, {Component} from 'react'
import axios from 'axios';
// import ComponenteClasse2 from './ComponenteClasse2'

export default class App extends Component{

    state = {
        newData: ["VALOR INICIAL"]
      }
    
      componentDidMount() {
        axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=JdkNA3_2GGI1yLyhx-9KkYn_e4McqwXBerMsDP3yW4Fkx5HuChnO1HhUZ6So0tV6Xsqi3qLV-Qlu0hSwjTn-_ghLklj8mWwUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFkSJ3OGPU4PNUNksnCEJmJS93T2ZzyujjUpxX3tYNvUSMYBj7AgB7_TWN7yU7wky0W-dnclfdIe&lib=MiU-jTl38wC2L3rz6MLSQoNcSVaJnOjrd')
          .then(res => {
            const data = res.data;
            this.setState({ newData: data });
          })
      }

    render(){

        return ( <div className="App">
          
            <Menu/>
            <GraficosIndicadores valor={this.state.newData}/>
            <Footer/>
            </div>
        )
    }

}









// function App() { usado
//   return (
//     <div className="App">
//       {/* <header className="App-header">

//         <p>
//           Monitor das doações COVID-19
//         </p>
//       </header> */}
//       <Menu/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
