import React from 'react';
import './Image.css';

const Image = (props) => {
    
 const {largeImageURL, previewURL, tags} = props.image;
    return(
            <div className="galeria">    
                <div className="card">
                    <figure><icono className="fas fa-thumbtack"></icono>
                        <img className="img" src={previewURL} alt={tags} />
                    <div className="modal">
                        <a className="btn-recient" href={largeImageURL} target =" _blank" onClick={largeImageURL} >Guardar</a>
                    </div>
                    </figure>
                </div> 
            </div>
    );
}

export default Image;

//  <a className="btn quotes" name="Quotes" href=" # "  role="button" onClick= {this.updateSerch} >Quotes</a>
// arreglar a modal porque abre en una hoja nueva
//link <a className="modal" href= {largeImageURL} target ="_blank" > 