import { useSelector, useDispatch } from "react-redux";

import Button from "./Button";

const Counter = () => {
    const counter = useSelector( state => state.counter );
    const dispatch = useDispatch();

    console.log( dispatch );

    const sample = () => { console.log('hello') }

    return (
        <div>
            <h1>{ counter }</h1>
            <div>
                <Button
                    clickAction={ () => dispatch({ type: 'RESET' }) } 
                    type="danger">
                    Reset
                </Button>
                <Button
                    clickAction={ () => dispatch({ type: 'DECREMENT' }) } 
                    type="danger">
                    Decrement
                </Button>
                <Button 
                    clickAction={ () => dispatch({ type: 'INCREMENT' }) } 
                    type="primary">
                    Increment
                </Button>
            </div>
        </div>
    )
}

export default Counter;