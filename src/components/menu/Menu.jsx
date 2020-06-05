import React, { Component } from "react";
import './Menu.css';
import { Link, NavLink } from "react-router-dom";
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
                        <div className="menu-pt">
                            <NavLink to="/pt" activeClassName="active">PT</NavLink>
                        </div>
                        <div className="menu-en">
                            <NavLink to="/en" activeClassName="active">EN</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}