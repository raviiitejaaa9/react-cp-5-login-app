// Write your code here
import {Component} from 'react'

import Message from '../Message'
import LogIn from '../Login'
import LogOut from '../Logout'

import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  onChangeState = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="home-container">
        <div className="msg-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn === true ? (
            <LogOut onChangeState={this.onChangeState} />
          ) : (
            <LogIn onChangeState={this.onChangeState} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
