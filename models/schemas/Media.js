/**
 * User's media
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('Media', new mongooseOb.Schema({
    userId: String,
    albumId: Number,
    url: String,
    caption: String,
    feeling: Number,
    location: String,
    createTime: Number,
    lastUpdate: Number,
    status: Number
}));
