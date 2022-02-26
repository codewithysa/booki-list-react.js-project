import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import MainView from '../src/components/officialview/mainview';
import NavBar from '../src/components/header/navbar';

const App = () => {
  return (
    <>
  


    <Switch>
    <Route path="/navbar" component={NavBar}></Route>
     
    <Route path="/mainview" component={MainView}/>
    <Redirect from="/"  to="/mainview"/>

    </Switch>

    </>
  
  )
}

export default App;
