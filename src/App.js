import React, { Component } from 'react';
import Header from './components/Header';
import Right from './components/Right';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './container/Home/Home';
import Start from './container/Start/Start';
import Api from './container/Api/Api';
import About from './container/About/About';
import Parts from './container/Home/Parts7';
import Auth from './container/Auth/Auth';
import Signin from './container/Signin/Signin';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    <div className='left'>
                        {/* <Switch> */}
                            <Route path='/home' component={Home} />
                            <Route path='/start' component={Start} />
                            <Route path='/api' component={Api} />
                            <Route path='/about' component={About} />
                            <Route path='/auth' component={Auth} />
                            <Route path='/signin' component={Signin} />
                            <Route path='/topic/:id' component={Parts} />
                        {/* </Switch> */}
                    </div>
                    <div className='right'>
                        <Right/>
                    </div>
                    
                </div>
            </Router>

        )
    }
}
