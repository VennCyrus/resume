import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) return;

        const token = localStorage.getItem('token');
        if(!accessToken) {
            setloading(false);
            return;
        }
        const fetchUser = async () => {
            try {
                const respone = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
                setUser(response.data);
            }
            catch (error) {
                console.error('User not authenticated', error);
                clearUser();
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchUser();
    },[]);

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token);
        setIsLoading(false);
}
const clearUser = () => {
    setUser(null);
    localStorage.removeItem('token');
}

return (
    <UserContext.Provider value={{ user, isLoading, updateUser, clearUser }}>
        {children}
    </UserContext.Provider>
)
}

export default UserProvider;