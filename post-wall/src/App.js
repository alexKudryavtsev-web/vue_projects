import React from 'react'
import Post from './Post/Post.js'
import Scribe from './Scribe/Scribe.js'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [
        {
          title: 'Welcom',
          content: 'this you can write dfdfdgfdgf',
          status: 100
        }
      ]
    }
  }

  incrStatus = index => {
    let posts = [...this.state.posts]
    console.log(posts, index)

    posts[index].status++

    this.setState({
      posts: posts
    })
  }

  deletePost = index => {
    let posts = [...this.state.posts]
    this.setState({
      posts: posts.filter((_, elIndex) => index !== elIndex)
    })
  }

  decrStatus = index => {
    let posts = [...this.state.posts]

    posts[index].status--

    this.setState({
      posts: posts
    })
  }

  pushPost = post => {
    let posts = [...this.state.posts]
    posts.unshift(post)

    this.setState({
      posts: posts
    })
  }

  render() {
    return (
      <div>
        <Scribe push={this.pushPost} />
        <div className='Wall'>
          {
            this.state.posts.map((el, index) => (
              <Post
                title={el.title}
                status={el.status}
                content={el.content}
                key={index}
                incr={this.incrStatus.bind(this, index)}
                decr={this.decrStatus.bind(this, index)}
                delete={this.deletePost.bind(this, index)}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
