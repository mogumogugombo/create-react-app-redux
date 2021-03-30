import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import TweetMain from '../Tweet/TweetMain'

const App = () => (
  <div>
    <header>
      <Link to="/">Home1</Link>&nbsp;
      <Link to="/about-us">About</Link>&nbsp;
      <Link to="/TweetMain">TweetMain</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/TweetMain" component={TweetMain} />
    </main>
  </div>
)

export default App
