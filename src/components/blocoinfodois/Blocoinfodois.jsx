import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Blocoinfodois.css';

import monitor from '../../assets/img/blocoinfo/monitor.svg';
import imgcanto from '../../assets/img/blocoinfo/imgcanto.svg';
import circles from '../../assets/img/blocoinfo/circles.svg';
import qrcode from '../../assets/img/footer/qr-code-footer.png';
import doar from '../../assets/img/blocoinfo/doar.svg';

export default class BlocoInfoDois extends Component {
  render() {
    return (
      <>
        <div className="blocodois">
          {/* Contem as imagens que ficam no fundo do componente, atras do conteudo principal  */}
          <div className="container-fundo">
            <div className="fundo-sombra">
              <img src={monitor} alt="fundo" />
            </div>

            <div className="imgdecorativo">
              <img src={imgcanto} alt="fundo" />
            </div>

            <div className="quadrado"></div>

            <div className="circulo">
              <img src={circles} alt="fundo" />
            </div>
          </div>

          {/* Contem o conteudo principal com os textos  */}
          <div className="container-texto">
            <div className="text__title">
              <h1>
                <FormattedMessage id="tituloumbldois" />
              </h1>
            </div>

            <div className="text__content">
              <p>
                <FormattedMessage id="text1" />
              </p>
              <p>
                <FormattedMessage id="text2" />
              </p>
              <p>
                <FormattedMessage id="text3" />
              </p>
              <p>
                <FormattedMessage id="text4" />
                <a
                  className="email"
                  href="malito:abcr@captadores.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="text4email" />
                </a>
                <FormattedMessage id="text4part2" />
              </p>
              <p>
                <FormattedMessage id="text5" />
                <a
                  className="link"
                  href="malito:abcr@captadores.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="text5link" />
                </a>
                <FormattedMessage id="text5part2" />
              </p>
            </div>
          </div>
        </div>

        <div className="container-final">
          <div className="doar">
            <a
              className="email"
              href="https://www.diadedoar.org.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={doar} alt="doar" />
            </a>
          </div>
          <div className="qrcode">
            <a
              className="email"
              href="https://www.paypal.com/donate/?token=1bQivV0Os67wJQiuN9aFb59wqVx0KPQ44Z_CG-3nk-qiwMF8EmdXAyvQUlIEyxMp8DwMYG&country.x=BR&locale.x=BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={qrcode} alt="doar" />
            </a>
          </div>
        </div>
      </>
    );
  }
}
