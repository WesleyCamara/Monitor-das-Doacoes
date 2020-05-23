import React, { Component } from 'react';
import Highcharts from 'highcharts';

const estiloSetoresContainer = {
    width: '80%',
    background: 'white',
    padding: '20px'
}

const estiloBtn = {
    background: '#8075ff',
    border: 'none',
    padding: '10px 35px',
    borderRadius: '20px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',

}

class DoacaoSetores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Setores',
                data: [
                    {
                      name: 'Setor Financeiro',
                      y: 1640056334,
                      
                    },
                    {
                      name: 'Mineração',
                      y: 612635000,
                      
                    },
                    {
                      name: 'Alimentação e Bebidas',
                      y: 328173000,
                     
                    },
                    {
                      name: 'Educação',
                      y: 267184223,
                      
                    },
                    {
                        name: 'Saúde',
                        y: 165957000,
                    
                    },
                    {
                        name: 'Energia',
                        y: 132440000,
                    
                    },
                    {
                        name: 'Famílias e indivíduos',
                        y: 104861000,
                    
                    },
                    {
                        name: 'Comércio e Eletrônicos',
                        y: 100000000,
                    
                    },
                    {
                        name: 'Autarquia / Funcional / Público',
                        y: 66610000,
                    
                    },
                    {
                        name: 'Celulose',
                        y: 62310000,
                    
                    },
                    {
                        name: 'Outros Setores (22)',
                        y: 373500210,
                    
                    },
                ]
            }]
           
        }
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
              type: 'pie',
              renderTo: 'doacao-setores'
            },
            title: {
              text: 'Doação por setores',
              style: {
                fontSize: '20px',
              }
            },
            colors: ['#8075ff'],
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',                
                dataLabels: {
                    format: '{point.name}, {point.y} '
                }
                
              }
            },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }



   	render() {
       	return (
            <div className="container" style={estiloSetoresContainer}>
                <div id="doacao-setores">
                </div>
                <button style={estiloBtn}>VER DETALHES</button>
            </div>
            
       	);
   	}
}

export default DoacaoSetores
