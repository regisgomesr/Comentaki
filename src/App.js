import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

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
        <Navbar color='light' light expand='md'>
          <NavbarBrand>Comentaki</NavbarBrand>
        </Navbar>
        <br/>
        <div className='container'>
          <Comments />
          <NewComment />
          <CreateUser />
          <br/>
          <SignInUser />
          <UserInfo />
        </div>
      </div>
    </AuthProvider>
    
  )
}
export default App
