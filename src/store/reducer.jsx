const initialState = {
    counter: 0
}

const reducer = ( state = initialState, action ) => {
    console.log( action );
    const type = action.type;

    switch( type ){
        case 'INCREMENT':
            return { ...state, counter: state.counter+1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter-1 }
        default: 
            return state;
    }
}

export default reducer;