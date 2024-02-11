import React, {Component} from "react";
import axios from "axios";

class WebServiceOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            flag:0
        };
    }
    

    MYGetAPI=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                items: response.data,
                flag:0
            });
        })
        .catch(error => {
            alert("error");
            console.log(error);
        })
        
      }

    render() {

        const { items, flag } = this.state;

        if(flag == 0) {

        return(
            <div>
            <h1> { this.props.name } { this.props.id } </h1>
            <button onClick = {this.MYGetAPI}>
               My Get API
            </button>

            <h1>GET API RESULTS AFTER BUTTON CLICK</h1>
            <ul>
                {items.map(item => (
                    <li key= {item.name}>
                        {item.id} {item.title} 
                    </li>
                ))}
            </ul>

            </div>
        );
        }
        else{

            return (
            
            <div>
        

            <h1>Post api submitted successfully </h1>

            </div>
            );
        }
    }

}
export default WebServiceOne;