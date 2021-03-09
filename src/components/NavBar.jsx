import React,{Component} from 'react'
import { Link } from 'react-router-dom'
class NavBar extends Component{
    render(){
        return(
            <nav className="nav navbar-light bg-light">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/avengers" className="nav-link">Avengers</Link>
            </nav>
        )
    }
}
export default NavBar