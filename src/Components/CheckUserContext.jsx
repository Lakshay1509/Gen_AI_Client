import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CheckUserContext = () => {
    const storedUsername = useSelector((state) => state.user.fullname);

    console.log(storedUsername);
    
    return (
        <div>
            
            Hello
        </div>
    );
    
};

export default CheckUserContext;