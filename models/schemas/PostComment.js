/**
 * Post Comment
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('PostComments', new mongooseOb.Schema({
    postId: String,
    userId: String,
    content: String,
    status: Number,
    createTime: Number,
    lastUpdate: Number
}));