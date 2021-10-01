import React,{Component} from 'react'
import moment from 'moment'
import ModalExampleDimmer from './modal'
import axios from 'axios'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
import Loader from './loader';

class Task extends Component{
  componentWillReceiveProps(){
  
    $(".mcell-task").draggable({
      appendTo: "body",
      cursor: "move",
      helper: 'clone',
      revert: "invalid"
  });
  
  $(".mcell").droppable({
      tolerance: "intersect",
      accept: ".mcell-task",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {        
          $(this).append($(ui.draggable));
          console.log($(this).find("li").attr('id'))
      }
  });
  }
api = id => {
  axios.delete('/tasks/'+id)
  .then(function (response) {
    if(response.status==="1")
      alert("ok")
    console.log(response);
  })
  .then(()=>{
  })
  .catch(function (error) {
    console.log(error);
  });
}
getFirstName = (contributor) => {
  return contributor ? contributor.firstName : "";
}

getLastName = (contributor) => {
  return contributor ? contributor.getLastName : "";
}

  render(){
    const {tasks,loading,filter} = this.props;
      let content;
      if (loading) {
        content = <div className="loader">
         <Loader/>
          </div>;
      }
      else{
        content = 
        tasks.filter(i=>i.status===filter)
        .map((i,index)=>{
          let fName = this.getFirstName(i.contributors[0]);
          let lName = this.getLastName(i.contributors[0]);
          let profilePhoto = i.contributors[0] ? i.contributors[0].profilePhoto : "profile.png";
          return(
            <li id={i.id} className="mcell-task" key={index}>
              <span className="task-name">
                <span>{i.title}</span>
                <i id="delete" className="fas fa-times" onClick={() => this.api(i.id)}></i>
              </span>
              <span className="task-details">{i.content}</span>
              <div>
              <span className="task-due">{moment(i.dueDate).format("DD.MM.YYYY")}</span>
              <span className="task-contributors">
                <img alt={fName + ' '+ lName } title={fName + ' '+ lName } src={'/assets/img/' + profilePhoto}/>
              </span>
            </div>
            <div className={i.color}/>
            <ModalExampleDimmer propContent={i} classType="btnDashboard"/>
            </li>
          )
        })
    }
    return(
      <div className="process">{content}</div>
    )
  }
}
export default Task;