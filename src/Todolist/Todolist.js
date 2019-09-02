import React, { Component } from 'react'
import store from '../Store/index'
import { getListCreator, putTodoCreator, postTodoCreator, deleteTodoCreator } from '../Store/actionCreators'
import TodolistUI from './TodolistUI';

export default class Todolist extends Component {
    constructor() {
        super();
        this.state = store.getState();
        this.storeSubscribe = this.storeSubscribe.bind(this);
        this.putTodo = this.putTodo.bind(this);
        this.postTodo = this.postTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        store.subscribe(this.storeSubscribe);
    }

    render() {
        const { todo, list } = this.state;

        return (
            <TodolistUI
                todo={todo}
                list={list}
                putTodo={this.putTodo}
                postTodo={this.postTodo}
                deleteTodo={this.deleteTodo}
            />
        )
    }

    // 获取数据
    componentDidMount() {
        const action = getListCreator();
        store.dispatch(action);
    }

    // 订阅
    storeSubscribe() {
        this.setState(
            store.getState()
        )
    }

    // 更新todo
    putTodo(e) {
        let value = e.target.value;
        const action = putTodoCreator(value);
        store.dispatch(action);
    }

    // 添加todo到list
    postTodo() {
        const action = postTodoCreator();
        store.dispatch(action);
    }

    // 从list中删除todo
    deleteTodo(index) {
        const action = deleteTodoCreator(index);
        store.dispatch(action);
    }
}
