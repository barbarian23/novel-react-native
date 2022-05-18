export const createAction = (action) => {
  return {
    ACTION: action,
    LOADING: `${action}_LOADING`,
    SUCCESS: `${action}_SUCCESS`,
    FAILED: `${action}_FAILED`,
  };
};
