import React, { Component } from 'react';
import './App.css';
import SeekerImage from './Components/SeekerImage';
import Result from './Components/Result';
import Buttons from './Components/Buttons';

class App extends Component {

 constructor(props) {
    super(props)

    this.state = {
      page: 1,
      serch: " ",
      resultSerch: [],
      carga: true,
      dato : '',
      images:[]  //array para usar con el fetch
    }
    window.onscroll = () => {
    if (this.state.carga === true) {
      return
    }
    if (  // tamaño del HTML
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight // tamaño de la pagina
    ) {
      this.cargarMas();
    }
  };
  }
  
  consultApi = () => {
    const dato = this.state.dato;
    const url = `https://pixabay.com/api/?key=12127638-ec7d0e85d587ee82f41e48324&q=${dato}&per_page=200`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(result => this.setState({images: result.hits}))
  }

  cargarMas = () => {
    let pageNew = this.state.page + 1
     // toma el estado de la imagen anterior
    let oldImage = this.state.resultSerch
    fetch(`https://pixabay.com/api/?key=12127638-ec7d0e85d587ee82f41e48324&q=${this.state.serch}&image_type=photo&lang=es&page=${pageNew}`)
      .then(resp => resp.json())
      .then(datos => {
        this.setState({
          resultSerch: oldImage.concat(datos.hits), // metodo para unir mis arreglos
          page: pageNew,
          carga: false,
        })
      })
  }


  // utilizo fetch para consumir la Api
  // lee o da error
  // Busqueda Actualizada
  updateSerch(newSerch = "") { 
    newSerch.replace(" ", "+") // toma los espacios
    fetch(`https://pixabay.com/api/?key=12127638-ec7d0e85d587ee82f41e48324&q=${newSerch}`)
     .then(result => result.json())
      .then(banco => {
        this.setState({
          page: 1,
          resultSerch: banco.hits,
          serch: newSerch,
          carga: false,
        })
      })
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
        <Buttons updateSerch={this.updateSerch.bind(this)} />
          <div id="galeria">
            <Result 
            images={this.state.images}
            />
      </div>
    </div>

    );
  }
}

export default App;