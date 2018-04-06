import React, { Component } from 'react'

class ListContainer extends Component {
  render() {
    return (
      <div className="list-container">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default ListContainer
