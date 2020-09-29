import React, {Component} from "react"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Nav from "../components/Nav"
import Register from "../components/Register"

class  HomePage extends Component {
    constructor(props){
        super(props)
        this.state={            
            number:0,  
        }  
    }

    onIncrement =()=>{
        this.setState({number:this.state.number+1})
     }
     onDecrement = ()=>{
        this.setState({number:this.state.number-1})
     }

    render(){
        return(
            <div>
                <Home/>
                <Nav count={this.state.number} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
           </div>
        )
    }
}

export default HomePage


// import React, {Component, useState} from "react"
// import Footer from "../components/Footer"
// import Nav from "../components/Nav"
// import Register from "../components/Register"

// const HomePage=()=> {
//     const [number, setNumber]=useState(0)

//    const onIncrement =()=>{
//         console.log("hgjhfgjf", number)
//         setNumber(number+1)
//      }

//         return(
//             <React.Fragment>
//                 <Nav count={number} onIncrement={onIncrement}/>
//                 {/* <Register/>
//                 <Footer/> */}
//             </React.Fragment>
//         )
//     }

// export default HomePage