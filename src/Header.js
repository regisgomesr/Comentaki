import React, { useContext } from 'react'
import { Nav } from 'reactstrap'
import { AuthContext } from './auth'

const Header = () => {

    const auth = useContext(AuthContext)

    if(auth.user === null){
        return null
    }

    return(
        <Nav className='navbar navbar-light bg-light' color='light' light expand='md'>
            <div className='container'>
                <a className='navbar-brand'>Comentaki</a>
                <form className='form-inline'>
                    <button onClick={auth.signout} className='btn btn-outline-danger my-2 my-sm-0'>Sair</button>
                </form>
            </div>
        </Nav>
    )
}
export default Header