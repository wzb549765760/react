import React from 'react';
import ReactDOM from 'react-dom';
import MenuLink from './componts/MenuLink/MenuLink';
import App from './componts/App/App';
import Home from "./componts/Home/Home";
// let Home = require("my-loader!./componts/Home/Home");
// let App = require("my-loader!./componts/Home/App");
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
                        <Route path="/" component={App} exact></Route>
                        <Route path="/Home" component={Home}></Route>
                    </div>
                </div>
            </div>
        </div>
    </Router>,
  document.getElementById('root')
);
