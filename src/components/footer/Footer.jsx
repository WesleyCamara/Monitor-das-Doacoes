import React, { Component } from "react";
import Footer from "./Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="footer">
                    <div className="footer-first">
                        <div className="footer-first-promocao">
                            <div className="footer-title">
                                <h3>Promoção</h3>
                            </div>
                            <div className="footer-img-promocao">
                                <img src=""></img>
                            </div>
                        </div>

                        <div className="footer-first-realizacao">
                            <div className="footer-title">
                                <h3>Realização</h3>
                            </div>
                            <div className="footer-img-promocao">
                                <img src=""></img>
                            </div>
                        </div>

                        <div className="footer-first-imprenssa">
                            <div className="footer-title">
                                <h3>Imprensa ABCR</h3>
                            </div>
                            <div className="footer-description">
                                <p> Ana Moretto </p>
                                <p> anamoretto@4pressnews.com. </p>
                                <p> Tel: (11) 5096-0439 </p>
                                <p> Cel: (11) 97300-8584 </p>
                            </div>
                        </div>
                        <div className="footer-first-qrcode">
                            <div className="footer-img-qrcode">
                                <img src=""></img>
                            </div>
                            <div className="footer-link">
                                <p> Clique e doe para a ABCR desenvolverainda mais o Monitor das Doações </p>
                            </div>
                        </div>
                    </div>
            
                    <div className="footer-secondary">
                        <div className="footer-secondary-compartilhar-facebook">

                        </div>
                        <div className="footer-secondary-sociais">
                            
                        </div>
                        <div className="footer-secondary-compartilhar-tweeter">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
