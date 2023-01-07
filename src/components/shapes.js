import {React , Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./shapes.css"




class Shapes extends Component {
    constructor (props){
        super(props);
        this.shape = ''
        this.state = {
            color :"",
            shape: ""
        }
    }

    hadlChange= (e)=>{

        // switch(e.target.value){
        //     case "square": 
        //         this.shape= <div></div>
        //         break;
        //     case "circle": 
        //         break;
        // }

        // if(e.target.value === "square"){
        //     this.shape = <div className="square p-5 " style={{backgroundColor :` rgb(${this.state.color})`}}></div>
        // }else if (e.target.value === "circle"){
        //     this.shape = <div className="circle p-5 " style={{backgroundColor : this.state.color}}></div>
        // }else if (e.target.value === "triangle"){
        //     this.shape = <div className="triangle" style={{backgroundColor : this.state.color}}></div>
        // }else if (e.target.value === "reetangle"){
        //     this.shape = <div className="reetangle" style={{backgroundColor : this.state.color}}></div>
        // }

        this.setState(
            {
                ...this.state,
                shape : e.target.value
            }
        )
        
    }

    colorChange = (e)=>{
        this.setState (
            {
                ...this.state,
                color : e.target.value
            }
        )
        
        console.log(e.target.value)
         if(this.state.shape === "square"){
            this.shape = <div className="square p-5 " style={{backgroundColor :this.state.color}}></div>
        }else if (this.state.shape === "circle"){
            this.shape = <div className="circle p-5 " style={{backgroundColor : this.state.color}}></div>
        }else if (this.state.shape === "triangle"){
            this.shape = <div className="triangle " style={{borderColor : this.state.color}}></div>
        }else if (this.state.shape === "reetangle"){
            this.shape = <div className="reetangle p-5" style={{backgroundColor : this.state.color}}></div>
        }
    }
    render(){
        return(
            <div className="bg-light p-5">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Shape : </label>
                        <select name="shape" id="" className="form-select" onChange={this.hadlChange}>
                            <option value="" selected disabled> select the shape : </option>
                            <option value="square">Square</option>
                            <option value="circle">Circule</option>
                            <option value="triangle">Triangle</option>
                            <option value="reetangle">Rectangle</option>
                        </select>

                        <label htmlFor="" className="form-label" >Color : </label>
                        <input type="color" name="" id="" onChange={this.colorChange} />
                    </div>
                    <div className="col-6">
                        {
                            this.shape
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default Shapes