import {Component} from "react";

const ImagesArray=['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

export default class SlideShow extends Component {
    constructor() {
        super();
        this.style = {
            img: {
                width: "300px",
                height: "300px",
                display: "block",
                borderRadius: "10px"
            }
        }
        this.state={
            i: 0,
        };

        }
    startfun = () => {
        this.setState({i:this.state.i+=1});
        if(this.state.i>=ImagesArray.length){
            this.setState({i:0});
        }else if(this.state.i<0){
            this.state.i=ImagesArray.length-1;
        }
        else{}
        if(this.state.i==ImagesArray.length){
            this.state.i=0;
        }
    }
    interval;
    startfuninterval = () => {
        this.interval= setInterval(this.startfun, 1000);
    }
    /*stop the slide show */
    stopfun = () => {
        clearTimeout(this.interval);
    }
    /*move forward image by image*/
    nextfun = () => {
        this.setState({i:this.state.i+=1});
        if(this.state.i==6){
            this.setState({i:0});
        }
        if(this.state.i>=ImagesArray.length){
            this.setState({i:0});
        }else if(this.state.i<0){
            this.setState({i:ImagesArray.length-1});
        }
        else{
        }
        if(this.state.i==ImagesArray.length){
            this.state.i=0;
        }
    }
    /*move backward image by image*/

    prevfun = () => {
        this.setState({i:this.state.i-=1});
        if(this.state.i>=ImagesArray.length){
            this.state.i=0;
        }else if(this.state.i<=0){
            this.setState({i:ImagesArray.length-1});
        }
        else{
        }
    }

    render() {
        return (
            <div>
                <input
                    type="button"
                    onClick={this.startfuninterval}
                    value="start"
                />
                <input
                    type="button"
                    onClick={this.stopfun}
                    value="stop"
                />
                <input
                type="button"
                onClick={this.nextfun}
                value="next"
            />
                <input
                type="button"
                onClick={this.prevfun}
                value="prev"
            />
                <img id="myImg" src={`./images/${ImagesArray[this.state.i]}`} style={this.style.img}/>
            </div>
        );
    }
}