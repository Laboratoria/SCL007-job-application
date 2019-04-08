import React, { Component } from 'react';
import './App.css';
import SeekerImage from './Components/SeekerImage';

class App extends Component {

  state = {
    dato : ''
  }
  
  consultApi = () => {
    console.log('desde consultar api')
  }

  datoSerch = (dato) => {
    this.setState({
      dato
    }, () => { this.consultApi(); //se ejecuta la funcion despues de actualizar el state
    }) 
  }

  render() {
    return (
      <div className="container">
       <SeekerImage datoSerch={this.datoSerch} />
      </div>
    );
  }
}

export default App;
