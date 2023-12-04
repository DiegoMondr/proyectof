// App.js
import React, { Component } from 'react';
import Login from './Login';
import Principal from './Paginas/Principal';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    let content = null;

    if (isLoggedIn) {
      // Si está autenticado, mostrar la página de Operaciones
      content = <Principal onLogout={this.handleLogout} />;
    } else {
      // Si no está autenticado, mostrar la página de Login y establecer handleLogin como callback
      content = <Login onLogin={this.handleLogin} />;
    }

    return (
      <div className="LogOut">
        {content}
        {this.state.isLoggedIn && (
          <button className='logaut' onClick={this.handleLogout}>Cerrar Sesión</button>
        )}
      </div>
    );
  }
}

export default App;