/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('number/round', function () {

    /**
     * Rounds a float to a decimal place, rather than removing the decimal all together.
     * @exports number/round
     *
     * @param  {Number} number - A float that needs rounding.
     * @param  {Number} [decimal] - The number of decimal places that you want to keep.
     * @return {Number} A float with the corrisponding number of decimal places.
     */
    var round = function (number, decimal) {
        if (isNaN(number)) {
            throw new Error('First argument must be an integer.');
        } else if (!!decimal && isNaN(decimal)) {
            throw new Error('Second argument must be an integer.');
        }
        decimal = decimal || 0;
        return Math.round(number * Math.pow(10, decimal)) / Math.pow(10, decimal);
    };

    return round;
});
