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
            <div className="row">
             <div className="form-group col-md-8">
                <input type="submit" className="fas fa-search"></input>
                <span className="input-group-addon"><span className="glyphicon glyphicon-search">
                </span></span>
	            <input ref={this.serchRef} type="text" className="form-control" placeholder="Buscar"></input>
             </div>
             <div>
                <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>    
            </div>
            <i className=" icono-campana fas fa-comment-dots"></i>
            <i className="icono-campana fas fa-bell size:7x"></i>
            <i class="fas fa-ellipsis-h"></i>
            </div>
        </form>
      );
    }
  }
  
  export default SeekerImage;
  