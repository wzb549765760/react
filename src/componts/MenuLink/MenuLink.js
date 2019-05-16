/*
 * @Description:重写link标签,让选中的颜色高亮
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @Date: 2019-05-15 13:52:39
 * @LastEditors: 水痕
 * @LastEditTime: 2019-05-15 13:55:00
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './MenuLink.css';

export default function ({ to, exact, children }) {
  return (
    <Route path={to} exact={exact} children={
      props => {
        return <Link className={props.match ? 'active' : ''} to={to}>{children}</Link>;
      }
    } />
  )
}