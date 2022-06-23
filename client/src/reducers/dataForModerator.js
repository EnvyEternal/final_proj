import ACTION from '../actions/actionTypes';

const initialState = {
    isFetching: true,
    offers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_OFFERS_FOR_MODERATOR:{
            const { data } = action;
            return { ...state,
                offers:  data }
        }
        default:
            return state;
    }
}