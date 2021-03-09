import axios from 'axios'
import React,{Component} from 'react'
import Avenger from './Avenger'
import EditAvenger from './EditAvenger'
class Grid extends Component{
    state = {
        data:[]
    }
  
    async componentDidMount(){
        this.finishEdtingAvener.bind(this)
        const port = 5000
        const avengers = await axios.get(`http://localhost:${port}/avengers/`)
        this.setState({data:avengers.data})
    }
    render(){
        return( 
        <div className="container">
            <div className="row">
                {this.state.data.map(avenger=>{
                     return avenger.edit? <EditAvenger data={avenger} key={avenger._id} onSave={(a,data)=>this.finishEdtingAvener(a,data)}/> :
                    <div className="col" key={avenger._id}>
                        <Avenger data={avenger} 
                            onLiked={()=>{this.onLikedPost(avenger)}} 
                            onDelete={()=>{this.deleteAvenger(avenger)}}
                            onEdit={()=>{this.startEditingAvenger(avenger)}}
                        />
                    </div> 
                })
            }
            </div>
        </div>)
    }
    async deleteAvenger(avenger){
        await axios.delete(`http://localhost:${5000}/avengers/${avenger._id}`,{id:avenger._id})
        const index = this.state.data.findIndex(a=>a._id == avenger._id)
        this.state.data.splice(index,1)
        this.setState({data:this.state.data}) 
    }
    async onLikedPost(avenger){
        const index = this.state.data.findIndex(a=>a._id == avenger._id)
        this.state.data[index].likeCount = await (await axios.put(`http://localhost:${5000}/avengers/${avenger._id}`,{likeCount:1})).data.likeCount
        this.setState({data:this.state.data})
    }
    startEditingAvenger(avenger){
        avenger.edit = true
        this.setState({})
    }
    async finishEdtingAvener(avenger,data){    
        if(data.movies){
            data.movies = data.movies.split(",")
        }
        console.log(data)
        const result = (await axios.put(`http://localhost:${5000}/avengers/${avenger._id}`,data)).data
        avenger.edit = undefined
        const index = this.state.data.findIndex(a=>a._id ==  avenger._id)
        console.log(result)
        this.state.data[index] = result
        this.setState({data:this.state.data})
    }
    
}
export default Grid