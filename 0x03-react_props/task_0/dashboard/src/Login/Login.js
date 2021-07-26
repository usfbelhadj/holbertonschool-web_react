import React from 'react'
import './Login.css'

function Login(){
    return(
      <React.Fragment>
          <div className="App-body">
          <p>Login to access the full dashboard</p>
          <div className="form">
          <label for="Email">Email: </label>
          <input type="text"></input>
          <label for="Password">Password: </label>
          <input type="password"></input>
          <input type="button" value="OK"></input>
          </div>
        </div>
      </React.Fragment>
    )
}
export default Login