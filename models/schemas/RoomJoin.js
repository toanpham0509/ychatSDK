/**
 * Join room
 * @type {Aggregate|Model|*}
 * @param       int     status
 *                  1: in
 *                  2: out
 */
module.exports = mongooseOb.model('RoomJoins', new mongooseOb.Schema({
    roomId: String,
    userId: String,
    createTime: Number,
    lastUpdate: Number,
    status: Number,
}));