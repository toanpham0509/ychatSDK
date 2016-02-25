/**
 * Room category
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('RoomCategories', new mongooseOb.Schema({
    name: String,
    icon: String,
    description: String,
    createTime: Number,
    lastUpdate: Number
}));