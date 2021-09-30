import React, { Component } from 'react';

import JSONEditorReact from './JSONEditorReact';
import './darktheme.css';
import './custom.css';
import Header from '../common/header';

const schema = {
  required: []
};

const json = {};

const modes = ['tree', 'form', 'view', 'code', 'text'];

class CustomJsonEditor extends Component {
  state = {
    schema,
    text: JSON.stringify(json, null, 2),
    mode: 'code'
  };

  render() {
    return (
      <div className="custom woleftcon">
        <Header/>
        <div className="contents">
          <div className="mode">
            mode: <select value={this.state.mode} onChange={this.onModeChangeSelect}>
              {
                modes.map(mode => <option key={mode} value={mode}>{mode}</option>)
              }
            </select>
          </div>
          <JSONEditorReact
              schema={this.state.schema}
              text={this.state.text}
              mode={this.state.mode}
              modes={modes}
              indentation={4}
              onChangeText={this.onChangeText}
              onModeChange={this.onModeChange}
          />
          <div className="code">
            <pre>
              <code>
                {this.state.text}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }

  onChangeText = (text) => {
    this.setState({ text });
  };

  onModeChangeSelect = (event) => {
    this.setState({ mode: event.target.value });
  };

  onModeChange = (mode) => {
    this.setState({ mode });
  };
}

export default CustomJsonEditor;