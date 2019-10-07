import React from 'react'
import './App.css'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

import { AuthProvider } from './auth'


// prop drilling = Perfurando propriedades isso é problematico pq se eu mudar alguma 
// coisa no meio pode quebrar a aplicacao para resolver isso vamos usar ContextAPI
function App() {
  
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <SignInUser />
        <UserInfo />
      </div>
    </AuthProvider>
  )
}
export default App
