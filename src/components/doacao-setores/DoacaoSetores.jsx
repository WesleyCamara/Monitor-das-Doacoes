import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

import api from "../../services/API";
import "./estiloDoacaoSetores.css";
import { FormattedMessage } from "react-intl";

import squareShapes2 from '../../assets/img/doacao-setores/square-shapes-2.png'
import setorBg from '../../assets/img/doacao-setores/setor-bg.svgnp'



Highcharts.setOptions({
    lang: {
      thousandsSep: ".",
    },
});

class DoacaoSetores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionsPT:{
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
                        name: 'Doações',
                        y: 100,
                        
                        }
                        
                    ]
                }]
            },
            info: [],
            optionsEN:{
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
                    data: []
                }],
                
            }
        }
    }

    //info guarda as informações puxadas da API e joga no options do grafico

    async componentDidMount() {  
        const response = await api.get();        
        this.setState({ info: response.data.Consolidação });
        this.setState({ optionsPT:{
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
        this.setState({ optionsEN:{
            series: [{
            name: 'Donation',
            data: [
                {
                name: this.state.info[33][6],
                y: Math.round(this.state.info[33][7]),
                
                },
                {
                name: this.state.info[34][6],
                y: Math.round(this.state.info[34][7]),
                
                },
                {
                name: this.state.info[35][6],
                y: Math.round(this.state.info[35][7]),
                
                },
                {
                name: this.state.info[36][6],
                y: Math.round(this.state.info[36][7]),
                
                },
                {
                name: this.state.info[37][6],
                y: Math.round(this.state.info[37][7]),
                
                },
                {
                name: this.state.info[38][6],
                y: Math.round(this.state.info[38][7]),
                
                },
                {
                name: this.state.info[39][6],
                y: Math.round(this.state.info[39][7]),
                
                },
                {
                name: this.state.info[40][6],
                y: Math.round(this.state.info[40][7]),
                
                },
                {
                name: this.state.info[41][6],
                y: Math.round(this.state.info[42][7]),
                
                },
                {
                name: this.state.info[43][6],
                y: Math.round(this.state.info[43][7]),
                
                },
                {
                name: this.state.info[44][6],
                y: Math.round(this.state.info[44][7]),
                
                },
                {
                name: this.state.info[45][6],
                y: Math.round(this.state.info[45][7]),
                    
                }
            ]
        }]}})
    }



   	render() {
        const { optionsPT, optionsEN } = this.state;
        const idiomaUrl = window.location.href;
        let renderizaGrafico = null;
        if (idiomaUrl.includes('/en') === false){
            renderizaGrafico = true;
        } 
       	return (
            <div className="container-setores" >
                <div>
                    <img className="img-fundo-setor" src={setorBg} />                
                </div>
                <h2 className="chart-title">
                    <FormattedMessage id="chart-sectors-chart" />
                </h2>
                
                
                
                <div id="doacao-setores">
                    {renderizaGrafico ? 
                    <HighchartsReact className="grafico-pie" highcharts={Highcharts} options={optionsPT} /> :
                
                    <HighchartsReact className="grafico-pie" highcharts={Highcharts} options={optionsEN} /> }
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