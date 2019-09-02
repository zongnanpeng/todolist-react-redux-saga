import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

export default function TodolistUI(props) {
    const { todo, list, putTodo, postTodo, deleteTodo } = props;

    return (
        <div
            style={{
                width: '500px',
                margin: '10px auto',
                textAlign: 'left'
            }}
        >
            <section>
                <Input
                    value={todo}
                    style={{
                        width: '390px',
                        marginRight: '10px',
                        marginBottom: '10px'
                    }}
                    onChange={putTodo}
                />

                <Button type='primary' onClick={postTodo}>
                    添加
                </Button>
            </section>

            <section>
                <List
                    style={{
                        width: '390px'
                    }}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => {
                        return (
                            <List.Item onClick={() => {
                                deleteTodo(index)
                            }}>
                                {item}
                            </List.Item>
                        )
                    }}
                />
            </section>
        </div>
    )
}
