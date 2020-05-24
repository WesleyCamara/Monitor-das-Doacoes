import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import ListaDoadores from './components/lista-doadores/Lista-Doadores';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <p>
          Monitor das doações COVID-19
        </p>
      </header> */}
      <Menu/>
      <ListaDoadores />
      <Footer/>
    </div>
  );
}

export default App;
