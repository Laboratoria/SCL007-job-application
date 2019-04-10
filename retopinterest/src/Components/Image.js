import React from 'react';
import './Image.css';

const Image = (props) => {
    const {largeImageURL, previewURL, tags} = props.image;
    return(
        <div className="container">
        <section id="galeria" className="cards">
        <div className="card">
        <article>
        <a className="card-image" href= {largeImageURL}  target="_blank" > 
        <figure>
            <img  src={previewURL} alt={tags} />
        </figure>       
            </a>      
        </article>
        </div>
        </section>
        </div>
    );
}

export default Image;

// arreglar a modal porque abre en una hoja nueva