import React, { Component } from 'react'
import './Scribe.css'

export default class Scribe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: ''
        }
    }

    titleHandler = event => {
        this.setState({
            title: event.target.value
        })
    }

    contentHandler = event => {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        let post = {
            title: this.state.title,
            content: this.state.content,
            status: 0
        }

        return (
            <div className='Scribe'>
                <input className='Scribe-title' type='text' placeholder='input title' onChange={this.titleHandler}/>
                <textarea className='Scribe-content' placeholder='input textarea' onChange={this.contentHandler}>
                </textarea>

                <button className='Scribe-push' onClick={this.props.push.bind(this, post)}>Push Post</button>         
            </div>
        )
    }
}