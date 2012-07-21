/**
 * Date utility extention, adding format. (based on PHP's date function)
 * @see http://php.net/manual/en/function.date.php
 * @author Rob Taylor [manix84@gmail.com]
 *
 * @exports date
 *
 * @requires date/beatTime
 * @requires date/daylightSavings
 * @requires date/dayName
 * @requires date/dayOrdinal
 * @requires date/gmtOffset
 * @requires date/meridiem
 * @requires date/monthName
 * @requires date/twelveHourTime
 * @requires date/yearShort
 * @requires date/convert/toIso8601
 * @requires date/convert/toRFC2822
 * @requires date/convert/toTimestamp
 */
define('date', [
    'date/beatTime',
    'date/daylightSavings',
    'date/dayName',
    'date/dayOrdinal',
    'date/gmtOffset',
    'date/meridiem',
    'date/monthName',
    'date/twelveHourTime',
    'date/yearShort',
    'date/convert/toIso8601',
    'date/convert/toRFC2822',
    'date/convert/toTimestamp'
], function (
    beatTime,
    daylightSavings,
    dayName,
    dayOrdinal,
    gmtOffset,
    meridiem,
    monthName,
    twelveHourTime,
    yearShort,
    convertToIso8601,
    convertToRFC2822,
    convertToTimestamp
) {
    /**
     * Is an attempt to duplicate the PHP Date function.  Some characters have been omitted.
     * @see http://php.net/manual/en/function.date.php
     * @param {dateFormatMask|string} mask The format of the outputted date string. (EG: 'D, d M Y H:i:s' would produce 'Mon, 31 Oct 2001 15:05:02')
     * @param {date object} [dateValue] Date class.  If not set, it assumes you mean 'now'.
     * @example format('D, d M Y H:i:s'); // RETURNS: 'Mon, 31 Oct 2001 15:05:02'
     * @returns {string} Formatted date, using "mask" (EG: 'Mon, 31 Oct 2001 15:05:02')
     */
    var pad = function (input) {
        input = String(input);

        while (input.length < 2) {
            input = "0" + input;
        }
        return input;
    },
    date = function (mask, dateValue) {
        var maskArray = '',
            no_support = function (character) {
                warn('Date.Format: ' + character + ', is currently not a supported format.');
            },
            o = '',
            i = 0;

        dateValue = date.convertToDate(dateValue);

        maskArray = mask.split('');

        for (i in maskArray) {
            if (maskArray.hasOwnProperty(i)) {
                switch (maskArray[i]) {


                // ------- DAY -------

                /*
                 * Character: "d"
                 * Description: Day of the month, 2 digits with leading zeros
                 * Example: 01 to 31
                 */
                case 'd':
                    o += pad(dateValue.getDate());
                    break;

                /*
                 * Character: "D"
                 * Description: A textual representation of a day, three letters
                 * Example: Mon through Sun
                 */
                case 'D':
                    o += dayName(dateValue, true);
                    break;

                /*
                 * Character: "j"
                 * Description: Day of the month without leading zeros
                 * Example: 1 to 31
                 */
                case 'j':
                    o += dateValue.getDate();
                    break;

                /*
                 * Character: "l" (lowercase 'L')
                 * Description: A full textual representation of the day of the week
                 * Example: Sunday through Saturday
                 */
                case 'l':
                    o += dayName(dateValue);
                    break;

                /*
                 * Character: "N"
                 * Description: ISO-8601 numeric representation of the day of the week
                 * Example: 1 (for Monday) through 7 (for Sunday)
                 */
                case 'N':
                    o += dateValue.getDay() + 1;
                    break;

                /*
                 * Character: "S"
                 * Description: English ordinal suffix for the day of the month, 2 characters
                 * Example: st, nd, rd or th. Works well with "j"
                 */
                case 'S':
                    o += dayOrdinal(dateValue);
                    break;

                /*
                 * Character: "w"
                 * Description: Numeric representation of the day of the week
                 * Example: 0 (for Sunday) through 6 (for Saturday)
                 */
                case 'w':
                    o += dateValue.getDay();
                    break;

                /*
                 * Character: "z"
                 * Description: The day of the year (starting from 0)
                 * Example: 0 through 365
                 */
                case 'z':
                    o += Math.floor((dateValue - new Date(dateValue.getFullYear(), 0, 1)) / 86400000);
                    break;


                // ------- WEEK -------

                /*
                 * Character: "W"
                 * Description: Week number of year
                 * Example: 42 (the 42nd week in the year)
                 */
                case 'W':
                    o += Math.floor((dateValue - new Date(dateValue.getFullYear(), 0, 1)) / 604800000);
                    break;


                // ------- MONTH -------

                /*
                 * Character: "F"
                 * Description: A full textual representation of a month, such as January or March
                 * Example: January through December
                 */
                case 'F':
                    o += monthName(dateValue);
                    break;

                /*
                 * Character: "m"
                 * Description: Numeric representation of a month, with leading zeros
                 * Example: 01 through 12
                 */
                case 'm':
                    o += pad(dateValue.getMonth() + 1);
                    break;

                /*
                 * Character: "M"
                 * Description: A short textual representation of a month, three letters
                 * Example: Jan through Dec
                 */
                case 'M':
                    o += monthName(dateValue);
                    break;

                /*
                 * Character: "n"
                 * Description: Numeric representation of a month, without leading zeros
                 * Example: 1 through 12
                 */
                case 'n':
                    o += pad(dateValue.getMonth() + 1);
                    break;

                /*
                 * Character: "t"
                 * Description: Number of days in the given month
                 * Example: 28 through 31
                 * TODO: Add Number of days in the given month to format
                 */
                case 't':
                    no_support('t', 'Number of days in the given month');
                    break;


                // ------- YEAR -------

                /*
                 * Character: "L"
                 * Description: Whether it's a leap year
                 * Example: 1 if it is a leap year, 0 otherwise.
                 */
                case 'L':
                    o += (dateValue.getFullYear() % 4 === 0) ? 1 : 0;
                    break;

                /*
                 * Character: "Y" / "o"
                 * Description: A full numeric representation of a year, 4 digits
                 * Example: 1999 or 2003
                 */
                case 'Y':
                case 'o':
                    o += dateValue.getFullYear();
                    break;

                /*
                 * Character: "y"
                 * Description: A two digit representation of a year
                 * Example: 99 or 03
                 */
                case 'y':
                    o += yearShort(dateValue);
                    break;


                // ------- TIME -------

                /*
                 * Character: "a"
                 * Description: Lowercase Ante meridiem and Post meridiem
                 * Example: am or pm
                 */
                case 'a':
                    o += meridiem(dateValue);
                    break;

                /*
                 * Character: "A"
                 * Description: Uppercase Ante meridiem and Post meridiem
                 * Example: AM or PM
                 */
                case 'A':
                    o += meridiem(dateValue, true);
                    break;

                /*
                 * Character: "B"
                 * Description: Swatch Internet time
                 * Example: 000 through 999
                 */
                case 'B':
                    o += Math.floor(beatTime(dateValue));
                    break;

                /*
                 * Character: "g"
                 * Description: 12-hour format of an hour without leading zeros
                 * Example: 1 through 12
                 */
                case 'g':
                    o += twelveHourTime(dateValue);
                    break;

                /*
                 * Character: "G"
                 * Description: 24-hour format of an hour without leading zeros
                 * Example: 0 through 23
                 */
                case 'G':
                    o += dateValue.getHours();
                    break;

                /*
                 * Character: "h"
                 * Description: 12-hour format of an hour with leading zeros
                 * Example: 01 through 12
                 */
                case 'h':
                    o += pad(twelveHourTime(dateValue));
                    break;

                /*
                 * Character: "H"
                 * Description: 24-hour format of an hour with leading zeros
                 * Example: 00 through 23
                 */
                case 'H':
                    o += pad(dateValue.getHours());
                    break;

                /*
                 * Character: "i"
                 * Description: Minutes with leading zeros
                 * Example: 00 to 59
                 */
                case 'i':
                    o += pad(dateValue.getMinutes());
                    break;

                /*
                 * Character: "s"
                 * Description: Seconds, with leading zeros
                 * Example: 00 through 59
                 */
                case 's':
                    o += pad(dateValue.getSeconds());
                    break;

                /*
                 * Character: "u"
                 * Description: Microseconds
                 * Example: 321
                 */
                case 'u':
                    o += pad(dateValue.getMilliseconds(), 3);
                    break;

                /*
                 * Character: "e"
                 * Description: Timezone identifier
                 * Example: UTC, GMT, Atlantic/Azores
                 */
                case 'e':
                    no_support('e', 'Timezone identifier');
                    break;

                /*
                 * Character: "I" (capital i)
                 * Description: Whether or not the date is in daylight saving time
                 * Example: 1 if Daylight Saving Time, 0 otherwise.
                 */
                case 'I':
                    o += daylightSavings(dateValue);
                    break;

                /*
                 * Character: "O"
                 * Description: Difference to Greenwich time (GMT) in hours and minutes
                 * Example: +0200
                 */
                case 'O':
                    o += gmtOffset(dateValue, false);
                    break;

                /*
                 * Character: "P"
                 * Description: Difference to Greenwich time (GMT) with colon between hours and minutes
                 * Example: +02:00
                 */
                case 'P':
                    o += gmtOffset(dateValue, true);
                    break;

                /*
                 * Character: "T"
                 * Description: Timezone abbreviation
                 * Example: EST, MDT ...
                 */
                case 'T':
                    no_support('T', 'Timezone abbreviation');
                    break;

                /*
                 * Character: "c"
                 * Description: ISO 8601 date
                 * Example: 2004-02-12T15:19:21+00:00
                 * TODO: Add this ISO 8601 date to format.
                 */
                case 'c':
                    o += convertToIso8601(dateValue);
                    break;

                /*
                 * Character: "r"
                 * Description: RFC 2822
                 * Example: Thu, 21 Dec 2000 16:01:07 +0200
                 * TODO: Add this RFC 2822 to format.
                 */
                case 'r':
                    o += convertToRFC2822(dateValue);
                    break;

                /*
                 * Character: "U"
                 * Description: Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
                 * Example: 12345678910
                 * TODO: Add this Unix Epoch to format.
                 */
                case 'U':
                    o += convertToTimestamp(dateValue);
                    break;

                /*
                 * Any other characters get passed through.
                 */
                default:
                    o += maskArray[i];
                    break;
                }
            }
        }
        return o;
    };

    return date;
});

