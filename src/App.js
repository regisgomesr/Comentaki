import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

import Header from './Header'
import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

import { AuthProvider } from './auth'

function App() {
  
  return (
    
    <AuthProvider>
      <div>
        <Header/>
        <br/>
        <div className='container'>
          <UserInfo />
          <CreateUser />
          <br/>
          <SignInUser />
          <Comments />
          <NewComment />
        </div>
      </div>
    </AuthProvider>
    
  )
}
export default App
