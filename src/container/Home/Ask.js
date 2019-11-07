import React, { Component } from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import './all.css';
import Parts from './Parts4'

export default class All extends Component {
    render() {
        return (
            <div>
                <Route path='/home/ask/:id' component={Parts}/>
                <Route exact path='/home/ask' render={() => <Redirect from='/home/ask' to='/home/ask/1'/>}/>
                <ul className='numbers'>
                    <li><Link to='/home/ask/1'>1</Link></li>
                    <li><Link to='/home/ask/2'>2</Link></li>
                    <li><Link to='/home/ask/3'>3</Link></li>
                    <li><Link to='/home/ask/4'>4</Link></li>
                    <li><Link to='/home/ask/5'>5</Link></li>
                    <li><Link to='/home/ask/6'>6</Link></li>
                    <li><Link to='/home/ask/7'>7</Link></li>
                    <li><Link to='/home/ask/8'>8</Link></li>
                    <li><Link to='/home/ask/9'>9</Link></li>
                    <li><Link to='/home/ask/10'>10</Link></li>
                </ul>
                
            </div>
        )
    }
}
