import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstractor = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstractor, isLoading: isInstractorLoading} = useQuery({
        queryKey: ['isInstractor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instractor/${user?.email}`);
            // console.log('is admin response', res)
            return res.data.instractor;
        }
    })
    return [isInstractor, isInstractorLoading]
};

export default useInstractor;