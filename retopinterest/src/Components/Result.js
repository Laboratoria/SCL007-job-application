import React, { Component } from 'react';
import Image from './Image';

class Result extends Component {

    
    showImages=() =>{
        const images = this.props.images;

        if(images.length === 0) return null; //prevengo a mostrar el array vacio cuando la Api no este disponible

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {this.props.images.map(image => (
                        <Image
                            key={image.id}
                            image={image}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }


    render() {
        return (
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        );
    }
}
export default Result;