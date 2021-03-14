import getInstance from './instance';

const BASE_URL = 'target';

const TargetApi = {
  getAll: async () => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/get_all`);

    return data;
  },

  create: async (target) => {
    const instance = getInstance();
    const { data } = await instance.post(`${BASE_URL}/create`, target);

    return data;
  },
};

export default TargetApi;
