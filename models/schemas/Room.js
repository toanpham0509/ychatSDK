/**
 * Room
 *
 * @type {Aggregate|Model|*}
 * @param       int       room's type:
 *          1: free
 *          2: vip
 * @param       int         limit
 * @param       int         status
 *
 */
module.exports = mongooseOb.model('Rooms', new mongooseOb.Schema({
    name: String,
    icon: String,
    description: String,
    userId: String,
    categoryId: String,
    type: Number,
    limit: Number,
    online: Number,
    createTime: Number,
    lastUpdate: Number,
    status: Number
}));
