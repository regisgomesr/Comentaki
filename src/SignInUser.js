import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
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
            <h3>Entrar na conta:</h3>
            {
                auth.signInUser.signInUserState.error !== '' &&
                <p>{ auth.signInUser.signInUserState.error }</p>
            }
            <label>Email:</label>
            <input type='text' className="form-control" placeholder='Digite seu e-mail' value={form.email} onChange={onChange('email')} />
            <br/>
            <label>Senha:</label>
            <input type='password' className="form-control" placeholder='Digite sua senha' value={form.passwd} onChange={onChange('passwd')} />
            <br />
            <button onClick={() => {
                auth.signInUser.signInUser(form.email, form.passwd)
            }} className='btn btn-primary'>Entrar</button>
            <br/>
        </ >
    )
}
export default SignInUser