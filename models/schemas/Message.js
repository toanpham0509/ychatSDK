/**
 * User's message
 *
 * @type {Aggregate|Model|*}
 * status:
 *  - 1: not read
 *  - 2: read
 *  - 3: delete by user from
 *  - 4: delete by user to
 *  - 5: delete by all user
 *
 *  type:
 *  - 1: text
 *  - 2: image
 *  - 3: file
 *  - 4: audio
 */
module.exports = mongooseOb.model('Messages', new mongooseOb.Schema({
    userIdFrom: String,
    userIdTo: String,
    content: String,
    type: Number,
    createTime: Number,
    timeRead: Number,
    status: Number
}));