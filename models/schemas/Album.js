/**
 * User's album
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('Albums', new mongooseOb.Schema({
    userId: String,
    name: String,
    description: String,
    createTime: Number,
    lastUpdate: Number,
    status: Number
}));