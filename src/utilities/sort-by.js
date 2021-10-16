/**
 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
 *
 * Sorts an array of object based on an object key provided by a parameter (note this is
 * more limited than Underscore/Lodash).
 *
 * @param {Array} items The array to sort
 * @param {String} key The key of the value in each object to sort on
 * @param {Boolean} asc True to sort ascending, false otherwise
 * @returns Array
 */
export default function (items, key, asc = true) {
    if (!Array.isArray(items) || !key || !items.length) return [];

    let greaterThanSortValue = asc ? 1 : -1;
    let lessThanSortValue = asc ? -1 : 1;

    const sortBy = (key) => {
        return (a, b) =>
            a[key] > b[key]
                ? greaterThanSortValue
                : b[key] > a[key]
                ? lessThanSortValue
                : 0;
    };
    return items.concat().sort(sortBy(key));
}
