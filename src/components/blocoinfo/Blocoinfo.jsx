import React, { Component} from 'react';
import { FormattedMessage } from "react-intl";
import './Blocoinfo.css';


export default class Blocoinfo extends Component {
    render() {
        return (
                    <div className="container-bloco-info">
                        <div className="blocoinfo">
                            <div className="container-partesuperior">
                                <div className="campanha">
                                    <h1>Campanha de Doação:</h1>
                                    <p><FormattedMessage id="paragrafo-exemplo" /></p>
                                </div>
                                <div className="totaldoado">
                                    <h1>R$ 318.314.620</h1>
                                </div>
                                <div className="informacao">
                                    <h3>São 295 campanhas - mínimo 10 mil reais - e lives atualmente mapeadas.<br />
                                    Clique <a href='https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0' target="_blank">AQUI</a> para conhecê-las e acessar os links</h3>
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
