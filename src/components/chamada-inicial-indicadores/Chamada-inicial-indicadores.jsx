import React, { Component } from "react";
import './Chamada-inicial-indicadores.css';
import money from '../../assets/img/chamada-inicial-indicadores/money-bill.png';
import hand from '../../assets/img/chamada-inicial-indicadores/hand-holding-money.png';
import centerImg from '../../assets/img/chamada-inicial-indicadores/center-img.png';
import { FormattedMessage } from "react-intl";



export default class ChamadaInicialIndicadores extends Component {

    render() {
        return (
            <div id="container-chamada">
                <section id="banner">
                    {/*-----section-banner------*/}
                    <div className="banner-container">
                        {/*-----container-main------*/}
                        <div id="banner-content">
                            {/*-----div-to-center-items------*/}
                            <div id="money">
                                {/*-----doações-recebidas-----*/}
                                <img src={(money)} alt="quantidade doada" />
                                {/*-----"doacoes"-receberá-dados-da-api--*/}
                                <div id="doacoes">
                                    1.234.567.898
                            </div>
                                <h2>
                                    <FormattedMessage id="banner-title-donations" />
                                </h2>
                            </div>
                            <div id="hand">
                                {/*-----doadores------*/}
                                <img src={(hand)} alt="doadores" />
                                {/*-----"doadores"-receberá-dados-da-api------*/}
                                <div id="doadores">
                                    123.456
                            </div>
                                <h2>
                                    <FormattedMessage id="banner-title-donors" />
                                </h2>
                            </div>
                        </div>
                        <div id="img-center">
                            {/*-----div-to-center-img------*/}
                            <img src={(centerImg)} alt="imagen principal" />
                        </div>
                    </div>
                </section>
                <section className="container">
                    {/*-----section-cards-----*/}
                    <div className="section-container">
                        <h4>
                            <FormattedMessage id="card-title-sector" />
                        </h4>
                        {/*-----"dados"-receberá-dados-da-api------*/}
                        <div className="dados">
                            Sistema <br />Financeiro
                        </div>
                    </div>
                    <div className="section-container">
                        <h4>
                            <FormattedMessage id="card-title-city" />
                        </h4>
                        {/*-----"dados"-receberá-dados-da-api------*/}
                        <div className="dados">
                            São Paulo<br />SP
                        </div>
                    </div>
                    <div className="section-container">
                        <h4>
                            <FormattedMessage id="card-title-campaign" />
                        </h4>
                        {/*-----"dados"-receberá-dados-da-api------*/}
                        <div className="dados">
                            Na luta contra <br />a COVID-19
                        </div>
                    </div>
                    <div className="section-container">
                        <h4>
                            <FormattedMessage id="card-title-live" />
                        </h4>
                        {/*-----"dados"-receberá-dados-da-api------*/}
                        <div className="dados">
                            Fome de musica<br />(Inclui Sandy&Junior)
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}