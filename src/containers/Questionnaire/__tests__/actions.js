import * as actions from '../actions'
import * as actionTypes from '../constants';

describe('actions ', () => {

  it('Send User Response', () => {
    const data = { username: "sonika" , password: "sonika"};

    const expectedUserResponse = {
      type: actionTypes.SEND_USER_RESPONSE,
      userResponse: { username: "sonika" , password: "sonika"}
    }
    expect(actions.sendUserResponse(data)).toEqual(expectedUserResponse)
  });

});