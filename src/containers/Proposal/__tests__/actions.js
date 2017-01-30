import * as actions from '../actions'
import * as actionTypes from '../constants';

describe('actions ', () => {

  it('get the Proposal', () => {
    const payload = { username: "sonika" , password: "sonika"};

    const expectedProposal = {
      type: actionTypes.GET_PROPOSAL_SAGA,
      payload: { username: "sonika" , password: "sonika"}
    }
    expect(actions.getProposal(payload)).toEqual(expectedProposal)
  });

});