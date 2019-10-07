import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', passwd: '' })

    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }

    if(auth.user !== null){
        return null
      }

    return (
        <>
            <br />
            <h3>Criar conta:</h3>
            {
                auth.createUser.createUserState.error !== '' &&
                <p>{ auth.createUser.createUserState.error }</p>
            }
            <input type='text' placeholder='Digite seu e-mail' value={form.email} onChange={onChange('email')} />
            <input type='password' placeholder='Digite sua senha' value={form.passwd} onChange={onChange('passwd')} />
            <br />
            <button onClick={() => {
                auth.createUser.createUser(form.email, form.passwd)
            }}>Criar conta</button>
        </ >
    )
}
export default CreateUser