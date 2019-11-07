import React, { Component } from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import './all.css';
import Parts from './Parts'

export default class All extends Component {
    render() {
        return (
            <div>
                <Route path='/home/all/:id' component={Parts}/>
                <Route exact path='/home/all' render={() => <Redirect from='/home/all' to='/home/all/1'/>}/>
                <ul className='numbers'>
                    <li><Link to='/home/all/1'>1</Link></li>
                    <li><Link to='/home/all/2'>2</Link></li>
                    <li><Link to='/home/all/3'>3</Link></li>
                    <li><Link to='/home/all/4'>4</Link></li>
                    <li><Link to='/home/all/5'>5</Link></li>
                    <li><Link to='/home/all/6'>6</Link></li>
                    <li><Link to='/home/all/7'>7</Link></li>
                    <li><Link to='/home/all/8'>8</Link></li>
                    <li><Link to='/home/all/9'>9</Link></li>
                    <li><Link to='/home/all/10'>10</Link></li>
                </ul>
                
            </div>
        )
    }
}
