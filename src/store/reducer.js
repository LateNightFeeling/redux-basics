const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {

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
        case 'STORE_RESULT':
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            // const newArray = [...state.result];
            // newArray.splice(id, 1);
            const updatedResult = state.result.filter(result => result.id !== action.resultElID);
            return {
                ...state,
                result: updatedResult
            };

    }
    return state;
};

export default reducer;