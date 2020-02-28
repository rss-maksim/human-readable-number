const map = require('./const');

module.exports = function toReadable (number) {
    if (map[number]) {
        return map[number];
    }
    const zero = '0';
    const string = String(number);
    const length = string.length;
    const first = string.slice(0, 1);
    const lastTwo = string.slice(-2);
    if (map[lastTwo]) {
        if (length === 2) {
            return map[lastTwo];
        }
        return `${map[`${first}${zero}${zero}`]} ${map[lastTwo]}`
    }
    const firstOfTwoLast = lastTwo.slice(0, 1);
    const last = lastTwo.slice(-1);
    const decimal = firstOfTwoLast === zero ? '' : `${map[`${firstOfTwoLast}${zero}`]} `;
    if (length === 2) {
        return `${decimal}${map[last]}`;
    }
    return `${map[`${first}${zero}${zero}`]} ${decimal}${map[last]}`
};
