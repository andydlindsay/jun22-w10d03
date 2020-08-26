"use strict";
const login = (user) => {
    if (user.username === 'john stamos') {
        return true;
    }
    return false;
};
const myUser = {
    username: 'charlie',
    password: '1234',
    anotherKey: false
};
login(myUser);
