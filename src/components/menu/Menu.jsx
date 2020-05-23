import React, { Component } from "react";
import './Menu.css';
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default class Menu extends Component {
    render() {
        return (
            <div className="container-menu">
                <div className="menu">
                    <div className="menu-title">
                        <h1>
                        <FormattedMessage id="menu-title" />
                        </h1>
                    </div>
                    <div className="menu-language">
                        <div className="menu-pt ativo">
                            {/* <a href="">PT</a> */}
                            <Link to="/pt">PT</Link>
                        </div>
                        <div className="menu-en">
                            <Link to="/en">EN</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}