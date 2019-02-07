
const initState = {
    tasks: [
        { id: 0, text: 'zagrać w coś', date: '2018-02-15', important: false, active: true, finishDate: null, },
        { id: 1, text: "zrobić dobry uczynej", date: '2020-11-12', important: false, active: true, finishDate: null },
        { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
        { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
        { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
        { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
        { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
        { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
        { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },
    ]
}

const rootReducer = (state = initState, action) => {
    let tasks = [...state.tasks];
    switch (action.type) {
        case "DELETE_POST":

            tasks = tasks.filter(task => (task.id !== action.post.id));
            return {
                tasks
            }

        case "CHANGE_TASK_STATUS":
            tasks.forEach(task => {
                if (task.id === action.post.id) {
                    task.active = false;
                    task.finishDate = new Date().getTime()
                }
            })
            return {
                tasks
            }
        case "ADD_NEW_TASK":
            tasks.push(action.task);
            return {
                tasks
            }
    }
    return state;
}

export default rootReducer;