/**
 * @typedef {string} dateFormatMask
 * @description
 * <h5 class="subsection-title">Valid Characters:</h5>
 * <span>Any other characters are treated as white space, so get passed through untouched.</span>
 * <table class="props">
 *     <thead>
 *         <tr>
 *             <th>Value</th>
 *             <th>Description</th>
 *             <th class="last">Example</th>
 *         </tr>
 *     </thead>
 *     <tbody>
 *         <tr>
 *             <td class="name"><code>"d"</code></td>
 *             <td class="description">Day of the month, 2 digits with leading zeros.</td>
 *             <td class="last">01 to 31</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"D"</code></td>
 *             <td class="description last">A textual representation of a day, three letters.</td>
 *             <td class="last">Mon through Sun</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"j"</code></td>
 *             <td class="description last">Day of the month without leading zeros.</td>
 *             <td class="last">1 to 31</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"l"</code></td>
 *             <td class="description last">A full textual representation of the day of the week.</td>
 *             <td class="last">Sunday through Saturday</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"N"</code></td>
 *             <td class="description last">ISO-8601 numeric representation of the day of the week.</td>
 *             <td class="last">1 (for Monday) through 7 (for Sunday)</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"S"</code></td>
 *             <td class="description last">English ordinal suffix for the day of the month, 2 characters.</td>
 *             <td class="last">st, nd, rd or th. Works well with "j"</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"w"</code></td>
 *             <td class="description last">Numeric representation of the day of the week.</td>
 *             <td class="last">0 (for Sunday) through 6 (for Saturday)</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"z"</code></td>
 *             <td class="description last">The day of the year (starting from 0).</td>
 *             <td class="last">0 through 365</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"W"</code></td>
 *             <td class="description last">Week number of year (starting from 0).</td>
 *             <td class="last">42 (the 42nd week in the year)</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"F"</code></td>
 *             <td class="description last">A full textual representation of a month, such as January or March.</td>
 *             <td class="last">January through December</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"m"</code></td>
 *             <td class="description last">Numeric representation of a month, with leading zeros.</td>
 *             <td class="last">01 through 12</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"M"</code></td>
 *             <td class="description last">A short textual representation of a month, three letters.</td>
 *             <td class="last">Jan through Dec</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"n"</code></td>
 *             <td class="description last">Numeric representation of a month, without leading zeros.</td>
 *             <td class="last">1 through 12</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"L"</code></td>
 *             <td class="description last">Whether it's a leap year</td>
 *             <td class="last">1 if it is a leap year, 0 otherwise.</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"Y"</code></td>
 *             <td class="description last">A full numeric representation of a year, 4 digits.</td>
 *             <td class="last">1999 or 2003</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"o"</code></td>
 *             <td class="description last">A full numeric representation of a year, 4 digits.</td>
 *             <td class="last">1999 or 2003</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"y"</code></td>
 *             <td class="description last">A two digit representation of a year.</td>
 *             <td class="last">99 or 03</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"a"</code></td>
 *             <td class="description last">Lowercase Ante meridiem and Post meridiem.</td>
 *             <td class="last">am or pm</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"A"</code></td>
 *             <td class="description last">Uppercase Ante meridiem and Post.</td>
 *             <td class="last">AM or PM</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"B"</code></td>
 *             <td class="description last">Swatch Internet time</td>
 *             <td class="last">000 through 999</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"g"</code></td>
 *             <td class="description last">12-hour format of an hour without leading zeros.</td>
 *             <td class="last">1 through 12</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"G"</code></td>
 *             <td class="description last">24-hour format of an hour without leading zeros</td>
 *             <td class="last">0 through 23</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"h"</code></td>
 *             <td class="description last">12-hour format of an hour with leading zeros</td>
 *             <td class="last">01 through 12</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"H"</code></td>
 *             <td class="description last">24-hour format of an hour with leading zeros</td>
 *             <td class="last">00 through 23</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"i"</code></td>
 *             <td class="description last">Minutes with leading zeros</td>
 *             <td class="last">00 to 59</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"s"</code></td>
 *             <td class="description last">Seconds, with leading zeros</td>
 *             <td class="last">00 through 59</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"u"</code></td>
 *             <td class="description last">Microseconds</td>
 *             <td class="last">321</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"I"</code></td>
 *             <td class="description last">Whether or not the date is in daylight saving time</td>
 *             <td class="last">1 if Daylight Saving Time, 0 otherwise.</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"O"</code></td>
 *             <td class="description last">Difference to Greenwich time (GMT) in hours and minutes</td>
 *             <td class="last">+0200</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"P"</code></td>
 *             <td class="description last">Difference to Greenwich time (GMT) with colon between hours and minutes</td>
 *             <td class="last">+02:00</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"c"</code></td>
 *             <td class="description last">ISO 8601 date</td>
 *             <td class="last">2004-02-12T15:19:21+00:00</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"r"</code></td>
 *             <td class="description last">RFC 2822</td>
 *             <td class="last">Thu, 21 Dec 2000 16:01:07 +0200</td>
 *         </tr>
 *         <tr>
 *             <td class="name"><code>"U"</code></td>
 *             <td class="description last">Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT</td>
 *             <td class="last">12345678910</td>
 *         </tr>
 *     </tbody>
 * </table>
 */
