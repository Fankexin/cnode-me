import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './parts.css';

export default class Parts7 extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                author:{}
            }
        }
    }
    componentDidMount() {
        let url = `https://cnodejs.org/api/v1/topic/${this.props.match.params.id}`;
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div className="pad">
                <div>
                    <h1>
                        {this.state.data.title}
                    </h1>
                    <div className='title'>
                        <span> 发布于 20 小时前 </span>
                        <span> 作者 <Link to={`/user/${this.state.data.author.loginname}`}> {this.state.data.author.loginname} </Link></span>
                        <span> {this.state.data.visit_count} 次浏览 </span>
                        <span> 来自 分享 </span>
                    </div>
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
                </div>

            </div>
        )
    }
}
