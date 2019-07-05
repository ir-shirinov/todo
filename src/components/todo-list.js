import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Выпить кофе"/></li>
            <li><TodoListItem label="Проснуться" important/></li>
        </ul>
    )
};

export default TodoList;