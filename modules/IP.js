/**
 * Get client's ip
 *
 * @param req
 * @returns {*}
 */
module.exports.getClientIP = function ( req ) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}