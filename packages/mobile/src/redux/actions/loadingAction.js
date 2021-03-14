import { DECREASE_LOADING, INCREASE_LOADING } from './actionsTypes';

export const increaseLoading = () => ({
  type: INCREASE_LOADING,
});

export const decreaseLoading = () => ({
  type: DECREASE_LOADING,
});
