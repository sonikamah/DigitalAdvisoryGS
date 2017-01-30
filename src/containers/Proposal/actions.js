/**
 * Created by jainpri on 1/5/2017.
 */

import * as types from './constants';

export const getProposal = (payload) => ({
    type: types.GET_PROPOSAL_SAGA,
    payload
});
