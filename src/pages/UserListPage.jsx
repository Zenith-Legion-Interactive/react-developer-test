import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

const externalAPI = 'https://dummyapi.io/data/v1/user';
const config = {
    headers: {
        'app-id' : '65080fec01538513690ca63e'
    }
}

const UserListPage = () => {
    const loading = useSelector( state => state.loading );
    const users = useSelector( state => state.users );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'SET_LOADING', payload: { value: true }});

        axios.get( externalAPI, config )
            .then( response => {
                dispatch({ type: 'SET_LOADING', payload: { value: false }});
                dispatch({ type: 'SET_USERS', payload: { value: response.data.data }})
            })
            .catch( err => {
                console.warn( err );
            });
    }, []);


    return (
        <>
            {
                loading ?
                <p>Fetching users...</p> :
                users && users.map( user => <li>{`${user.firstName} ${user.lastName}`} </li> )   
            }
        </>
    )
}

export default UserListPage;