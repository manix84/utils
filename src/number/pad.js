/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('number/pad', function () {

    /**
     * Adds a repeating string to the start of a number. The number is converted to a string to accomplish this.
     * @exports number/pad
     *
     * @param  {Number} input - Number to be padded.
     * @param  {Number} [padLength] - The length you want the number to be outputted at. Defaults to "2"
     * @return {String} (EG: "01")
     */
    var pad = function (input, padLength) {
        input = String(input);
        padLength = padLength || 2;

        while (input.length < padLength) {
            input = "0" + input;
        }
        return input;
    };

    return pad;
});
