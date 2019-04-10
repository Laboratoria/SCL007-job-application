import React from 'react';
import './Image.css';

const Image = (props) => {
    const {largeImageURL, previewURL, tags} = props.image;
    return(
        <section id="galeria" className="content">
        <article>
        <a href= {largeImageURL}  target="_blank" >
        <figure>
            <img  src={previewURL} alt={tags} />
        </figure>       
            </a>      
        </article>
        </section>
    );
}

export default Image;