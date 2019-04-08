import React, { Component } from 'react';

class Result extends Component {

    
    showImages=() =>{
        const images = this.props.images;

        if(images.length === 0) return null; //prevengo a mostrar el array vacio cuando la Api no este disponible

        return()
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