import getInstance from './instance';

const BASE_URL = 'goal';

const GoalApi = {
  getToday: async () => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/get_today`);

    return data;
  },

  getDetail: async (id) => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/details`);

    return data;
  },

  update: async (id) => {
    const instance = getInstance();
    const { data } = await instance.put(`${BASE_URL}/update/${id}`, {
      done: true,
    });

    return data;
  },
};

export default GoalApi;
