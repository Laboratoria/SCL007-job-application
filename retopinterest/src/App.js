import React, { Component } from 'react';
import './App.css';
import SeekerImage from './Components/SeekerImage';
import Result from './Components/Result';

class App extends Component {

  state = {
    dato : '',
    images:[]  //array para usar con el fetch
  }
  
  consultApi = () => {
    const dato = this.state.dato;
    const url = `https://pixabay.com/api/?key=12127638-ec7d0e85d587ee82f41e48324&q=${dato}&per_page=20`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(result => this.setState({images: result.hits}))
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
      <div className="row">
        <Result 
        images={this.state.images}
        />
      </div>

      </div>
    );
  }
}

export default App;
