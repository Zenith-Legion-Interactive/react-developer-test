import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

// User
import User from '../components/User';

// config
import configuration from '../config/index';

const externalAPI = configuration.api;
const config = {
    headers: {
        'app-id' : configuration.app_id
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

            <section>
                <h2>Users:</h2>
                <ul style={{ listStyleType: 'none' }}>
                    {
                        loading ?
                        <p data-testid='loading'>Fetching users...</p> :
                        users && 
                        users
                            .map( user => <User key={user.id} user={ user } /> )   
                    }
                </ul>
            </section>
        </>
    )
}

export default UserListPage;