import React from 'react'
import './App.css'
import NewComment from './NewComment'
import Comments from './Comments'

/*
firebase
  .auth()
  .createUserWithEmailAndPassword('regisgomesr@gmail.com', 'abc123')
  .then( user => {
    // user.displayName = 'Regis Ribeiro'
    // firebase.auth().updateCurrentUser(user)
  })


firebase.auth().onAuthStateChanged(user => {
  if(user){
    console.log(user.displayName)
    user.updateProfile({ displayName: 'Theo Ribeiro' })
  }
})
*/

// prop drilling = Perfurando propriedades isso é problematico pq se eu mudar alguma 
// coisa no meio pode quebrar a aplicacao para resolver isso vamos usar ContextAPI
function App() {
  return (
    <div>
      <NewComment /> 
      <Comments />
    </div>
  );
}
export default App;
