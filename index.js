/*
 * License under MIT (c) 2016 Lorenzo Giuliani <lorenzo@frenzart.com>
 */
'use strict';

function map(list, fn) {
    const iterator = list[Symbol.iterator]();
    const set = new Set();

    let val;
    do {
        val = iterator.next();
        if (!val.done) {
            set.add(fn(val.value));
        }
    } while (!val.done);

    return Promise.all(set);
}

module.exports = map;
