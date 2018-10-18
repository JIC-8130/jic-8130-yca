const initialState = { auth: { username: '' } }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': return {
            uid: action.uid
        };

        case 'LOGOUT': return {};

        case 'SET_USERNAME': {
            const { payload: { username } } = action
            const auth = { username }
            return { ...state, auth }
        }

        default: return state;
    }
};