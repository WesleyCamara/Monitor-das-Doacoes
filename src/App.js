import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <p>
          Monitor das doações COVID-19
        </p>
      </header> */}
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
