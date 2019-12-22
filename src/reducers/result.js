const initialState = {
    result: []
};

const result = (state = initialState, action) => {

    switch (action.type) {
        case 'STORE_RESULT':
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: action.result })
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

export default result;
