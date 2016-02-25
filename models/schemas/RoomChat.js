/**
 * Chat room
 *
 * @type {Aggregate|Model|*}
 * @param       int     status
 *              1: publish
 *              2: deleted
 */
module.exports = mongooseOb.model('RoomChats', new mongooseOb.Schema({
    roomId: String,
    userId: String,
    content: String,
    createTime: Number,
    status: Number
}));