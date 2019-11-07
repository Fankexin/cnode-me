import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import All from './All';
import Good from './Good';
import Share from './Share';
import Ask from './Ask';
import Job from './Job';
import Dev from './Dev';

export default class Home extends Component {
    render() {
        let { url } = this.props.match;
        // console.log(this.props.match);
        return (
            <div>
                <div className="top">
                    <NavLink activeClassName="a" to={`${url}/all`}>全部</NavLink>
                    <NavLink activeClassName="a" to={`${url}/good`}>精华</NavLink>
                    <NavLink activeClassName="a" to={`${url}/share`}>分享</NavLink>
                    <NavLink activeClassName="a" to={`${url}/ask`}>问答</NavLink>
                    <NavLink activeClassName="a" to={`${url}/job`}>招聘</NavLink>
                    <NavLink activeClassName="a" to={`${url}/dev`}>客户端测试</NavLink>
                </div>
                <Switch>
                    <Route path='/home/all' component={All} />
                    <Route path='/home/good' component={Good} />
                    <Route path='/home/share' component={Share} />    
                    <Route path='/home/ask' component={Ask} />  
                    <Route path='/home/job' component={Job} />    
                    <Route path='/home/dev' component={Dev} />            
                </Switch>
            </div>

        )
    }
}
