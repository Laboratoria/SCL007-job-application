import React, { Component } from 'react';
import './SeekerImage.css';

class SeekerImage extends Component {

    serchRef = React.createRef();

    getDatos = (event) => {
        event.preventDefault();
        const dato = this.serchRef.current.value;
        this.props.datoSerch(dato);
    }

    render() {
      return (
        <form onSubmit={this.getDatos}>
            <div className="container">
             <div className="">
                  <i id="iconoPinterest" className="fab fa-pinterest "></i>
                  <i id="iconoSerch" className="lupa fas fa-search"></i>
	                <input className="input" ref={this.serchRef} type="text" placeholder=" Serch"></input>     
            
                <button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>    
           
            <select name="pines" className="pines">
              <option>Tus Pines</option>
              <option>Todos los Pines</option>
              <option>Pines de Productos</option>
              <option>Gente</option>
              <option>Tableros</option>
            </select>
            <i className="user fas fa-user-circle"></i>
            <i className="name">Martha</i>
            <i className="home">Home</i>
            <i className="next">Siguiendo</i>   
            <i className="campana icono-campana fas fa-bell size:7x"></i>
            <i className="comentario icono-campana fas fa-comment-dots"></i>
            <i className="mas fas fa-ellipsis-h"></i>
            </div>
            </div>
        </form>
      );
    }
  }
  
  export default SeekerImage;