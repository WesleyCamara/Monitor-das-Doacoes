import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import ChamadaInicialIndicadores from './components/chamada-inicial-indicadores/Chamada-inicial-indicadores';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <p>
          Monitor das doações COVID-19
        </p>
      </header> */}
      <ChamadaInicialIndicadores />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
