/**
 * @author Rob Taylor [manix84@gmail.com]
 */

define('jscript/evaluate', function () {
    /**
     * Evals an array of scripts. This is a companion function to be used with the getScripts function.
     * @exports jscript/evaluate
     *
     * @params {array} scripts - An array of script strings to be evaled
     * @returns {array} An array of return values from the individual scripts
     */
    var evaluate = function (scripts) {
        var returns = [],
            i = 0;
        for (; i < scripts.length; i++) {
            returns.push(eval(scripts[i]));
        }

        return returns;
    };

    return evaluate;
});
