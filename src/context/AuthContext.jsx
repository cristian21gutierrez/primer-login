import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:3000/auth/me', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error('Error fetching user:', error);
                    if (error.response && error.response.status === 401) {
                        localStorage.removeItem('token');
                        setUser(null);
                    }
                }
            }
        };

        fetchUser();
    }, []);

    const login = async (username, password) => {
        const response = await axios.post('http://localhost:3000/auth/login', { username, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        const userResponse = await axios.get('http://localhost:3000/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setUser(userResponse.data);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
