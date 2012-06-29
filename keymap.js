/**
 * KeyMap utilities giving the ability to check which key has been pressed without needing to know the key's id number.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/keymap', [
    'utils/core',
    'utils/array'
], function (utilsBase, arrayUtil) {
    /**
     * @exports utils/keymap
     * @requires jquery
     * @requires utils/core
     * @requires utils/array
     */
    var keyboardMap = {
        /**
         * The list of key ids with the key's name.
         * @private
         */
        _theMap: {
            8: 'BACKSPACE',
            9: 'TAB',
            13: 'RETURN',
            16: 'SHIFT',
            17: 'CTRL',
            18: 'ALT',
            19: 'PAUSE',
            20: 'CAPS_LOCK',
            27: 'ESCAPE',
            32: 'SPACE',
            33: 'PAGE_UP',
            34: 'PAGE_DOWN',
            35: 'END',
            36: 'HOME',
            37: 'LEFT',
            38: 'UP',
            39: 'RIGHT',
            40: 'DOWN',
            45: 'INSERT',
            46: 'DELETE',
            82: 'R',
            91: 'SUPER', // AKA: WINDOWS or MAC key
            93: 'MENU',
            96: 'KP_0', // INSERT
            97: 'KP_1', // END
            98: 'KP_2', // DOWN
            99: 'KP_3', // PAGE_DOWN
            100: 'KP_4', // LEFT
            101: 'KP_5',
            102: 'KP_6', // RIGHT
            103: 'KP_7', // HOME
            104: 'KP_8', // UP
            105: 'KP_9', // PAGE_UP
            106: 'KP_STAR',
            107: 'KP_PLUS',
            109: 'KP_MINUS',
            110: 'KP_DOT', // DELETE
            111: 'KP_SLASH',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NUM_LOCK',
            145: 'SCROLL_LOCK',
            190: 'DOT'
        },


        /**
         * Find the KeyId from object/number passed
         * @private
         * @param {mixed} eventKey Either an event object to take find the KeyId or the KeyId itself
         * @returns {number} Otherwise false on failure
         */
        _getKeyId: function (eventKey) {
            if (utilsBase.getType(eventKey) === 'object') {
                if (utilsBase.getType(eventKey.which) === 'number') {
                    eventKey = eventKey.which;
                } else if (utilsBase.getType(eventKey.charCode) === 'number') {
                    eventKey = eventKey.charCode;
                } else if (utilsBase.getType(eventKey.keyCode) === 'number') {
                    eventKey = eventKey.keyCode;
                }
            }
            if (eventKey === 0) {
                return false;
            }
            return eventKey;
        },

        /**
         * Find name for Key
         * @param {mixed} eventKey Either an event object to take find the KeyId or the KeyId itself
         * @returns {string} Otherwise false on failure
         */
        getKeyName: function (eventKey) {
            eventKey = this._getKeyId(eventKey);
            if (!this._theMap[eventKey]) {
                return false;
            }
            return this._theMap[eventKey];
        },

        /**
         * Identify if the KeyId passed is what you're hoping for
         * @param {mixed} eventKey Either an event object to take find the KeyId or the KeyId itself
         * @param {array} keys The name of the key you're hoping for.
         * @returns {boolean}
         */
        isKeyName: function (eventKey, key) {
            eventKey = this._getKeyId(eventKey);

            if (this._theMap[eventKey] === key.toUpperCase()) {
                return true;
            }
            return false;
        },

        /**
         * Identify if one of the KeyId's passed is what you're hoping for
         * @param {mixed} eventKey Either an event object to take find the KeyId or the KeyId itself
         * @param {string} key The name of the key you're hoping for.
         * @returns {boolean}
         */
        isOneOf: function (eventKey, keys) {
            eventKey = this._getKeyId(eventKey);

            if (arrayUtil.inArray(this._theMap[eventKey], arrayUtil.upperCase(keys))) {
                return true;
            }
            return false;
        }
    };

    return keyboardMap;
});
