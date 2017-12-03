import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'

import Login from './pages/Login/Login'
import Main from './pages/Main'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Upload from './pages/Upload/Upload'
const Routes = () => {
    return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Profile" component={Profile} />
    <Route exact path="/Upload" component={Upload} />
    {!localStorage.getItem('username') ? (
      <Redirect to="/Login" />
    ) : (
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    )}
  </Switch>
    )
}

export default Routes