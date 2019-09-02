import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

export default function TodolistUI(props) {
    const { todo, list, putTodo, postTodo } = props;

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
                        marginRight: '10px'
                    }}
                    onChange={putTodo}
                />

                <Button type='primary' onClick={postTodo}>
                    添加
                </Button>
            </section>

            <section>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index)}
                />
            </section>
        </div>
    )
}
