/**
 * Tests for array/rand
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/rand
 */
define([
    'array/rand'
], function (rand) {
    module('array');

    var random,
        testArray = ['cat', 'dog', 'bird'];
    test('rand', function () {
        random = rand(testArray);
        equal((testArray.indexOf(random) >= 0), true, 'The random array item should be from the provided array.');
        throws(rand({1: 'cat', 2: 'dog', 3: 'bird'}), 'Object should cause an exception.');
    });
});
