/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('useragent/engine', function () {

    /**
     * @exports useragent/engine
     *
     * @property trident {String|Boolean} Internet Explorer
     * @property webkit {String|Boolean} Chrome & Safari
     * @property gecko {String|Boolean} Firefox & Opera =< 6
     * @property presto {String|Boolean} Opera => 7
     * @property khtml {String|Boolean} Konqueror
     * @property htmlayout {String|Boolean} Windows and Windows Mobile embeded browser
     * @property boxely {String|Boolean} AOL
     */
    return (function () {
        var engine = {
                trident: false, // Internet Explorer
                webkit: false, // Chrome & Safari
                gecko: false, // Firefox & Opera =< 6
                presto: false, // Opera => 7
                khtml: false, // Konqueror
                htmlayout: false, // Windows and Windows Mobile embeded browser
                boxely: false // AOL
            },
            useragent = window.navigator.userAgent.toLowerCase(),
            regex, engineName, engineArray;

        for (engineName in engine) {
            if (engine.hasOwnProperty(engineName)) {
                regex = new RegExp(engineName + "\/([0-9]+(\\.[0-9]*)*)", "i");
                if (regex.exec(useragent)) {
                    engineArray = useragent.match(regex);

                    engine[engineName] =
                        (engineArray ? engineArray[1] : false) ||
                        true;
                    break;
                }
            }
        }
        return engine;
    }());
});
