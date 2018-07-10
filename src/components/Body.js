import React, { Component } from "react"
import './Body.css'
class Body extends Component {


  render() {
    const renderTasks = this.props.list.map((tsk,index) =>
      <li className={`barrer-${tsk.done}`} key={tsk.id}>{tsk.task}
        <button onClick={this.props.taskDone} value={tsk.id}>{tsk.done === true ? 'Undone' : 'Done'}</button>
        <button onClick={this.props.deleteTask} value={tsk.id}>Delete</button>
      </li>)
    return (
      <div>
        <ul>
          {renderTasks}
        </ul>
      </div>
    )
  }
}

export default Body;
