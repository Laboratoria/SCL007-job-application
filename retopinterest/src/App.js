import React, { Component } from 'react';
import './App.css';
import SeekerImage from './Components/SeekerImage';
import Result from './Components/Result';
import Buttons from './Components/Buttons';

class App extends Component {

 constructor(props) {
    super(props)

    this.state = {
      serch: '',
      images:[] , //array para usar en el fetch
      page: 1,
      carga: true
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

  cargarMas = () => {
    let pageNew = this.state.page + 1
     // toma el estado de la imagen anterior
    let oldImage = this.state.images
    fetch(`https://pixabay.com/api/?key=12127638-ec7d0e85d587ee82f41e48324&q=${this.state.serch}&image_type=photo&lang=es&page=${pageNew}&per_page=20`)
      .then(resp => resp.json())
      .then(datos => {
        this.setState({
          images: oldImage.concat(datos.hits), // metodo para unir mis arreglos
          page: pageNew,
          carga: false,
        })
      })
  }

  componentDidMount() {
    this.updateSerch()
  }



  // utilizo fetch para consumir la Api
  // lee o da error
  // Busqueda Actualizada
  updateSerch(newSerch = "") { 
    newSerch.replace(" ", "+") // toma los espacios
    fetch(`https://pixabay.com/api/?key=12127638-ec7d0e85d587ee82f41e48324&q=${newSerch}&image_type=photo&lang=es&page=${newSerch}&per_page=20`)
     .then(resp => resp.json())
      .then(datos => {
        this.setState({
          page: 1,
          images: datos.hits,
          serch: newSerch,
          carga: false,
        })
      })
  }


  render() {
    return (
      <div>
      <SeekerImage updateSerch={this.updateSerch.bind(this)} />
        <Buttons updateSerch={this.updateSerch.bind(this)} />
          <div id="galeria" className="imgg">
            <Result
            images={this.state.images}
            />
      </div>
    </div>

    );
  }
}

export default App;