
import React, { Component} from 'react';
import { Form } from 'react-bootstrap';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import "./style.css";
import Header from '../common/header';

export default class CustomJsonDiff extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {"oldValue": null, "newValue": null};
  }

  handleOldChange = (e) => {
    e.stopPropagation();
    const state = {...this.state};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

	render = () => {
    const {oldValue, newValue} = this.state;
		return (
      <div className="woleftcon">
        <Header/>
        <h6>&nbsp;</h6>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md">
                <textarea name="oldValue" defaultValue={oldValue} placeholder="Left side json..." onChange={this.handleOldChange} rows={35} cols={120}/>
            </div>
            <div className="col-md">
              <div>
                <textarea name="newValue" defaultValue={newValue} placeholder="Right side json..." onChange={this.handleOldChange} rows={35} cols={120}/>
              </div>
            </div>
          </div>
        </Form>
        <ReactDiffViewer oldValue={oldValue || "{}"} newValue={newValue || "{}"} compareMethod={DiffMethod.WORDS} splitView={true} />
      </div>
		);
	};
}