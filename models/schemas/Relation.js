/**
 * User's relation
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('Relation', new mongooseOb.Schema({
    userIdFrom: String,
    userIdTo: String,
    relationType: Number,
    createTime: Number
}));