/**
 * User model
 *
 * @type {Aggregate|Model|*}
 * @param
 *      - status:
 *             1: active
 *             2: blocked
 *             3: deleted
 */
module.exports = mongooseOb.model('Users', new mongooseOb.Schema({
    name: String,
    email: String,
    avatar: String,
    password: String,
    sex: String,
    birthday: Number,
    coin: Number,
    createTime: Number,
    lastUpdate: Number,
    status: Number
}));