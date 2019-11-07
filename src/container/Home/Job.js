import React, { Component } from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import './all.css';
import Parts from './Parts5'
export default class Job extends Component {
    render() {
        return (
            <div>
                <Route path='/home/job/:id' component={Parts}/>
                <Route exact path='/home/job' render={() => <Redirect from='/home/job' to='/home/job/1'/>}/>
                <ul className='numbers'>
                    <li><Link to='/home/job/1'>1</Link></li>
                    <li><Link to='/home/job/2'>2</Link></li>
                    <li><Link to='/home/job/3'>3</Link></li>
                    <li><Link to='/home/job/4'>4</Link></li>
                    <li><Link to='/home/job/5'>5</Link></li>
                    <li><Link to='/home/job/6'>6</Link></li>
                    <li><Link to='/home/job/7'>7</Link></li>
                    <li><Link to='/home/job/8'>8</Link></li>
                    <li><Link to='/home/job/9'>9</Link></li>
                    <li><Link to='/home/job/10'>10</Link></li>
                </ul>
                
            </div>
        )
    }
}
