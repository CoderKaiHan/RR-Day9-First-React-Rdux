import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/counterSlice';

function Counter() {
    const count = useSelector((state) => state.value);

    const dispatch = useDispatch();

    const [input, setInput] = useState(0);

    const byAmountSubmit = (e) => {
        e.preventDefault()
        if (!isNaN(input)){
            dispatch(incrementByAmount(parseFloat(input)));
        } else {
            alert ('Please enter a valid number.');
        }     
    }


    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit = {(e) => {byAmountSubmit(e)}}>
                <input type='text' onChange={(e) => {setInput(e.target.value)}}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Counter;