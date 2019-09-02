import { GET_LIST, PUT_TODO, POST_TODO, DELETE_TODO } from './actionTypes'

export const getListCreator = () => {
    return {
        type: GET_LIST
    }
}

export const putTodoCreator = (value) => {
    return {
        type: PUT_TODO,
        value
    }
}

export const postTodoCreator = () => {
    return {
        type: POST_TODO,
    }
}
export const deleteTodoCreator = (value) => {
    return {
        type: DELETE_TODO,
        value
    }
}
