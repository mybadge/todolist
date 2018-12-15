import React, { Component } from 'react'

class Todolist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ["aa", "bb"]
        }

        this.handBtnClick = this.handBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <div>
                <input onChange={ this.handleInputChange }></input>
                <button 
                    style={{color: 'red'}} 
                    onClick={this.handBtnClick} 
                >提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index} onClick={this.handleItemDelete.bind(this, index)} >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState((prevState)=> ({
            inputValue: value
        }));
    }

    handBtnClick() {
        this.setState((prevState)=> ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState((prevState)=> ({
            list: list
        }))
    }
}

export default Todolist;