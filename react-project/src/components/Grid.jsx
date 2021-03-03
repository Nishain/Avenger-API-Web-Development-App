import axios from 'axios'
import React,{Component} from 'react'
import Avenger from './Avenger'
class Grid extends Component{
    state = {
        data:[]
    }
    async componentDidMount(){
        const port = 5000
        const avengers = await axios.get(`http://localhost:${port}/avengers/`)
        this.setState({data:avengers.data})
    }
    render(){
        return( 
        <div className="container">
            <div className="row">
                {this.state.data.map((avenger,index)=><div className="col" key={index}><Avenger data={avenger} onLiked={()=>{this.onLikedPost(avenger)}} /></div>)}     
            </div>
        </div>)
    }
    async onLikedPost(avenger){
        const index = this.state.data.findIndex(a=>a._id == avenger._id)
        this.state.data[index].likeCount = await (await axios.put(`http://localhost:${5000}/avengers/${avenger._id}`,{likeCount:1})).data.likeCount
        this.setState({data:this.state.data})
    }
}
export default Grid