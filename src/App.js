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
import ModifyPost from './app/ModifyPost'
import UsersPage from './app/UsersPage'
import SingleUser from './app/UserSinglePage'

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
            component={SinglePage} />

          <Route
            exact
            path='/modify/:id'
            component={ModifyPost} />
          <Route
            exact
            path='/users'
            component={UsersPage}
          />
          <Route
            exact
            path='/users/:userId'
            component={SingleUser}
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  )
}

export default App
