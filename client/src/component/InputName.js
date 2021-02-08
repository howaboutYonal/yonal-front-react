import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

class InputName extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }
      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
      handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <label>
                별명:
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder = "별명" />
            </label>
            <Link to={{pathname: '/2',state: this.state.value}}>
              <input type="submit" value="확인" className="btn" />
            </Link>
        </form>
        );
    }
}

export default InputName;
