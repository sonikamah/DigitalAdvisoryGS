import * as actions from '../actions'
import * as actionTypes from '../constants';

describe('actions ', () => {
  it('authenticate the action', () => {
    const user = { username: "sonika" , password: "sonika"};

    const expectedAuthenticate = {
      type: actionTypes.WELCOME_SAGA,
      user: { username: "sonika" , password: "sonika"}
    }
    expect(actions.authenticate(user)).toEqual(expectedAuthenticate);
  })
});