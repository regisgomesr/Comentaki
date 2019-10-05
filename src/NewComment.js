import React, { useState } from 'react'
import { useDatabasePush } from './database'
import firebase from './firebase'

const NewComment = props => {

    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
  
    const createComment = () => {
      if(comment !== ''){
        save({ 
          content: comment,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          user: {
            id: '1',
            name: 'Regis'
          }
        })
        setComment('')
      }
    }
  
    return (
      <div>
        <textarea value={comment} onChange={evt => setComment(evt.target.value)} />
        <button onClick={createComment}>Comentar!</button>
      </div>
    )
  }
  export default NewComment