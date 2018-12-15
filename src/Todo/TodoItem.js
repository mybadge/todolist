import React, { Component } from 'react'



class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.deleteItemClick = this.deleteItemClick.bind(this);
    }

    render() {
        return (
            <li onClick={this.deleteItemClick} >{this.props.item}</li>
        )
    }

    deleteItemClick() {
        console.log(this.props.index);
        const { deleteItem, index } = this.props;

        deleteItem(index);
        
    }
}

export default TodoItem;