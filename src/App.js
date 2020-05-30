import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import GraficosIndicadores from './components/graficos-indicadores/Graficos-indicadores'
import Footer from './components/footer/Footer';
import ChamadaInicialIndicadores from './components/chamada-inicial-indicadores/Chamada-inicial-indicadores';
import Blocoinfo from './components/blocoinfo/Blocoinfo';
import BlocoInfoDois from './components/blocoinfodois/Blocoinfodois';
import BlocoInfoTres from './components/blocoinfotres/Blocoinfotres'
import ListaDoadores from './components/lista-doadores/Lista-Doadores';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <p>
          Monitor das doações COVID-19
        </p>
      </header> */}
      <Menu />
      <ChamadaInicialIndicadores />
      <ListaDoadores/>
      <GraficosIndicadores/>
      <Blocoinfo />
      <BlocoInfoDois />
      <BlocoInfoTres />
      <Footer />
    </div>
  );
}

export default App;

