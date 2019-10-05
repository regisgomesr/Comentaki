import React from 'react'
import Time from './Time'

const Comment = ({ comment }) => {
    return (
      <div>
        {comment.content} Criado por: {comment.user.name} Data <Time TIMESTAMP={comment.createdAt} />
      </div>
    )
  }
  export default Comment