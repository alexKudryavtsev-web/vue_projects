import React, { Component } from 'react'
import './Post.css'

export default class Post extends Component {
    render() {
        return (
            <div className='Post'>
                <h2 className='Post-title'>{this.props.title}</h2>
                <p className='Post-content'>{this.props.content}</p>

                <div className='Post-toolbar'>
                    <p><strong>{this.props.status}</strong></p>

                    <button onClick={this.props.incr}>Like</button>
                    <button onClick={this.props.decr}>Dislike</button>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            </div>
        )
    }
}
