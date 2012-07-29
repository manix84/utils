/**
 * Tests for object/extend
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/extend
 */
define([
    'object/extend'
], function (extend) {
    module('object');

    test('extend', function () {
        function TheClass(value) {
            this._property = value;
        }
        TheClass.prototype = {
            getProperty: function() {
                return this._property;
            }
        };

        function TheNewClass(value) {
            arguments.callee.base.apply(this, arguments);
        }

        extend(TheNewClass, TheClass, {
            setProperty: function(newValue) {
                this._property = newValue;
            }
        });

        var example = new TheNewClass("dog");

        example.setProperty("cat");

        equal(example.getProperty(), 'cat', 'The original value "dog" should be replaced with "cat".');
    });
});
