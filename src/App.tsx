import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom/';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home/Home";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={SignIn}/>
                <Route path='/signin' component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
