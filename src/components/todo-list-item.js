import React from 'react';

const TodoListItem = ( { label, important = false } ) => {
    const style = {
        color: important ? 'tomato' : 'black',
        fontSize: important ? '20px' : '16px',
    };

    return <span style={style}> { label }</span>
};

export default TodoListItem;