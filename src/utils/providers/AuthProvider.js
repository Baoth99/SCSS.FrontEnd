import React, { useEffect, useRef } from 'react';
import {StoreAccount} from '../../redux/actions/AuthAction'
import {SaveAccountInfor} from '../storage/AuthStorage'
import {SignoutRedirect} from '../../services/AuthService';

const AuthProvider = ({ userManager: manager, store, children }) => {
    let userManager = useRef();

    useEffect(() => {
        userManager.current = manager

        const onUserLoaded = (user) => {           
            SaveAccountInfor(user);
            store.dispatch(StoreAccount(user));

        }

        const onAccessTokenExpired = () => {
            localStorage.clear();
            SignoutRedirect();
            console.log(`Access token expired`)
        }

        const onUserSignedOut = () => {
            console.log(`User signed out`)
        }

        // events for user
        userManager.current.events.addUserLoaded(onUserLoaded)
        userManager.current.events.addAccessTokenExpired(onAccessTokenExpired)
        userManager.current.events.addUserSignedOut(onUserSignedOut)
       
        return function cleanUp() {
            userManager.current.events.removeUserLoaded(onUserLoaded);
            userManager.current.events.removeAccessTokenExpired(onAccessTokenExpired)
            userManager.current.events.removeUserSignedOut(onUserSignedOut)
        };
    }, [manager, store]);
    
    return (
        React.Children.only(children)
      )
}

export default AuthProvider;
