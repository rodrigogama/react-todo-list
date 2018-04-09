// @flow

import React, { Component } from 'react';
import './styles/App.css';
import TaskInputBar from './components/TaskInputBar.js';
import ListContainer from './components/ListContainer.js';
import List from './components/List.js';

class App extends Component {
  state = {
    allSelected: false,
    tasks: [],
  };

  onAddTask = taskAdded => {
    // const arr = this.state.tasks
    // arr.push({
    //   description: taskAdded,
    //   checked: false
    // })

    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          description: taskAdded,
          checked: false,
        },
      ],
    });
  };

  onDeleteTask = taskIndex => {
    const arr = this.state.tasks;
    arr.splice(taskIndex, 1);

    this.setState({ tasks: arr });
  };

  handleSelectAll = ev => {
    ev.stopPropagation();

    this.setState({
      allSelected: !this.state.allSelected,
      tasks: this.state.tasks.map(t => {
        return {
          ...t,
          checked: !this.state.allSelected,
        };
      }),
    });

    console.log(this.state);
  };

  onSelectInput = selected => {
    console.log(selected);
  };

  render() {
    const selectButton =
      this.state.tasks.length > 0 ? (
        <button onClick={this.handleSelectAll}>
          {this.state.allSelected ? 'Clear all' : 'Select all'}
        </button>
      ) : null;

    return (
      <ListContainer title="To Do List">
        <TaskInputBar onAddTask={this.onAddTask} />
        <List
          items={this.state.tasks}
          onDeleteTask={this.onDeleteTask}
          onChange={selected => this.onSelectInput(selected)}
        />
        {selectButton}
      </ListContainer>
    );
  }
}

export default App;
