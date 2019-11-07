import React, { Component } from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import './all.css';
import Parts from './Parts6'

export default class Dev extends Component {
    render() {
        return (
            <div>
                <Route path='/home/dev/:id' component={Parts}/>
                <Route exact path='/home/dev' render={() => <Redirect from='/home/dev' to='/home/dev/1'/>}/>
                <ul className='numbers'>
                    <li><Link to='/home/dev/1'>1</Link></li>
                    <li><Link to='/home/dev/2'>2</Link></li>
                    <li><Link to='/home/dev/3'>3</Link></li>
                    <li><Link to='/home/dev/4'>4</Link></li>
                    <li><Link to='/home/dev/5'>5</Link></li>
                    <li><Link to='/home/dev/6'>6</Link></li>
                    <li><Link to='/home/dev/7'>7</Link></li>
                    <li><Link to='/home/dev/8'>8</Link></li>
                    <li><Link to='/home/dev/9'>9</Link></li>
                    <li><Link to='/home/dev/10'>10</Link></li>
                </ul>
                
            </div>
        )
    }
}
