/**
 * Tests for cookie
 * @author Rob Taylor [manix84@gmail.com]
 * @module tests/cookie
 * @requires cookie
 */
define('tests/cookie', [
    'cookie'
], function (cookie) {
    module('cookie');

    test('"Namespaces"', function () {
        equal(Object.prototype.toString.call(cookie), '[object Object]', 'Cookie returns as an object');
    });

    test('clearAll', function () {
        cookie.clearAll();

        cookie.set('test1', 'test1');
        cookie.set('test2', 'test2');
        cookie.set('test3', 'test3');

        cookie.clearAll();

        deepEqual(cookie.getAll(), {}, 'Test cookie successfully cleared');
    });

    test('getAll', function () {
        cookie.clearAll();

        cookie.set('test1', 'test1');
        cookie.set('test2', 'test2');
        cookie.set('test3', 'test3');

        deepEqual(cookie.getAll(), {'test1': 'test1', 'test2': 'test2', 'test3': 'test3'}, 'Test cookie successfully retrieved');
    });

    test('set', function () {
        cookie.clearAll();
        cookie.set('test', 'test');

        deepEqual(cookie.getAll(), {'test': 'test'}, 'Test cookie has been successfully set');
    });

    test('get', function () {
        cookie.clearAll();

        cookie.set('test', 'test');
        equal(cookie.get('test'), 'test', 'Test cookie successfully retrieved');
    });

    test('remove', function () {
        cookie.clearAll();

        cookie.set('test1', 'test1');
        cookie.set('test2', 'test2');
        cookie.set('test3', 'test3');
        cookie.remove('test2');

        deepEqual(cookie.getAll(), {'test1': 'test1', 'test3': 'test3'}, 'Test cookie successfully retrieved');
    });

});
