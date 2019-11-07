import React, { Component } from 'react';
import { fetch } from 'whatwg-fetch';
import './all.css';
import {Link} from 'react-router-dom';

export default class Parts extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // let url = `https://cnodejs.org/api/v1/topics?page=1`;
        let url = `https://cnodejs.org/api/v1/topics?page=${this.props.match.params.id}`;
        console.log(this.props);
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        // let url = `https://cnodejs.org/api/v1/topics?page=1`;
        if (prevProps.match.params.id !== this.props.match.params.id) {
            let url = `https://cnodejs.org/api/v1/topics?page=${this.props.match.params.id}`;
            console.log(this.props.match);
            console.log(url);
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        data: res.data
                    })
                })
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map(
                            (item, idx) => <li key={idx}>
                                <li className='line'>
                                    <img src={item.author.avatar_url} title={item.author.loginname} />
                                    <span className='num'>
                                        <span className='big'>{item.reply_count}/</span>

                                        <span className='little'>{item.visit_count}</span>
                                    </span>
                                    <span className='gray'>分享</span>
                                    <Link to={`/topic/${item.id}`} title={item.title}>{item.title}</Link>
                                    <div className='right-all'>
                                        <img src='https://avatars3.githubusercontent.com/u/56661717?v=4&s=120' />
                                        <span>6天前</span>
                                    </div>
                                </li>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
