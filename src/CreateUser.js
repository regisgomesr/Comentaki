import React, { useContext } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <>
            <br />
            {JSON.stringify(auth.createUser)}
            <br />
            <button onClick={() => {
                auth.createUser.createUser('regisgomesrr@gmail.com', 'abc123')
            }}>Logar</button>
        </ >
    )
}
export default CreateUser