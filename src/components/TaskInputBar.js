import React, { Component } from 'react'

class TaskInputBar extends Component {
  state = {
    taskDescription: ''
  }

  addTask = (ev) => {
    this.props.onAddTask(this.state.taskDescription)
    this.setState({
      taskDescription: ''
    })
  }

  handleChange = (ev) => {
    this.setState({
      taskDescription: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <input value= {this.state.taskDescription} onChange={this.handleChange} type="text"/>
        <button onClick={this.addTask}>Add task</button>
      </div>
    )
  }
}

export default TaskInputBar