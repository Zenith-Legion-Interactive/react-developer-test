import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <Link to={`/users/${ user.id }`}>
        <div style={{ display: 'flex', marginBottom: '5px' }}>
            <div>
                <img 
                    style={{ borderRadius: '50%' }}
                    src={ user.picture } />
            </div>
            <div style={{ marginLeft: '10px' }}>
                <p>{ user.firstName } { user.lastName }</p>
            </div>
        </div>
    </Link>
  )
}

export default User;