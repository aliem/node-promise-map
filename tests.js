'use strict';

const test = require('tape');
const Promise = require('any-promise');
const map = require('./index');

test('should map plain values', t => {
    t.plan(2);

    // plain values
    const set = new Set(['uno', 'due', 'tre']);
    const results = ['uno_', 'due_', 'tre_'];

    const promise = map(set, x => x + '_');

    t.ok(promise instanceof Promise, 'Returned value should be a promise');

    promise
        .then(res => {
            t.same(res, results);
        });
});

test('should map Promised values', t => {
    t.plan(2);

    // plain values
    const set = new Set(['uno', 'due', 'tre']);
    const results = ['uno_', 'due_', 'tre_'];

    const promise = map(set, x => delay(x + '_'));

    t.ok(promise instanceof Promise, 'Returned value should be a promise');

    promise
        .then(res => {
            t.same(res, results);
        });
});

function delay(val) {
    return new Promise(res => {
        setTimeout(() => res(val), 100);
    });
}

