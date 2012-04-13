/*jslint evil: true */
/**
 * Adds console logging to browsers that don't have a console (EG: IE 6, 7 & 8, Safari 2).
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/logging/popup', [
    'utils/core',
    'utils/keymap'
], function (utils, keymap) {
    /**
     * @exports utils/logging/popup
     * @requires utils/core
     */
    var popup = {

        _options: {
            staticRoot: '/'
        },

        /**
         * Console window elements regestry
         * @private
         * @property {boolean} _console.exists - Has an attempt been started to make the popup.
         * @property {window object} _console.window - A reference to popup window.
         * @property {document object} _console.document - A reference to the popup windows document namespace.
         * @property {dom object} _console.message - A reference to the popup windows message container.
         * @property {dom object} _console.form - A reference to the popup windows input form.
         * @property {dom object} _console.input - A reference to the popup windows text input box.
         */
        _console: {
            exists: false,
            window: null,
            document: null,
            messages: null,
            form: null,
            input: null
        },

        /**
         * Creating popop window to treat as the console.
         * @private
         */
        _createPopup: function () {
            try {
                this._console.window = true;
                this._console.window = window.open('', 'consoleWindow', 'width=750,height=250,status=0,toolbar=0,location=0,menubar=0,resizable=1,scrollbars=1');

                this._console.exists = !!this._console.window;

                var warnImg         = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGBQTFRF//8A18hmxK0QLi4A18gM8esF6+MGvKISaWkAup8c4NV8+/kD39IKxK423M9ymJgAt5sTh4cAVlYAHBwAqakAw8IDyrZFyLI/9O8Fwakv49iE1NQA4NoG8PAA9/MDAAAAq6FwQwAAACB0Uk5T/////////////////////////////////////////wBcXBvtAAAAiElEQVR42kSOSRKEIBAECwHZEQV3R/7/y2nGmLAvWVmXLlQ6u4Sw2JZQ65FEL2Uv0tHUdhJnKSdkZ0nTBkw5T4BMFVHgrxARQb4qA4wjjpyPBGceHTgfHt23V7cdzBM/pdwEz1AVhaJ1AW5Ff2PnoHPWcF1sI5ny1zxfXrHfZipWY1bW0leAAQAVDgnpLRQ7HQAAAABJRU5ErkJggg==',
                    infoImg         = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGBQTFRFCzmiVna7BUnaNVqtd5LKgpzPBEzlB0TIA07rQmayjaXVFkCeAFH5TG23G0OgA0/xAFP/////VoX/iKj/tsr/CT+3Q3r/prrgl63YG2H/xdX/rsHjscTkn7PccY3IAAAAndRjkAAAACB0Uk5T/////////////////////////////////////////wBcXBvtAAAAhklEQVR42kSO2w6EIAxEiywFFJcRwcte5P//cqkmax+aOek0M1Tb9KPWahVFtW5k2bmuqLdgT4w95x1Mn4YUgTRNCehUJWPRZp5ll5W0E8qvBXKmIQieZjh/If6o443NfNgb7XYFtd8MsG+5pgQsKSVE+krJB3UcAlsyZ+daDz88RyPqJ8AAI4QMjkUz+K4AAAAASUVORK5CYII=',
                    errorImg        = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF//n57qio+QAA/0ND7Xt7xwMDzD4+AAAAqLzEUwAAAAh0Uk5T/////////wDeg71ZAAAAYUlEQVR42mSPSQ7AMAgDzf7/H9eGqpciJWLAEAfDyGaYMsxYlTNKBUwubMGIH7n3gM1AuieCbbQTkQmiN6QlL71IpfTCPjruW4XQ0So+FMY5Xf23QT6TletZX6jqVPYIMAAUAQKjhDx1/AAAAABJRU5ErkJggg==',
                    runImg          = 'data:image/gif;base64,R0lGODlhDgAOAIABAHV1dQAAACH5BAEAAAEALAAAAAAOAA4AAAIUjI+py20A3IMywChvpk13/lXi6BQAOw==',
                    consoleInput    = 'data:image/gif;base64,R0lGODlhDgAOAIABACx17wAAACH5BAEAAAEALAAAAAAOAA4AAAIUjI+py20A3IMywChvpk13/lXi6BQAOw==',
                    arrowsSprite    = 'data:image/gif;base64,R0lGODlhDgAcAIABAHR0dAAAACH5BAEAAAEALAAAAAAOABwAAAIjjI+pyw2NgIRBWmevyo9pR4XiSJamyE0Lh32r2oYdNZ/2fRQAOw==',
                    modifier = false,
                    that = this;

                if (/MSIE ([6|7].\d+);/.test(window.navigator.userAgent)) {
                    warnImg  = this._options.staticRoot + 'img/utils/logging/warn.gif';
                    infoImg  = this._options.staticRoot + 'img/utils/logging/info.gif';
                    errorImg = this._options.staticRoot + 'img/utils/logging/error.gif';
                    runImg = this._options.staticRoot + 'img/utils/logging/run.gif';
                    arrowsSprite = this._options.staticRoot + 'img/utils/logging/arrowsSprite.gif';
                    consoleInput = this._options.staticRoot + 'img/utils/logging/consoleInput.gif';
                }

                this._console.window.document.write(
                    '<html>' +
                        '<head>' +
                            '<title>Console' + (document.title ? ' - ' + document.title : '') + '<\/title>' +
                            '<style>' +
                                'body{background-color:#FFF;padding:0 0 16px;;margin:0;font:11px monospace;white-space: pre;} ' +
                                'form{bottom:0;display:inline;left:0;margin:0;padding:0;position:fixed;right:0} ' +
                                'form{display:inline;} ' +
                                'form input{width:100%;border:0 none;border-top:1px solid #ccc;font:11px monospace;line-height:15px;padding-left:18px;margin:0px;background:url(' + consoleInput + ') no-repeat 4px 1px #FFF;} ' +
                                '.message{background-color:#FFF;padding:4px;margin:0px;border-bottom:1px solid #ccc} ' +
                                '.message .container{min-height:15px;line-height:15px;padding:0;margin:1px;border:0} ' +
                                '.message .arrow {background:url(' + arrowsSprite + ') no-repeat 0 0;height:14px;width:14px}' +
                                '.run{background:url(' + runImg + ') no-repeat 5px 4px #FFF;color:#00F;padding-left:23px} ' +
                                '.warn{background:url(' + warnImg + ') no-repeat 5px 4px #FFFFC8;padding-left:23px}' +
                                '.info{background:url(' + infoImg + ') no-repeat 5px 4px #EBF5FF;padding-left:23px} ' +
                                '.error{background:url(' + errorImg + ') no-repeat 5px 4px #FFEBEB;padding-left:23px;color:#F00}' +
                                '.typeof_string .container{color:#640000} ' +
                                '.typeof_function .container{color:#006400} ' +
                                '.typeof_object .container{color:#000064} ' +
                                '.typeof_undefined .container span{color:#FFF;background-color:#888;border:1px solid #666}' +
                            '<\/style>' +
                        '<\/head>' +
                        '<body>' +
                            '<code id="messages"><\/code>' +
                            '<form name="consoleForm" autocomplete="off">' +
                                '<input type="text" name="consoleInput" id="consoleInput"\/>' +
                            '<\/form>' +
                        '<\/body>' +
                    '<\/html>'
                );

                this._console.document = this._console.window.document;
                this._console.messages = this._console.window.document.getElementById('messages');
                this._console.form = this._console.window.document.forms[0];
                this._console.input = this._console.window.document.getElementById('consoleInput');

                utils.addListener(this._console.form, 'submit', function (event) {
                    event.preventDefault();
                    that._executeCommand(event.srcElement, that);
                    return false;
                });

                utils.addListener(this._console.input, 'keydown', function (event) {
                    switch (keymap.getKeyName(event)) {
                    case 'R':
                        if (modifier) {
                            window.location.reload();
                            event.preventDefault();
                        }
                        break;
                    case 'UP':
                        return that._scrollCommands('up');
                    case 'DOWN':
                        return that._scrollCommands('down');
                    }
                });

                utils.addListener(this._console.document, 'keydown', function (event) {
                    switch (keymap.getKeyName(event)) {
                    case 'F5':
                        window.location.reload();
                        event.preventDefault();
                        return false;
                    case 'R':
                        if (modifier) {
                            window.location.reload();
                            event.preventDefault();
                        }
                        break;
                    case 'CTRL':
                    case 'SUPER':
                        modifier = true;
                        break;
                    default:
                        if (!modifier) {
                            that._console.input.focus();
                        }
                    }
                });

                utils.addListener(this._console.document, 'keyup', function (event) {
                    switch (keymap.getKeyName(event)) {
                    case 'CTRL':
                    case 'SUPER':
                        modifier = false;
                        break;
                    }
                });

                this._console.window.blur();
                window.focus();

                this._console.document.close();
            } catch (ignored) {
                this._console.window = null;
                throw new Error('POPUP BLOCKED! - ' + ignored.toString());
            }
        },

        /**
         * An array of previous commands sent by the user.  This is updated by popup._executeCommand.
         * @private
         * @type {array}
         */
        _previousCommands: [],

        /**
         * Run command currently written in the input box. The command is eval'd in the parent window.
         * @param {dom object} consoleInput - Node reference to the consoles input box.
         * @private
         */
        _executeCommand: function (consoleInput) {
            var result,
                trueType = null;

            this.addMessage('run', [consoleInput.value]);
            this._previousCommands.push(consoleInput.value);
            try {
                // Eval is Evil, but necessary for this task.
                result = eval(consoleInput.value);

                // Adding console command to the list.

                switch (typeof result) {
                case 'undefined':
                    if (!result) {
                        this.addMessage('typeof_undefined', ['undefined']);
                    } else {
                        this.addMessage('log', [result]);
                    }
                    break;
                case 'string':
                    this.addMessage('typeof_string', ['{string}', '&quot;' + result + '&quot;']);
                    break;
                case 'function':
                    this.addMessage('typeof_function', ['{function}', result.toString()]);
                    break;
                case 'object':
                    trueType = Object.prototype.toString.call(result).match(/^\[object\s(.*)\]$/)[1];
                    this.addMessage('typeof_object', ['{object}', trueType]);
                    // this.addMessage('typeof_object_result', result);
                    break;
                default:
                    this.addMessage('typeof_unknown', ['{' + typeof result + '}', result]);
                }
            } catch (err) {
                this.addMessage('error', ['Error: ' + consoleInput.value]);
            }
            consoleInput.value = '';
            this._selectedCommand = -1;
        },

        /**
         * Index of the currently selected item from _previousCommands
         * @private
         * @type {integer}
         */
        _selectedCommand: -1,

        /**
         * Scroll through previous commands and display them in the input box.
         * @param {string} direction - The direction of travel.  "up" or "down".
         * @private
         */
        _scrollCommands: function (direction) {
            if (!direction || (direction !== 'up' && direction !== 'down')) {
                return;
            }

            if (this._previousCommands.length > 0) {
                if (this._selectedCommand === -1) {
                    this._selectedCommand = this._previousCommands.length;
                }
                if (direction === 'up' && this._selectedCommand > 0) { // UP
                    this._selectedCommand--;
                } else if (direction === 'down' && this._selectedCommand < this._previousCommands.length) { // DOWN
                    this._selectedCommand++;
                }

                this._console.input.value = '';
                if (this._previousCommands[this._selectedCommand]) {
                    this._console.input.value = this._previousCommands[this._selectedCommand];
                }
            }
        },

        /**
         * Add a message to the popup.  If the popup doesn't exist, it will be created.
         * @param {string} method - The method of logging required (EG: log, info, warn, error).
         * Custom methods also work (EG: type_object, type_function).
         * @param {array} arguementArray - Arguments to be logged, in the form of an array.
         * @param {string} [delimiter] - What character to but between each arguementArray item.
         * @param {string} [messageId] - ID value to be added to the message, so that alterations
         * can be made later.
         * @todo Add support for editing, so count can be added.
         */
        addMessage: function (method, argumentArray, delimiter, messageId) {
            if (!this._console.exists) {
                this._createPopup();
            }

            delimiter = delimiter || ' ';

            var scrollHeight = 0,
                clientHeight = 0,
                paragraph = null,
                message = null,
                item = null,
                itemDivider = null,
                i = 0;

            if (!!this._console.window && !!this._console.document) {

                paragraph = this._console.document.createElement('P');
                paragraph.className = 'message ' + method;

                message = this._console.document.createElement('DIV');
                message.className = 'container';
                message.id = (messageId || '');
                paragraph.appendChild(message);

                for (; i < argumentArray.length; i++) {
                    if (i > 0) {
                        itemDivider = this._console.document.createElement('SPAN');
                        itemDivider.innerText = delimiter;
                        itemDivider.className += 'itemDivider';
                        message.appendChild(itemDivider);
                    }
                    item = this._console.document.createElement('SPAN');
                    item.innerText = argumentArray[i];
                    item.className += 'item';
                    message.appendChild(item);
                }


                this._console.messages.appendChild(paragraph);

                scrollHeight = this._console.document.body.scrollHeight;
                clientHeight = this._console.document.body.clientHeight;
                if (scrollHeight > clientHeight) {
                    this._console.window.scrollTo(0, scrollHeight - clientHeight);
                }
            }
        }
    };
    return popup;
});