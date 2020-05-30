import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

import api from "../../services/API";
import "./estiloDoacaoSetores.css";
import { FormattedMessage } from "react-intl";

import squareShapes2 from '../../assets/img/doacao-setores/square-shapes-2.png'
import setorBg from '../../assets/img/doacao-setores/setor-bg.png'



Highcharts.setOptions({
    lang: {
      thousandsSep: ".",
    },
  });

class DoacaoSetores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options:{
                chart: {
                    type: 'pie',
                    renderTo: 'doacao-setores',                    
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                
                    credits: {
                        enabled: false
                    },
                    title: {
                    text: ''                    
                    },
                    colors: ['#8075ff'],
                    plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',                
                        dataLabels: {
                            format: '{point.name}, {point.y} ',
                            style: {
                                fontSize: '16px',
                                fontFamily: 'rubik, sans-serif',
                                fontWeight: 'regular'
                            }
                        }
                        
                    }
                    
                },
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
                        
                        }
                    ]
                }]
            },
            info: []
        }
    }

    

    async componentDidMount() {
        const response = await api.get();        
        this.setState({ info: response.data.Consolidação });
        this.setState({ options:{
            series: [{
            name: 'Doação',
            data: [
                {
                name: this.state.info[10][6],
                y: Math.round(this.state.info[10][7]),
                
                },
                {
                name: this.state.info[11][6],
                y: this.state.info[11][7],
                
                },
                {
                name: this.state.info[12][6],
                y: this.state.info[12][7],
                
                },
                {
                name: this.state.info[13][6],
                y: Math.round(this.state.info[13][7]),
                
                },
                {
                name: this.state.info[14][6],
                y: this.state.info[14][7],
                
                },
                {
                name: this.state.info[15][6],
                y: this.state.info[15][7],
                
                },
                {
                name: this.state.info[16][6],
                y: this.state.info[16][7],
                
                },
                {
                name: this.state.info[17][6],
                y: this.state.info[17][7],
                
                },
                {
                name: this.state.info[18][6],
                y: this.state.info[18][7],
                
                },
                {
                name: this.state.info[19][6],
                y: this.state.info[19][7],
                
                },
                {
                name: this.state.info[20][6],
                y: this.state.info[20][7],
                
                },
                {
                name: this.state.info[21][6],
                y: this.state.info[21][7],
                    
                },
                {
                name: this.state.info[22][6],
                y: Math.round(this.state.info[22][7]),
                    
                },
            ]
        }]}})
        
    }



   	render() {
        const { options } = this.state;
       	return (
            <div className="container-setores" >
                <div>
                    <img className="img-fundo-setor" src={setorBg} />                
                </div>
                <h2 className="chart-title">
                    <FormattedMessage id="chart-sectors-chart" />
                </h2>
                <div id="doacao-setores">
                    <HighchartsReact className="grafico-pie" highcharts={Highcharts} options={options} />
                </div>
                <a href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137" target="_blank" rel="noopener noreferrer">
                    <button className="estiloBtn"><FormattedMessage id="chart-indicators-button" /></button>
                </a>
                <div>
                    <img className="square-shape2" src={squareShapes2} />
                </div>
                
            </div>
            
       	);
   	}
}

export default DoacaoSetores