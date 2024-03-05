import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, clearTodo, removeTodo } from './features/todoSlice';

const Todo = () => {

    const items = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>);

    const submitForm = (e) => {
        e.preventDefault();
        if(input === ''){
            alert('Please enter valid text.');
        } else {
            dispatch(addTodo(input));
            setInput('');
        }
    }

    return (
        <div>
            <form onSubmit={(e)=> {submitForm(e)}}>
                <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
                <button type="submit">Add</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={(e) => {dispatch(clearTodo())}}>Clear</button>
        </div>
    );
}

export default Todo;