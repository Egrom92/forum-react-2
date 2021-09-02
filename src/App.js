import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import {SinglePost, LogIn, NewPostForm, PostArchive} from './pages'
import {Menu} from './components'


function App() {

    return (
        <div className="App mt-5">
            <div className="container">
                <Router>
                    <Menu/>
                    <Switch>
                        <Route path='/' exact component={PostArchive}/>
                        <Route path='/new-post' exact component={NewPostForm}/>
                        <Route path='/log-in' exact component={LogIn}/>
                        <Route path='/post/:id' exact component={SinglePost}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;





