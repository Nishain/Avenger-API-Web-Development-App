import axios from 'axios'
import React, { Component } from 'react'
class Avenger extends Component {
  state = {
    likeCount:this.props.data.likeCount
  }
  async like(id) {
    console.log(`http://localhost:${this.props.port}/avengers/`)
    this.setState({likeCount:
      await (await axios.put(`http://localhost:${this.props.port}/avengers/${id}`,{likeCount:1})).data.likeCount
    })  
  }
  render() {
    
    const imagePath = "https://c0.klipartz.com/pngpicture/540/255/gratis-png-letras-de-hulk-thor-ultron-screen-team-pic-de-avengers-logo-de-avengers-gris-y-rojo.png"
    return (<div className="card">
      <img src={this.props.data.imageUrl} className="card-img-top img-wrap" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{this.props.data.name}</h5>
        <p className="card-text">Someick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <h4>movies</h4>
        <ul>
          {this.props.data.movies.map((movie,index)=><ul key={index}>{movie}</ul>)} 
        </ul>
        <button className="btn btn-primary" onClick={this.props.onLiked} >Like <span className="badge bg-warning text-dark">{this.props.data.likeCount}</span></button>
        </div>
        </div>)
  }
}
export default Avenger