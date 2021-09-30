
import React, { Component} from 'react';
import { Form } from 'react-bootstrap';
import "./style.css";
import Header from '../common/header';

export default class JWTDecoder extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {"jwtToken": "", "decodedToken": ""};
  }

  handleOldChange = (e) => {
    e.stopPropagation();
    const [otherKey, otherValue] = this.updateValue(e.target.name, e.target.value);
    this.setState({[e.target.name]: e.target.value, [otherKey]: otherValue});
  }

  updateValue = (key, value) => {
    const otherKey = key === "jwtToken" ? "decodedToken" : "jwtToken";
    return [otherKey, otherKey === "jwtToken" ? this.code_value(value) : this.code_value(value)];
  }
  
  code_value = (content) => {
    try {
      return content.split('.').splice(0, 2)
      .map(c => c.replace(/-/g, '+').replace(/_/g, '/'))
      .map(c => atob(c).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''))
      .map(decodeURIComponent)
      .map(JSON.parse)
      .map(c => JSON.stringify(c, null, 4))
    } catch (error) {
      return "Not a valid jwt token, please provide valid token.";
    }
  }

  addHeadersAndGetAsString = (_array) => {
    if (_array && _array instanceof Array && _array.length > 0) {
      const payload = _array.length > 1 ? <span><h3><b>Payload: </b></h3> <pre>{_array[1]}</pre></span> : "";
      return <div><h3><b>Headers: </b></h3> <pre>{_array[0]}</pre> <br></br> {payload}</div>;
    }
    return _array;
  }

	render = () => {
    const {jwtToken, decodedToken} = this.state;
		return (
      <div className="woleftcon">
        <Header/>
        <h6>&nbsp;</h6>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md">
                <textarea name="jwtToken" value={jwtToken} placeholder="JWT Token..." onChange={this.handleOldChange} rows={35} cols={150}/>
            </div>
            <div className="col-md">
              <div>
                {this.addHeadersAndGetAsString(decodedToken)}
                {/* <textarea name="decodedToken" value={this.addHeadersAndGetAsString(decodedToken)} placeholder="Plain content..." onChange={this.handleOldChange} rows={35} cols={150}/> */}
              </div>
            </div>
          </div>
        </Form>
      </div>
		);
	};
}