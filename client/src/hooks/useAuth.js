import { useCallback, useState, useEffect } from 'react';
import { useHttp } from './useHttp';

const STORAGE_NAME = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userDataReady, setUserDataReady] = useState(false);
  const { loading, error, request, clearError } = useHttp();

  const getTokenFromStorage = () => JSON.parse(localStorage.getItem(STORAGE_NAME))?.token;

  const authenticationOnServer = async () => {
    const headers = { Authorization: getTokenFromStorage() };
    try {
      const user = await request('/api/auth/authentication', 'GET', null, headers);
      return user;
    } catch(error) {
      throw error;
    }
  }

  const name = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(STORAGE_NAME, JSON.stringify({ userId: id, token: jwtToken }))
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(STORAGE_NAME);
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(STORAGE_NAME));

    if (userData && userData.token) {
      name(userData.token, userData.userId);
    }
    setUserDataReady(true);
  }, [name])

  return { authenticationOnServer, name, logout, token, userId, userDataReady };
};
