import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
            }
            headers['Content-Type'] = 'application/json';

            const response = await fetch(url, { method, body, headers });
            const data = await response.json();
            if (!response.ok) {
                 throw Object.assign(new Error(), data);
            }
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            setError(error.message);
            throw error;
        }
    }, []);

    const clearError = useCallback(() => setError(false), []);

    return { loading, error, request, clearError };
}