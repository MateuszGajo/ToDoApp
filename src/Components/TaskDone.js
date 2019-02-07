import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../Store/Actions/rootAction';


const TaskDone = (props) => {
    const { task } = props;
    const finishTime = new Date(task.finishDate).toLocaleString();
    console.log(task.finishDate)
    return (
        <div className="card ">
            <div className="card-content">
                <span className="card-title">
                    {task.text}
                </span>
                <p> <span>(zrobić do {task.date})
                <br />
                    - potwierdzenie wykonania <span>{finishTime}</span>
                </span></p>
            </div>
            <div className="card-action">
                <a href="#" onClick={() => props.deletePost(task)}>X</a>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (post) => dispatch(deletePost(post)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TaskDone);