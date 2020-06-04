import React, { Component} from 'react';
import { FormattedMessage } from "react-intl";
import './Blocoinfotres.css';
import doar from '../../assets/img/blocoinfo/doar.jpg';

export default class BlocoInfoTres extends Component {
    render() {
        return (
            <div className="blocoinfotres">
                <div className="container-final">
                    <div className="doar">
                        <img src={doar} />
                    </div>
                    <div className="textoemail">
                        <p><FormattedMessage id="textemail1" /><br />
                            <FormattedMessage id="textemail2" /> <a href="malito:abcr@captadores.org.br" target="_blank"><FormattedMessage id="textemail3" /></a><br />
                            <FormattedMessage id="textemail4" /><br />
                            <FormattedMessage id="textemail5" /></p>
                    </div>
                </div>
            </div>
        );
    }
}