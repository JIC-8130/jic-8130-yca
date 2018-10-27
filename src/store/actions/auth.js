export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

// Asynchronous login action which will be used in other functions

export const startLogin = (user) => {


    return () => {

        if (user.name == "QA" && user.password == "1234") {
            console.log('user id s', user.uid);
            login(user.uid);

        }

    };

};

export const logout = () => ({
    type: 'LOGOUT',

});

export const setUsername = (username) => {
    return {
        type: 'SET_USERNAME',
        payload: {
            username,
        }
    }
}