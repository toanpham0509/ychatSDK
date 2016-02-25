/**
 * Session
 *
 * @type {Aggregate|Model|*}
 * @param:
 *  - status:
 *          1: sign_in
 *          2: sign_out
 */
module.exports = mongooseOb.model('Sessions', new mongooseOb.Schema({
    userId: String,
    ip: String,
    sessionCode: String,
    expiredTime: Number,
    status: Number,
    createTime: Number
}));