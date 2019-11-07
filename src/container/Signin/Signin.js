import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'

export default class Signin extends Component {
    render() {
        return (
            <div className="deng">
                <p>主页/ 登录</p>
                <div>
                    <span>用户名：</span>
                    <input type="text" id='name'/>
                    <br />
                    <span>密码：</span>
                    <input type="password" id='pwd'/>
                    <br />
                    <Link className="aa" to='/home/all/1'>登录</Link>
                </div>

            </div>
        )
    }
}
