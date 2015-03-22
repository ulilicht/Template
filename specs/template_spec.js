'use strict';

describe('MyObject', function () {
    var obj;

    beforeEach(function () {
        obj = new MyObject();
    });

    describe('Initialization', function () {
        it('can be initialized', function () {
            expect(obj).toBeDefined();
        });
    });
});

