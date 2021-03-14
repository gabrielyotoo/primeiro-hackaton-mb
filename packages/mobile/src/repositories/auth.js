import getInstance from './instance';

const BASE_URL = 'session';

const AuthApi = {
  login: async (login) => {
    const instance = getInstance();
    const { data } = await instance.post(`${BASE_URL}/create`, login);

    return data;
  },
};

export default AuthApi;
