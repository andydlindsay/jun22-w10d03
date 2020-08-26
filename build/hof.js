"use strict";
const hof = (cb) => {
    cb(7);
};
hof((a) => 'hello');
