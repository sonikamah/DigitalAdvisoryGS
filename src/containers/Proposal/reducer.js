/**
 * Created by jainpri on 1/5/2017.
 */


import createReducer from '../../utils/createReducer';

function getProposalSuccess(state , action) {
  console.log(action);
  return Object.assign({},state, action.proposal);
}
function getProposalFailure(state, action) {
  return Object.assign({}, state, action.proposal);
}

 const proposalReducer = createReducer([], {
  'proposal/GET_PROPOSAL_SAGA_ERROR': getProposalFailure,
  'proposal/GET_PROPOSAL_SAGA_SUCCESS': getProposalSuccess,
});

export default proposalReducer;