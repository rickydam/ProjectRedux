import {combineReducers} from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: [
        "Husky",
        "Chihuahua",
        "Beagle",
        "Yorkie"
    ]
};

const friendReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default combineReducers({
    friends: friendReducer
});
