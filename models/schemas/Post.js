/**
 * User's post
 * status:
 *      1: publish
 *      2: deleted
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('Posts', new mongooseOb.Schema({
    userId: String,
    content: String,
    feeling: String,
    location: String,
    createTime: Number,
    lastUpdate: Number,
    status: Number
}));