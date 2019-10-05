import React, { useContext } from 'react'
import Time from './Time'
import { AuthContext } from './auth'

const Comment = ({ comment }) => {
    const auth = useContext(AuthContext)
    return (
      <div>
        {comment.content} Criado por: {comment.user.name} Data <Time TIMESTAMP={comment.createdAt} />
      </div>
    )
  }
  export default Comment