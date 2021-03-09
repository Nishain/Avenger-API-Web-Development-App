import {React,Component} from 'react'
class EditAvenger extends Component{
  render(){
    return (<div className="card">
    <img src={this.props.data.imageUrl} className="card-img-top img-wrap" alt="..." />
    <div className="card-body">
    <form onSubmit={(evt)=>{
      evt.preventDefault()
        this.props.onSave(this.props.data,this.state)
      }}>
        <div className="form-group">
            <input type="name" name="name" className="form-control" onChange={(evt)=>this.onFieldValueChange(evt)} defaultValue={this.props.data.name}  placeholder="Avenger Name" />   
        </div>  
        <p className="card-text">Someick example text to build on the card title and make up the bulk of the card's content.</p>
        <h4>movies</h4>
        <div className="form-group">
            <input type="name" name="movies" className="form-control" onChange={evt => this.onFieldValueChange(evt)} defaultValue={this.props.data.movies.join(",")}/>
        </div>
      <button type="submit" className="btn btn-primary">Save</button>
      </form>
      </div></div>)
  }
  onFieldValueChange(evt){
    var value = {}
    value[evt.target.name] = evt.target.value
    this.setState(value)
  }
}

export default EditAvenger