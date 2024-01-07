import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [viewProfile, setViewProfile] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
    const [cropSelection, setCropSelection] = useState("Rice");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const id = localStorage.getItem("id");
        axios.post(`${process.env.REACT_APP_SERVER_API}/auth/check-login`, { id }, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
        })
            .then((res) => {
                setUserInfo(res.data);
            })
            .finally(() => setIsLoading(false));
    }, []);

    // login function
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);

        axios.post(`${process.env.REACT_APP_SERVER_API}/auth/login`, {
            email,
            password,
        })
            .then(res => {
                const userInfo = res.data.user;
                localStorage.setItem("access_token", res.data.access_token);
                localStorage.setItem("id", res.data.user.id);
                setUserInfo(userInfo);
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .finally(() => setIsLoading(false));
    };

    // logout function
    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id");
        setUserInfo({});
    }

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                setUserInfo,
                viewProfile,
                setViewProfile,
                editProfile,
                setEditProfile,
                loginUser,
                logout,
                cropSelection,
                setCropSelection
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;