import axios from 'axios';
import { appConfigs } from '@/configs';
import { isEmpty } from 'lodash';

const instance = axios.create({
  baseURL: appConfigs.API_HOSTNAME,
  timeout: 60000,
  validateStatus: function (status) {
    return status === 200;
  },
});

// get response
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // handle the response error
    return Promise.reject(error);
  }
);

// get data from response
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // handle the response error
    return Promise.reject(error);
  }
);

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const get = (url, params = {}, tokenBearer = null) => {
  addToken(tokenBearer);

  return instance.get(url, params, { headers });
};

const addToken = (tokenBearer = '') =>
  !isEmpty(tokenBearer) && (headers.Authorization = `Bearer ${tokenBearer}`);
