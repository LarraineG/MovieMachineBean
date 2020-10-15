import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

const Admin = (props) => {
    const { user, isAuthenticated } = useAuth0();

    return (

        isAuthenticated &&
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.sub}</p>

        </div>
    );
}


export default Admin;