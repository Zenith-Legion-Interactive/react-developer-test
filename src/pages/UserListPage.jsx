import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const externalAPI = 'https://dummyapi.io/data/v1/user';
const config = {
    headers: {
        'app-id' : '65080fec01538513690ca63e'
    }
}

const UserListPage = () => {
    const users = useSelector( state => state.users );
    const [ loading, setLoading ] = useState(false);

    const dispatch = useDispatch();

    const fetchUsers = async () => {
        setLoading( true );

        axios.get( externalAPI, config )
        .then( response => {
            dispatch({ type: 'SET_USERS', payload: { value: response.data.data }})
        })
        .catch( err => {
            console.warn( err );
        })
        .finally( () => setLoading( false ));
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <nav>
                <button>
                    <Link to='/'>Back</Link>
                </button>
            </nav>
            {
                loading ?
                <p data-testid='loading'>Fetching users...</p> :
                users && users.map( user => <li>{`${user.firstName} ${user.lastName}`} </li> )   
            }
        </>
    )
}

export default UserListPage;