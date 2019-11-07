import React, { Component } from 'react';
import { Link, Route ,Redirect} from 'react-router-dom';
import './all.css';
import Parts from './Parts3'

export default class Share extends Component {
    render() {
        return (
            <div>
                <Route path='/home/share/:id' component={Parts}/>
                <Route exact path='/home/share' render={() => <Redirect from='/home/share' to='/home/share/1'/>}/>
                <ul className='numbers'>
                    <li><Link to='/home/share/1'>1</Link></li>
                    <li><Link to='/home/share/2'>2</Link></li>
                    <li><Link to='/home/share/3'>3</Link></li>
                    <li><Link to='/home/share/4'>4</Link></li>
                    <li><Link to='/home/share/5'>5</Link></li>
                    <li><Link to='/home/share/6'>6</Link></li>
                    <li><Link to='/home/share/7'>7</Link></li>
                    <li><Link to='/home/share/8'>8</Link></li>
                    <li><Link to='/home/share/9'>9</Link></li>
                    <li><Link to='/home/share/10'>10</Link></li>
                </ul>
                
            </div>
        )
    }
}
