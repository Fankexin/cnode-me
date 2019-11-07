import React, { Component } from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import './all.css';
import Parts from './Parts2'

export default class Good extends Component {
    render() {
        return (
            <div>
                <Route path='/home/good/:id' component={Parts}/>
                <Route exact path='/home/good' render={() => <Redirect from='/home/good' to='/home/good/1'/>}/>
                <ul className='numbers'>
                    <li><Link to='/home/good/1'>1</Link></li>
                    <li><Link to='/home/good/2'>2</Link></li>
                    <li><Link to='/home/good/3'>3</Link></li>
                    <li><Link to='/home/good/4'>4</Link></li>
                    <li><Link to='/home/good/5'>5</Link></li>
                    <li><Link to='/home/good/6'>6</Link></li>
                    <li><Link to='/home/good/7'>7</Link></li>
                    <li><Link to='/home/good/8'>8</Link></li>
                    <li><Link to='/home/good/9'>9</Link></li>
                    <li><Link to='/home/good/10'>10</Link></li>
                </ul>
                
            </div>
        )
    }
}
