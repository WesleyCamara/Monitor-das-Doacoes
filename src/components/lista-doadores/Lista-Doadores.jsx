import React, { Component } from "react";
import "./Lista-Doadores.css"

export default class ListaDoadores extends Component {
    render () {
        return (
            <div className="container-donations-list">
                <div className="donations">
                    <div className="donations-top">
                        <div className="donations-top-title">
                            <h2>Quem está doando:</h2>
                        </div>
                        <div className="donations-top-description">
                            <p>
                                (para cada um dos 232 doadores - mínimo de 3 mil reais - há um link com a referência principal da notícia sobre a doação)
                            </p>
                        </div>
                    </div>
                    <div className="donations-list">
                        <p>
                            <span className="donation"> Cartório - </span> valor
                        </p>
                        <div className="load-more">
                            <p> + Carregar mais </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 