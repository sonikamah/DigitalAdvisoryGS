/**
 * Created by jainpri on 1/5/2017.
 */

import * as types from './constants';

export const getQuestions = () => ({
    type: types.GET_QUESTIONS_SAGA
});

export const sendUserResponse = ( data ) => ({
    type: types.SEND_USER_RESPONSE,
    userResponse: data
});

