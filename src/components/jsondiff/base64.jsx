
import React, { Component} from 'react';
import { Form } from 'react-bootstrap';
// import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import "./style.css";
import Header from '../common/header';

export default class Base64Coder extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {"orgValue": "", "base64Value": ""};
  }

  handleOldChange = (e) => {
    e.stopPropagation();
    const [otherKey, otherValue] = this.updateValue(e.target.name, e.target.value);
    this.setState({[e.target.name]: e.target.value, [otherKey]: otherValue});
  }

  updateValue = (key, value) => {
    const otherKey = key === "orgValue" ? "base64Value" : "orgValue";
    return [otherKey, otherKey === "orgValue" ? this.code_value(atob, value) : this.code_value(btoa, value)];
  }

  code_value = (_function, content) => {
    try {
      return _function(content);
    } catch (error) {
      return "Not a valid base64 content, please provide valid content.";
    }
  }

	render = () => {
    const {orgValue, base64Value} = this.state;
		return (
      <div className="woleftcon">
        <Header/>
        <h5><b><i>Provide either side content, and the other side get's updated automatically.</i></b></h5>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md">
                <textarea name="orgValue" value={orgValue} placeholder="Plain text..." onChange={this.handleOldChange} rows={35} cols={120}/>
            </div>
            <div className="col-md">
              <div>
                <textarea name="base64Value" value={base64Value} placeholder="Base64 content..." onChange={this.handleOldChange} rows={35} cols={120}/>
              </div>
            </div>
          </div>
        </Form>
        {/* <ReactDiffViewer oldValue={oldValue || "{}"} newValue={newValue || "{}"} compareMethod={DiffMethod.CHARS} splitView={true} /> */}
      </div>
		);
	};
}