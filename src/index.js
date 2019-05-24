import React from 'react';
import ReactDOM from 'react-dom';
import MenuLink from './componts/MenuLink/MenuLink';
import RooterIndex from "./route/index"
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
ReactDOM.render(
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-heading">
                        <div className="navbar-brand">后台管理系统</div>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><MenuLink to="/" exact>首页</MenuLink></li>
                        <li><MenuLink to="/home">用户管理</MenuLink></li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                       <RooterIndex/>
                    </div>
                </div>
            </div>
        </div>
    </Router>,
  document.getElementById('root')
);
