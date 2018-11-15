import React from 'react'
import MovementList from './movement/movement_list'
import MenuBar from './layout/menubar'
import Form from './form'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateroute'
import LoginForm from './loginform'

const App = () => {
  return (
    <Router> 
    {/* Wrapper che fa in modo che tutti i componenti al suo interno ricevano history e altre info */}
      <div>
        <h1>Authenticated List + Form</h1>
        <MenuBar />
        <LoginForm />
        <hr />
        <Switch> {/* Mostra una sola Route alla volta*/}
        <Route
          exact
          path ='/'
          component = {MovementList} 
         /> {/* Ogni singola route, definita da un path (exact indica che non deve esserci nulla oltre il path, tipo parametri) */}
         <PrivateRoute
          path ='/form'
          component = {Form}
         />
         </Switch>
         <hr/>
      </div>
    </Router>
  )
}

export default App;