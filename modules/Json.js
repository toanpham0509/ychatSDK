/**
 * Send json to output
 *
 * @param res
 * @param status
 * @param errors
 * @param data
 */
module.exports.send = function (res, status, errors, data) {
    res.send({
        status: status,
        errors: errors,
        data: data
    });
}