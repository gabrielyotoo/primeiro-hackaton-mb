import getInstance from './instance';

const BASE_URL = 'goal';

const GoalApi = {
  getToday: async (date) => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/get_today`, {
      params: { date: date ?? undefined },
    });

    return data;
  },

  getById: async (id) => {
    const instance = getInstance();
    const { data } = await instance.get(`${BASE_URL}/details/${id}`);

    return data;
  },

  update: async ({ id, done }) => {
    const instance = getInstance();
    const { data } = await instance.put(`${BASE_URL}/update/${id}`, {
      done,
    });

    return data;
  },

  comment: async (comment) => {
    const instance = getInstance();
    const { data } = await instance.post('/comment/create', comment);

    return data;
  },
};

export default GoalApi;
