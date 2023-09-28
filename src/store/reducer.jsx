const initialState = {
    counter: 0,
    users: [],
    loading: false
}

const reducer = ( state = initialState, action ) => {
    console.log( action );
    const type = action.type;

    switch( type ){
        case 'INCREMENT':
            return { ...state, counter: state.counter+1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter-1 }
        case 'RESET':
            return { ...state, counter: 0 }
        case 'SET_LOADING':
            return { ...state, loading: action.payload.value }
        case 'SET_USERS':
            return { ...state, users: [...action.payload.value] }
        default: 
            return state;
    }
}

export default reducer;