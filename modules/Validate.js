/**
 * Check document's id
 *
 * @param id
 * @returns {boolean}
 */
module.exports.checkId = function(id) {
    if(id != undefined && id.length == 24) {
        return true;
    } else {
        return false;
    }
}
/**
 * Check param type is integer
 *
 * @param value
 * @returns {boolean}
 */
module.exports.checkInt = function(value) {
    return (value == parseInt(value)) ? true : false;
}