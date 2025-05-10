import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getPublicationById } from "../../services/api";

export const usePublicationDetail = () => {
    const [publication, setPublication] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const fetchPublication = useCallback(async (pid) => {
        setIsFetching(true);
        const result = await getPublicationById(pid);
        if (result.error) {
            toast.error(result.e?.response?.data || 'Error al obtener la publicación');
            setIsFetching(false);
            return;
        }
        
        setPublication(result.data.publication || result.data); 
        setIsFetching(false);
    }, []);

    return {
        publication,
        isFetching,
        fetchPublication
    };
};
