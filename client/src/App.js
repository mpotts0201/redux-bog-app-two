import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import axios from 'axios'
import { saveAuthTokens, setAxiosDefaults, removeTokens, userIsLoggedIn } from './utils/SessionHeaderUtils'
class App extends Component {

  state = {
    signedIn: false
  }

  componentDidMount() {
    const signedIn = userIsLoggedIn()

    if (signedIn) {
      setAxiosDefaults()

    }
    this.setState({ signedIn })
  }

  signIn = async (email, password) => {
    const payload = {
      email,
      password
    }
    try {
      const res = await axios.post('/auth/sign_in', payload)

      saveAuthTokens(res.headers)

      this.setState({ signedIn: true })

    } catch (error) {
      console.log(error)
    }
  }

  signOut = () => {
    removeTokens()
    this.setState({ signedIn: false })
  }



  render() {

    const LoginWrapper = (props) => {
      return <Login {...props} signIn={this.signIn} />
    }

    const HomeWrapper = (props) => {
      return <Home {...props} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={() => this.signOut()}>Sign Out</button>

        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/login' render={LoginWrapper} />
              <Route exact path='/' render={HomeWrapper} />
            </Switch>
            {
              this.state.signedIn
                ? <Redirect to='/' />
                : <Redirect to='/login' />
            }

          </div>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
