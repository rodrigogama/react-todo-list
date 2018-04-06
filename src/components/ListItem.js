import React, { Component } from 'react'

class ListItem extends Component {
  // buttonStyle = {
  //   marginLeft: `8px`
  // }

  state = {
    checked: this.props.checked
  }

  handleDelete = (ev) => {
    ev.stopPropagation()
    this.props.onDelete()
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        <input type="checkbox" checked={item.checked} onChange={() => this.props.onChange(item)}/>
        {item.description}
      </li>
    )
  }
}

export default ListItem
