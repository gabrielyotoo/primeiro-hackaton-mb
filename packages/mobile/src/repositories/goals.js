import getInstance from './instance';

const BASE_URL = 'goal';

const GoalApi = {
  getToday: async () => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/get_today`);

    return data;
  },

  getById: async (id) => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/${id}`);

    return data;
  },

  update: async ({ id, done }) => {
    const instance = getInstance();
    const { data } = await instance.put(`${BASE_URL}/update/${id}`, {
      done,
    });

    return data;
  },
};

export default GoalApi;
