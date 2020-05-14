import axios from 'axios';

const getMethod = async <T>(url: string): Promise<T> => {
  try {
    const data = await axios.get(url);
    const returnData: T = data.data;
    return Promise.resolve(returnData);
  } catch (err) {
    return Promise.reject(err);
  }
};

const postMethod = async <T, P>(url: string, body: T): Promise<P> => {
  try {
    const data = await axios.post(url, body);
    const returnData: P = data.data;
    return Promise.resolve(returnData);
  } catch (err) {
    return Promise.reject(err);
  }
};

export {
  getMethod,
  postMethod,
};
