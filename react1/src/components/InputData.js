import {Component} from "react";

export default class InputData extends Component {
    constructor() {
        super();
        this.state={
            UserName:"Rowan",
            Email:"rowanahmedali11@gmail.com",
            Password:""
        }
    }
    render() {
        return (
            <div>
            <input
                value={this.state.UserName}
                onChange={(e)=>{
                    this.setState({UserName : e.target.value})

                }
                }
            />
            <h1>{this.state.UserName}</h1>
            <input value="Reset"
                    type="button"
                   onClick={(e)=>{
                       this.setState({UserName : " "})
                   }

                   }

            />

            </div>

        );
    }
}