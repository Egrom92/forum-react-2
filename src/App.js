import './App.css';
import React from 'react';
import SinglePost from './Pages/SinglePost/SinglePost';
import Menu from './components/Menu/Menu';
import LogIn from './Pages/LogIn/LogIn';
import NewPostForm from './Pages/NewPostForm/NewPostForm';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import PostArchive from './Pages/PostArchive/PostArchive';
import {useSelector} from 'react-redux';

function App() {

    const allPosts = useSelector(state => state.posts.list)



    return (
        <div className="App mt-5">
            <div className="container">
                <Router>
                    <Menu/>
                    <Switch>
                        <Route path='/' exact render={() => <PostArchive posts={allPosts}/>}/>
                        <Route path='/new-post' exact render={()=> <NewPostForm/>}/>
                        <Route path='/log-in' exact render={LogIn}/>
                        <Route path='/single-post-:id' exact render={()=><SinglePost posts={[...allPosts]} />}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;





