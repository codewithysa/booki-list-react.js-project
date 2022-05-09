import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainView from '../src/components/officialview/mainview';
import React from 'react';
import NavBar from '../src/components/header/navbar';
import { Comic } from './components/BooksRoute/comic/comic';
import {Motivation} from './components/BooksRoute/motivations/motivation'
import { DataContainer } from './components/BooksRoute/datacontainer/dataContainer';
import {SalesBook} from './components/BooksRoute/sales/SalesBook';

const App = () => {
  return (
    <>
  <Router>
  <Switch>

      
  <Route exact path="/"  Render={() => (<Redirect to="/mainview" />)}>
     <MainView/>

     </Route>

     <Route exact path="/comic">
     <Comic/>
     </Route>

     <Route exact path="/motivation">
     <Motivation/>
     </Route>

     <Route exact path="/salesbook">
     <SalesBook/>
     </Route>

     <Route exact path="/datacontainer">
     <DataContainer/>
     </Route>

  </Switch>
</Router>

    </>
  
  )
}

export default App;
