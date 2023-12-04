//Login.js
import './styles/Login.css';
import React, { Component } from 'react';


class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.state.username;
    this.props.onLogin(username);
  };

  render() {
    return (
      <div class="Login-container">          
        <div class="Login" >
        <img src={process.env.PUBLIC_URL + '/Assets/logoa.png'} alt="Proyecto final" />

          <br/>

          <form onSubmit={this.handleSubmit}>
            <input
              className='username'
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            
            <br />

            <button 
            className='iniciar-sesion'
            type="submit">Iniciar Sesion</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;