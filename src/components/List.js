import React, { Component } from 'react'
import ListItem from './ListItem.js'
class List extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return <ListItem key={index} item={item} onDelete={this.props.onDeleteTask} onChange={this.props.onChange}></ListItem>
        })}
      </ul>
    )
  }
}

export default List
