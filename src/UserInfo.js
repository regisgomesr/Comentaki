import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const FormDisplayName = ({ displayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)

    const auth = useContext(AuthContext)

    const onChange = evt => {
        setNewDisplayName(evt.target.value)
    }
    const save = () => {
        if(newDisplayName !== ''){
            user.updateProfile({ displayName: newDisplayName })
            window.location.reload()
        }
    }

    return(
        <>  
            <div className='input-group flex-nowrap '>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>Nome =></span>
                </div>  
                <input type='text' value={newDisplayName} onChange={onChange} />
                <button onClick={save} className='btn btn-primary'>Salvar Nome</button>
            </div>
        </>
    )
    
}

const UserInfo = () => {
    const auth = useContext(AuthContext)

    if(auth.user === null){
        return null
    }

    const { displayName } = auth.user
    const [ alternativeDisplayName ] = auth.user.email.split('@')
    const dn = displayName || alternativeDisplayName
    
    return(
        <>
            <h2>Olá { dn }!</h2>
            <FormDisplayName displayName={dn} user={auth.user} />
            <div className='text-right'>
                <button onClick={auth.signout} className='btn btn-danger'>Sair</button>
            </div>
        </>
    )

}
export default UserInfo