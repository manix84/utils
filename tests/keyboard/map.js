/**
 * Tests for keyboard/map
 * @author Rob Taylor [manix84@gmail.com]
 * @requires keyboard/map
 */
define([
    'keyboard/map'
], function (keyboardMap) {
    module('keyboard/map');
    var tmp = {
        keyCode: 91,
        charCode: 91,
        which: 91
    };

    test('_getKeyId', function () {
        equal(Object.prototype.toString.call(keyboardMap._getKeyId), '[object Function]', 'keyboardMap._getKeyId should be a function');
        equal(keyboardMap._getKeyId(91), 91, 'Should output 91');
        equal(keyboardMap._getKeyId(tmp), 91, 'Should output 91');
    });

    test('getKeyName', function () {
        equal(Object.prototype.toString.call(keyboardMap.getKeyName), '[object Function]', 'keyboardMap.getKeyName should be a function');
        equal(keyboardMap.getKeyName(91), 'SUPER', 'Key 91 is "SUPER" key (Windows/Apple)');
    });

    test('isKeyName', function () {
        equal(Object.prototype.toString.call(keyboardMap.isKeyName), '[object Function]', 'keyboardMap.isKeyName should be a function');
        equal(keyboardMap.isKeyName(tmp, 'super'), true, 'Key pressed is "SUPER" key (Windows/Apple)');
    });

    test('isOneOf', function () {
        equal(Object.prototype.toString.call(keyboardMap.isOneOf), '[object Function]', 'keyboardMap.isOneOf should be a function');
        equal(keyboardMap.isOneOf(tmp, ['super', 'space', 'backspace']), true, 'Key pressed is either "SUPER", "SPACE" or "BACKSPACE" key');
    });
});
