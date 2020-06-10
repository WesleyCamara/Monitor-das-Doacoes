import React, { Component } from "react";
import "./Footer.css";
import abcr from "../../assets/img/footer/abcr.webp";
import promocao from "../../assets/img/footer/movimento-por-uma-cultura-de-doação.png";
import qrcode from "../../assets/img/footer/qr-code-footer.png";
import twitter from "../../assets/img/footer/twitter.svg";
import instagram from "../../assets/img/footer/instagram.svg";
import facebook from "../../assets/img/footer/facebook.svg";
import linkedin from "../../assets/img/footer/linkedin.svg";
import youtube from "../../assets/img/footer/youtube.svg";
import cocreare from "../../assets/img/footer/partner-cocreare.png";
import anna from "../../assets/img/footer/partner-anna.png";
import { FormattedMessage } from "react-intl";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <div className="partner-title">
          <h3>
            <FormattedMessage id="partner-title" />
          </h3>
        </div>

        <div className="partner">
          <div className="partner-one"></div>
          <div className="partner-two">
            <a
              href="https://anna.center/pt/home/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={anna} alt="anna" title="Anna" />
            </a>
          </div>
          <div className="partner-three">
            <img src={cocreare} alt="cocreare" title="Cocreare" />
          </div>
          <div className="partner-four"></div>
        </div>

        <div className="footer">
          <div className="footer-first">
            <div className="footer-first-promocao">
              <div className="footer-title">
                <h3>
                  <FormattedMessage id="footer-title-promotion" />
                </h3>
              </div>
              <div className="footer-img-promocao">
                <img src={promocao} alt="Promoção" />
              </div>
            </div>

            <div className="footer-first-realizacao">
              <div className="footer-title">
                <h3>
                  <FormattedMessage id="footer-title-realization" />
                </h3>
              </div>
              <div className="footer-img-realizacao">
                <a
                  href="https://captadores.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={abcr} alt="ABCR" title="ABCR" />
                </a>
              </div>
            </div>

            <div className="footer-first-imprensa">
              <div className="footer-title">
                <h3>
                  <FormattedMessage id="footer-title-press" />
                </h3>
              </div>
              <div className="footer-description">
                <p>
                  <span className="footer-description-name">Ana Moretto</span>
                </p>
                <a href="mailto:anamoretto@4pressnews.com.br">
                  <p> anamoretto@4pressnews.com.br </p>
                </a>
                <p> Tel: (11) 5096-0439 </p>
                <p> Cel: (11) 97300-8584 </p>
              </div>
            </div>
            <div className="footer-first-qrcode">
              <div className="footer-img-qrcode">
                <a
                  href="https://www.paypal.com/donate/?token=1bQivV0Os67wJQiuN9aFb59wqVx0KPQ44Z_CG-3nk-qiwMF8EmdXAyvQUlIEyxMp8DwMYG&country.x=BR&locale.x=BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={qrcode} alt="QR Code" title="QR Code"></img>
                </a>
              </div>
              <div className="footer-link">
                <a
                  href="https://www.paypal.com/donate/?token=1bQivV0Os67wJQiuN9aFb59wqVx0KPQ44Z_CG-3nk-qiwMF8EmdXAyvQUlIEyxMp8DwMYG&country.x=BR&locale.x=BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <FormattedMessage id="footer-link-donation" />
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-secondary">
            <div className="footer-secondary-compartilhar">
              <a
                href="https://web.facebook.com/sharer.php?u=https%3A%2F%2Fwww.monitordasdoacoes.org.br&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="compartilhar" />
                <h4>
                  <FormattedMessage id="footer-secondary-compartilhar" />
                </h4>
              </a>
            </div>
            <div className="footer-secondary-sociais">
              <a
                href="https://instagram.com/abcrbrasil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://twitter.com/captacaoabcr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://facebook.com/ABCRBrasil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCagSPBomjrVGxYuR3eUFyrQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
            </div>
            <div className="footer-secondary-compartilhar">
              <a
                href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Fwix-bolt%2F1.5874.0%2Fnode_modules%2Fwix-santa%2Fstatic%2Fexternal%2Ftwitter.html%3FcompId%3Dcomp-k96bfxus%26href%3Dhttps%253A%252F%252Ftwitter.com%252Fshare%26lang%3Den%26origin%3Dhttps%253A%252F%252Fwww.monitordasdoacoes.org.br%26related%26text%26url%3Dhttp%253A%252F%252Fwww.monitordasdoacoes.org.br%26widgetType%3DTWEET&ref_src=twsrc%5Etfw&tw_p=tweetbutton&url=http%3A%2F%2Fwww.monitordasdoacoes.org.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="tweet" />
                <h4>Tweet</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
