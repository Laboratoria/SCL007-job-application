import React, { Component } from 'react';
import './SeekerImage.css';

class SeekerImage extends Component {

    getDatos = (event) => {
        if (event.key==="Enter"){
        this.props.updateSerch(event.target.value);
    }
  }

    render() {
      return (
        <form >
            <div className="content">
              <div className="input-header">
                <icono id="iconoPinterest" className="fab fa-pinterest"> </icono>
                  <lupa id="iconoSerch" className="lupa fas fa-search"> </lupa>
	                  <input className="input"  onKeyPress={this.getDatos} type="text" placeholder=" Serch"></input>    
                      <close type="button" className="close" aria-label="Close"> <span aria-hidden="true">&times; </span></close>   
                        <select className="pines">
                          <option id="options">Tus Pines</option>
                          <option id="options">Todos los Pines</option>
                          <option id="options">Pines de Productos</option>
                          <option id="options">Gente</option>
                          <option id="options">Tableros</option>
                          </select>
              </div>
              <div className="iconos-header">         
                 <ul className="picture">
                    <li className="user fas fa-user-circle"> </li>
                    <li className="name">Martha</li>
                    <li className="home">Home</li>
                    <li className="next">Siguiendo</li>   
                    <li className="campana icono-campana fas fa-bell size:7x"> </li>
                    <li className="comentario icono-campana fas fa-comment-dots"> </li>
                    <li className="mas fas fa-ellipsis-h"> </li>
                </ul>
              </div>
            </div>
        </form>
      );
    }
  }
  
  export default SeekerImage;