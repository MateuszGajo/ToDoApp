import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../Store/Actions/rootAction';


class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0, 10)
    }

    handleInput = (e) => {
        this.setState({
            date: e.target.value
        })
        console.log(this.state.date)

    }


    handleSubmit = (e) => {
        if (this.state.text.length > 2) {
            e.preventDefault();
            const date = document.querySelector('.datepicker').value;
            const addTask = {
                ...this.state,
                date: date,
                active: true,
                finishDate: null,

            }
            this.props.addTask(addTask);
        }
        else {
            alert('Za krótka nazwa');
        }
    }

    handleChange = (e) => {
        console.log(e.target.checked)
        this.setState({
            checked: e.target.checked
        })
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }




    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" id="addTask" onChange={this.handleTextChange} />
                        <label htmlFor="addTask">Nowe zadanie</label>
                    </div>
                    <div className="input-field">
                        <p>
                            <label htmlFor="checkbox">
                                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} id="checkbox" />
                                <span>Priorytet</span>
                            </label>
                        </p>
                    </div>
                    <div className="input-field">
                        <label htmlFor="date">Do kiedy zrobić</label>
                        <input type="text" id="date" className="datepicker" value={this.state.date} onChange={this.handleInput} />
                    </div>
                    <div className="input-field">
                        <button className="btn">Dodaj</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask) => dispatch(addTask(newTask))
    }
}

const mapStateToProps = (state) => {
    return {
        taskLength: state.tasks.length
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask);