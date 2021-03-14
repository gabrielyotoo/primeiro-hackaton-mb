import getInstance from './instance';

const BASE_URL = 'user';

const AuthApi = {
  me: async () => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/me`);

    return data;
  },
};

export default AuthApi;
