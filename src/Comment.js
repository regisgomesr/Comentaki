import React, { useContext } from 'react'
import Time from './Time'
import { AuthContext } from './auth'
import { Alert } from 'reactstrap'
import './Comment.css'

const Comment = ({ comment }) => {
    const auth = useContext(AuthContext)
    return (
      <div className='comment-container'>
      <Alert color="primary">
        <h5>{comment.content}</h5> <p>Criado por: {comment.user.name} Data <Time TIMESTAMP={comment.createdAt} /></p>
      </Alert>
        
      </div>
    )
  }
  export default Comment