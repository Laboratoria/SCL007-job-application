import React from 'react';

const Image = (props) => {
    const {largeImageURL, previewURL, tags} = props.image;
    return(
       <div className="col-6 col-sm-5 col-md-3 mb-3">
        <div className="card">
            <img className="card-img" src={previewURL} alt={tags} />
                <div className="card-body">
                    <a href={largeImageURL}></a>
                </div>
        </div>

       </div>
    );
}

export default Image;