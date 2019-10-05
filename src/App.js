import React from 'react'
import './App.css'

import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'


// prop drilling = Perfurando propriedades isso é problematico pq se eu mudar alguma 
// coisa no meio pode quebrar a aplicacao para resolver isso vamos usar ContextAPI
function App() {
  
  return (
    <AuthProvider>
      <div>
        <NewComment /> 
        <Comments />
        <CreateUser />
      </div>
    </AuthProvider>
  )
}
export default App
