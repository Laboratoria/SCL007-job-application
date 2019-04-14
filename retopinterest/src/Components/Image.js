import React from 'react';
import './Image.css';

const Image = (props) => {
    
 const {largeImageURL, key, previewURL, tags} = props.image;
    return(
            <div className="galeria">    
                <div className="card">
                    <figure>
                    <div className="modal">
   
                    <img className="img" src={previewURL} alt={tags}  onClick= {largeImageURL} />
                    <a className=" img btn-recient" name="Ver" href={largeImageURL}  target ="_blank"  role="button" onClick= {largeImageURL} >...</a>

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

// <icono className="fas fa-thumbtack"></icono>