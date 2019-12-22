const initialState = {
    counter: 0
};

const counter = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            const updatedState = Object.assign({}, state);
            updatedState.counter = state.counter + 1;
            return updatedState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBSTRACT_COUNTER':
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    return state;
};

export default counter;