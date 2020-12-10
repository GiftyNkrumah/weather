import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {LoginContext} from '../contexts/LoginContext'

function Login() {
    
    const {setLogged, username, setUsername} = useContext(LoginContext)
    const [password, setPassword] = useState("")
 
    function FormValidation (e) {
        // Check if username is equal to password
            if (username === password) 
            {
                e.preventDefault()
                setLogged(true) 
            } else
            {
                alert("Username or password incorrect!")
            }
        }
    
    return (
        <div className="case">
            <h2>Log in</h2>
            <form onSubmit={FormValidation}>
                <div className="form-group">
                    <input 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)} 
                        value={username} 
                        className="form-control" 
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        className="form-control" 
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Log in</button>
            </form><br/>
            <p>New here? <Link to='/signup'>Create an account</Link>.</p>
        </div>
    )
}

export default Login
