"use strict";
const sayHello = (name, age) => {
    return `hello ${name}!`;
    // return undefined;
};
const result = sayHello('Alice');
const returningPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num), 2000);
    });
};
const zucchini = {
    name: 'Zucchini',
    goForWalk: (lengthOfWalk, street) => {
        return true;
    }
};
