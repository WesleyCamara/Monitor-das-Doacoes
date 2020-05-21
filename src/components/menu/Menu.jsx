import React, { Component } from "react";
import Menucss from './Menu.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="container-menu">
                <div className="menu">
                    <div className="menu-title">
                        <h1>Monitor das doações COVID 19</h1>
                    </div>
                    <div className="menu-language">
                        <div className="menu-pt ativo">
                            <a href="">PT</a>
                        </div>
                        <div className="menu-en">
                            <a href="">EN</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}