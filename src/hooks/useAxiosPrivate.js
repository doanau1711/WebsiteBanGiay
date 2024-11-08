import { axiosPrivate } from '~/utils/axios';
import { useEffect } from 'react';

import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  // thiet lap mot phien ban axios chan cac request, response de xua ly xac thuc
  // request neu chua co authorization trong header thi tu dong them vao, no = accestoken hien tai
  // response neu het han accestoken vaf lam moi no vaf thu lai neu response = 401 
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          // Bearer
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);
  return axiosPrivate;
}

export default useAxiosPrivate;
