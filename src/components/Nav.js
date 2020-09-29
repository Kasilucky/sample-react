import React, {Component} from "react"

class  Nav extends Component {
    constructor(props){
        super(props)
        this.state={            
            count:0,
            title:"Count" 
        } 
        // this.onDecrement=this.onDecrement.bind(this)
    }

     onIncrement=()=> this.setState({count:this.state.count+1})
     

     onDecrement=()=> this.setState({count:this.state.count-1})
     

    render(){
        const {count, title}=this.state
        return(
            <React.Fragment>
                <p>{title}: {count}</p>
                <div>
                    <button onClick={this.onIncrement}>increment</button>
                    <button onClick={()=> this.setState({count:this.state.count-1})}>decrement</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Nav