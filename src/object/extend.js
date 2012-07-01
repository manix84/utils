/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/object/extend', function () {
    /**
     * Copies the prototype of one object to another. The 'subclass' can also access the 'base class' via subclass.base
     * @exports utils/object/extend
     *
     * @param {Function} subClass - Class which inherits properties.
     * @param {Function} baseClass - Class to inherit from.
     * @param {Object} [additionalProperties] - An object of properties and methods to add to the subclass.
     */
    var extend = function (subClass, baseClass, addedProperties) {
        var DummyClass = function () {},
            dummyProperties, property;

        // This code is based on https://github.com/glow/glow2/blob/master/src/util/util.js#L247:L252
        DummyClass.prototype = baseClass.prototype;
        dummyProperties = new DummyClass();
        subClass.prototype = dummyProperties;
        dummyProperties.constructor = subClass;
        subClass.base = baseClass;

        if (addedProperties) {
            for (property in addedProperties) {
                if (addedProperties.hasOwnProperty(property)) {
                    subClass.prototype[property] = addedProperties[property];
                }
            }
        }
        return subClass;
    };

    return extend;
});
