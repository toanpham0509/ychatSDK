/**
 * Post Like
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('PostLikes', new mongooseOb.Schema({
    postId: String,
    userId: String,
    createTime: Number
}));