/**
 * Gifts
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('Gifts', new mongooseOb.Schema({
    userIdFrom: String,
    userIdTo: String,
    gift: String,
    message: String,
    createTime: Number,
    lastUpdate: Number,
    status: Number
}));