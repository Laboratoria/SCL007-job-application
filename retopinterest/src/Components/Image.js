import React from 'react';
import './Image.css';

const Image = (props) => {
 const {largeImageURL, previewURL, tags} = props.image;
    return(
        <body>
            <div className="galeria">    
                <div className="card">
                    <figure><h1>Guardar</h1><img src={previewURL} alt={tags} />
                    </figure>       
                   
                </div>   
            </div>
        </body>   
    );
}

export default Image;

// arreglar a modal porque abre en una hoja nueva
//link <a className="modal" href= {largeImageURL} target ="_blank" > 