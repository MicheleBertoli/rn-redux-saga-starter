// Action Types
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEDED = 'USER_FETCH_SUCCEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

// Action Creators
export const fetchUser = user => ({
  type: USER_FETCH_REQUESTED,
  user,
});

export const fetchUserSuccess = userData => ({
  type: USER_FETCH_SUCCEDED,
  userData,
});

export const fetchUserFailed = message => ({
  type: USER_FETCH_FAILED,
  message,
});
