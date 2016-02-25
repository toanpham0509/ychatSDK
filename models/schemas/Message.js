/**
 * User's message
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('Messages', new mongooseOb.Schema({
    userIdFrom: String,
    userIdTo: String,
    content: String,
    createTime: Number,
    timeRead: Number,
    status: Number
}));