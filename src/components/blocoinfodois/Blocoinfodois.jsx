import React, { Component } from 'react';
import { FormattedMessage } from "react-intl";
import './Blocoinfodois.css';
import monitor from '../../assets/img/blocoinfo/monitor.svg';
import imgcanto from '../../assets/img/blocoinfo/imgcanto.svg';
import circles from '../../assets/img/blocoinfo/circles.svg';
import code from '../../assets/img/blocoinfo/code.svg';
import seta from '../../assets/img/blocoinfo/seta.svg';


export default class BlocoInfoDois extends Component {
    render() {
        return (
                <div className="blocoinfodois">
                    <div className="container-parteprincipal">
                        <div className="container-texto">
                            <div className="fundo-sombra">
                                <img src={monitor} />
                            </div>
                        </div>
                        <div className="textotitulo">
                            <h1>O Monitor das<br />Doações COVID 19:</h1>
                            <p>O Monitor Das Doações COVID 19 é atualizado diariamente pela ABCR<br />
                                com dados públicos, coletados diariamente na internet ou que são<br />
                                enviados para nós. Nenhuma doação é somada se ela não tiver sido<br />
                                anunciada publicamente - os links são divulgados para conferência. Os<br />
                                números referentes aos doadorese às campanhas são checados para<br />
                                que não sejam contados duas vezes<br /><br />
                                O objetivo do Monitor Das Doações COVID 19 é consolidar e conhecer os<br />
                                números das doações realizadas em razão do coronavírus, promovê-las e<br />
                                inspirar doadores e organizações, e não fiscalizamos. A responsabilidade por<br />
                                realizar a doação anunciada é de cada doador.
                                </p>
                        </div>
                        <div className="botao">
                            <h1><a href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0" target="_blank">VEJA QUEM ESTÁ DOANDO</a></h1>
                        </div>
                        <div className="imgdecorativo">
                            <img src={imgcanto} />
                        </div>
                        <div className="circulo">
                            <img src={circles} />
                        </div>
                        <div className="qrcode">
                            <img src={code} /><a href="http://bi.anna.center/w5/tdaportalclient.aspx" target="_blank" />
                            <p>Confira graficamente<br />
                                os resultados do<br />
                                MD COVID 19</p>
                        <div className="seta">
                            <img src={seta} />
                        </div>
                        <div className="textbaixo">
                            <p>Confira a planilha COMPLETA de todo o<br />
                            levantamento realizado acessando <a href='https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0' target="_blank">AQUI</a></p>
                        </div> 
                    </div>       
                </div> 
            </div>
        );
    }
    
}

