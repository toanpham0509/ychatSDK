/**
 * Media like
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('MediaLikes', new mongooseOb.Schema({
    mediaId: String,
    userId: String,
    createTime: Number
}));