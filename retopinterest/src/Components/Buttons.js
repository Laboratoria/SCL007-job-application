import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {

  updateSerch = (event)=>{
    this.props.updateSerch(event.target.name)
 
  }

  render() {
    return (
      <div >
        <div className="container">
          <div className="buttons">
            <a className="btn quotes" name="Quotes" href=" # "  role="button" onClick= {this.updateSerch} >Quotes</a>
            <a className="btn fashion" name="Fashion" href=" # " role="button" onClick={this.updateSerch}>Fashion</a>
            <a className="btn computer" name="Computer" href=" # " role="button" onClick={this.updateSerch}>Computer</a>
            <a className="btn style" name="Style" href=" # " role="button" onClick={this.updateSerch}>Style</a>
            <a className="btn woman" name="Woman" href=" # " role="button" onClick={this.updateSerch}>Woman</a>
            <a className="btn pictures" name="Pictures" href=" # " role="button" onClick={this.updateSerch}>Pictures</a>
            <a className="btn poster" name="Poster" href=" # " role="button" onClick={this.updateSerch}>Poster</a>
            <a className="btn logo" name="Logo" href=" # " role="button" onClick={this.updateSerch}>Logo</a>
            <a className="btn architecture" name="Architecture" href=" # " role="button" onClick={this.updateSerch}>Architecture</a>
            <a className="btn faces" name="Faces" href=" # " role="button" onClick={this.updateSerch}>Faces</a>
            <a className="btn perfil" name="Perfil" href=" # " role="button" onClick={this.updateSerch}>Perfil</a>
            <a className="btn flowers" name="Flowers" href=" # " role="button" onClick={this.updateSerch}>Flowers</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons;