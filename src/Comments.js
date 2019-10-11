import React, { useContext } from 'react'
import { useDatabase } from './database'
import Comment from './Comment'
import { AuthContext } from './auth'

const Comments = () => {

  const auth = useContext(AuthContext)
    const data = useDatabase('comments')

    
    if(auth.user === null){
      return null
    }

    if(!data){
      return <h4 className='text-center'>Nenhum comentário enviado até o momento!</h4>
    }
  
    const ids = Object.keys(data)
    if(ids.length === 0){
      return <h5 className='text-center'>Carregando...</h5>
    }
  
    return ids.map(id => {
      return <Comment key={id} comment={data[id]} />
    })
  }
  export default Comments