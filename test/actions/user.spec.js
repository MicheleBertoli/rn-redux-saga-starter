import assert from 'assert';

import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEDED,
  USER_FETCH_FAILED,
  fetchUser,
  fetchUserSuccess,
  fetchUserFailed,
} from '../../app/actions/user';

describe('user actions', () => {
  describe('fetchUser', () => {
    it('creates a "requested" action', () => {
      const user = 'user';
      const expectedAction = {
        type: USER_FETCH_REQUESTED,
        user,
      };

      assert.deepEqual(fetchUser(user), expectedAction);
    });
  });

  describe('fetchUserSuccess', () => {
    it('creates a "succeded" action', () => {
      const userData = 'userData';
      const expectedAction = {
        type: USER_FETCH_SUCCEDED,
        userData,
      };

      assert.deepEqual(fetchUserSuccess(userData), expectedAction);
    });
  });

  describe('fetchUserFailed', () => {
    it('creates a "failed" action', () => {
      const message = 'message';
      const expectedAction = {
        type: USER_FETCH_FAILED,
        message,
      };

      assert.deepEqual(fetchUserFailed(message), expectedAction);
    });
  });
});
