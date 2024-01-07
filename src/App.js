import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostList from './app/PostList'
import AddPost from './app/AddPost'
import SinglePage from './app/SinglePostPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <PostList />
                <AddPost />
              </>
            )}
          />

          <Route
            exact
            path='/post/:postId' 
            component={SinglePage}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
