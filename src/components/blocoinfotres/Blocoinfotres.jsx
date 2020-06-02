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
                        <p>Caso você queira incluir a informação sobre sua<br />
                            doação realizada escreva para <a href="malito:abcr@captadores.org.br" target="_blank">abcr@captadores.org.br.</a><br />
                            Somente conseguimos contabilizar doações cujo<br />
                            valor em reais seja informado.</p>
                    </div>
                </div>
            </div>
        );
    }
}