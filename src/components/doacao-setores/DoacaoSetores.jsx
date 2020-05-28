import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

import api from "../../services/API";

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
                    renderTo: 'doacao-setores'
                },
                    credits: {
                        enabled: false
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
                series: [{
                    name: 'Setores',
                    data: [
                        {
                        name: 'SETOR FINANCEIRO',
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
            name: 'Setores',
            data: [
                {
                name: this.state.info[10][6],
                y: this.state.info[10][7],
                
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
                y: this.state.info[13][7],
                
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
                y: this.state.info[22][7],
                    
                },
            ]
        }]}})
        console.log(this.state.data)
    }



   	render() {
        const { options } = this.state;
       	return (
            <div className="container" style={estiloSetoresContainer}>
                <div id="doacao-setores">
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
                <button style={estiloBtn}>VER DETALHES</button>
            </div>
            
       	);
   	}
}

export default DoacaoSetores