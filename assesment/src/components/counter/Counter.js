import React from 'react';
import { useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)

    return (
    <div>
        <p>
            This is a Counter Application that increases and decreases<br/> number count when you push the button.
        </p>
        <h5>{count}</h5>
    </div>
    )
}



export default Counter;