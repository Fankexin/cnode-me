import React, { Component } from 'react'

export default class Right extends Component {
    render() {
        return (
            <div>
                <div className='inner'>
                    <p>CNode：Node.js专业中文社区</p>
                    <div>
                        <span>您可以登录或注册, 也可以</span>
                        <button>
                            通过 GitHub 登录
                        </button>
                    </div>
                </div>

                <div className='images'>
                    <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" />
                    <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" />
                    <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" />
                </div>

                <div className='two'>
                    <span>客户端二维码</span>
                    <div>
                        <img width='200' src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                        <p>客户端源码地址</p>
                    </div>
                </div>

            </div>
                )
            }
        }
