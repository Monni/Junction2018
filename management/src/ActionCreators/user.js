export const authenticate = (username, password) => ({
   type: 'AUTHENTICATE',
   payload: {
       username,
       password,
   }
});

export const register = (username, password) => ({
    type: 'REGISTER',
    payload: {
        username,
        password,
    }
})

export const logout = () => ({
    type: 'LOGOUT',
})