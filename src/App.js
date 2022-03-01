import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import MainView from '../src/components/officialview/mainview';
import NavBar from '../src/components/header/navbar';
import { MotivationBook } from './components/BooksRoute/motivation/motivationbook';
import {Sales} from './components/BooksRoute/sales/sales';
import {Comic} from './components/BooksRoute/comic/comic';

const App = () => {
  return (
    <>
  


    <Switch>
    <Route path="/navbar" component={NavBar}></Route>
    <Route path="/motivationbook" component={MotivationBook}></Route>
    <Route path="/sales" component={Sales}></Route>
    <Route path="/comic"component={Comic}></Route>
     
    <Route path="/mainview" component={MainView}/>
    <Redirect from="/"  to="/mainview"/>

    </Switch>

    </>
  
  )
}

export default App;
