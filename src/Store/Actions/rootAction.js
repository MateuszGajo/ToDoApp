export const deletePost = (post) => {
    return {
        type: "DELETE_POST",
        post
    }
}

export const changeTaskStatus = (post) => {
    return {
        type: "CHANGE_TASK_STATUS",
        post
    }
}

export const addTask = (newTask) => {
    return {
        type: "ADD_NEW_TASK",
        task: newTask
    }
}