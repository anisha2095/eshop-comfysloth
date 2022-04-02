import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { useUserContext } from '../Context/User_context';

const PrivateRoute = ({children, ...rest}) =>{
    const {myUser} = useUserContext()
    return(
        <div>
            <Route 
                {...rest}
                render={() => {
                    return myUser ? children : <Redirect to="/" ></Redirect>
                }}
            ></Route>
        </div>
    )
}

export default PrivateRoute