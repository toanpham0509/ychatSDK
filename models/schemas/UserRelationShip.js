/**
 * User relationship
 *
 * @type {Aggregate|Model|*}
 * @param
 *      - type:
 *             1: friend
 *             2:
 *             3:
 *      - status:
 *              1: active
 *              2: deactivate
 */
module.exports = mongooseOb.model('UserRelationships', new mongooseOb.Schema({
    userId1: String,
    userId2: String,
    createTime: Number,
    lastUpdate: Number,
    type: Number,
    status: Number
}));
