import React, { useState, useContext } from 'react'
import { useDatabasePush } from './database'
import firebase from './firebase'
import { AuthContext } from './auth'

const NewComment = () => {

    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const auth = useContext(AuthContext)

    if(auth.user === null){
      return null
    }
    console.log(auth.user)
    const { displayName, uid } = auth.user
    const [ alternativeDisplayName ] = auth.user.email.split('@')
  
    const createComment = () => {
      if(comment !== ''){
        save({ 
          content: comment,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          user: {
            id: uid,
            name: displayName || alternativeDisplayName
          }
        })
        setComment('')
      }else if(comment === '') {
        alert('Digite algo!')
      }
    }
  
    return (
      
        <div className='form-group'>
          <label for='New-Comment'><h6>Digite seu Comentário:</h6></label>
          <textarea id='New-Comment' className='form-control' rows='3'  value={comment} onChange={evt => setComment(evt.target.value)} />
          <br />
          <button onClick={createComment} className='btn btn-primary'>Comentar</button>
        </div>
    )
  }
  export default NewComment