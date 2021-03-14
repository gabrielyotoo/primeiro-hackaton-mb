import getInstance from './instance';

const BASE_URL = 'user';

const AuthApi = {
  me: async () => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/me`);

    return data;
  },

  register: async (user) => {
    const instance = getInstance();
    const { data } = await instance.post(`${BASE_URL}/create`, user);

    return data;
  },
};

export default AuthApi;
