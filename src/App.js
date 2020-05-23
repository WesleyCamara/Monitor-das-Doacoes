import React from 'react';
import './App.css';
import TesteGrafico from './components/doacao-setores/TesteGrafico';
import DoacaoSetores from './components/doacao-setores/DoacaoSetores';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Monitor das doações COVID-19
        </p>
        <DoacaoSetores/>
      </header>
    </div>
  );
}

export default App;
