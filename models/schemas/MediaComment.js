/**
 * Media comment
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('MediaComments', new mongooseOb.Schema({
    mediaId: String,
    userId: String,
    content: String,
    createTime: Number,
    lastUpdate: Number
}));