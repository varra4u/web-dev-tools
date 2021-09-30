import React,{Component} from 'react'
import {Link} from 'react-router'
import AddUser from '../forms/addUser'

class Header extends Component{
    render(){
      const addUserElement = this.props.signup ? <AddUser/> : null;
        return(
                <header>
                  <div className="container containerDashboard">
                    <div className="mainMenu">
                      <ul>
                      <Link to="/story/1" activeClassName="active"><li><i className="fa fa-check-square"></i><span className="mainMenuText">Todo Items</span></li></Link>
                      <Link to="/json_editor" activeClassName="active"><li><i className="fa fa-cog"/><span className="mainMenuText">Json Editor</span></li></Link>
                      <Link to="/json_diff" activeClassName="active"><li><i className="fa fa-binoculars"/><span className="mainMenuText">Json Compare</span></li></Link>
                      <Link to="/text_diff" activeClassName="active"><li><i className="fa fa-binoculars"/><span className="mainMenuText">Text Compare</span></li></Link>
                      <Link to="/base64_codec" activeClassName="active"><li><i className="fa fa-fast-forward"/><span className="mainMenuText">Base64 Codec</span></li></Link>
                      <Link to="/jwt_decode" activeClassName="active"><li><i className="fa fa-handshake"/><span className="mainMenuText">JWT Decoder</span></li></Link>
                      </ul>
                    </div>
                    <div className="profilewidget">
                      {addUserElement}
                    </div>
                  </div>
                </header>
        )
    }
}
export default Header