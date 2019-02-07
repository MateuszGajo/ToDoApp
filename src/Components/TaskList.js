import React from 'react';
import TaskToDone from './TaskToDone';
import TaskDone from './TaskDone';
import { connect } from 'react-redux';

const TaskList = (props) => {
    const { tasks } = props;

    const active = tasks.filter(task => task.active === true);
    const done = tasks.filter(task => task.active === false);
    if (done.length >= 2) {
        done.sort((a, b) => b.finishDate - a.finishDate)
    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0
        })
    }

    const activeTask = active.map(task => {
        return (<TaskToDone key={task.id} task={task} />)
    })
    const doneTask = done.map(task => {
        return (<TaskDone key={task.id} task={task} />)
    })

    return (
        <div className="section">
            <div className="row">
                <div className="col s12 l6">
                    <div className="cards-toDone">
                        <h3>Zadania do zrobienia</h3>
                        {activeTask.length > 0 ? activeTask : <p>brak zadan</p>}
                    </div>
                </div>
                <div className="col s12 l6">
                    <div className="card-done">
                        <h3>Zadania zrobione <em>({done.length})</em></h3>
                        {done.length > 5 && <span>Wyświetlone jest jedynie 5 ostatnich elementów </span>}
                        <div className="card-done">
                            {doneTask.slice(0, 5)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);