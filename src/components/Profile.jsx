import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const externalAPI = 'https://dummyapi.io/data/v1/user';
const config = {
  headers: {
      'app-id' : '65080fec01538513690ca63e'
  }
}

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ user, setUser ] = useState();

  useEffect(() => {
    axios.get( `${ externalAPI }/${id}`, config )
    .then( response => {
      setUser( response.data );
    });
  }, []);

  return (
    <Link to={`/users/${id}`} >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            {
              user &&
              <img 
                style={{ borderRadius: '50%' }}
                src={ user.picture } />
            }
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            {
              user &&
              <>
                <h2>{ user.firstName } { user.lastName }</h2>
                <small>{ user.email }</small>
                <small>{ user.location.street } { user.location.city } { user.location.country }</small>
              </>
            }
          </div>
          <button
            onClick={ () => navigate(-1) }
            >Back</button>

        </div>
    </Link>
  )
}

export default Profile;