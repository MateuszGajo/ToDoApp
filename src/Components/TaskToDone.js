import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../Store/Actions/rootAction';
import { changeTaskStatus } from '../Store/Actions/rootAction';


const TaskToDone = (props) => {
    const { task } = props;
    const important = {
        color: 'red'
    }
    return (
        <div className="card  z-depth-0">
            <div className="card-content">
                <span style={task.important ? important : null} className="card-title">
                    {task.text}
                </span>
                <p>Do <span>{task.date}</span></p>
            </div>
            <div className="card-action">
                <a href="#" onClick={() => props.changeTaskStatus(task)}>Zostało zrobione</a>
                <a href="#" onClick={() => props.deletePost(task)}>X</a>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (post) => dispatch(deletePost(post)),
        changeTaskStatus: (post) => dispatch(changeTaskStatus(post))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TaskToDone);