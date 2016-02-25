/**
 * User's dating infomation
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('UserDatings', new mongooseOb.Schema({
    userId: String,
    sex: String,
    ageFrom: Number,
    ageTo: Number,
    purpose: String,
    weightFrom: Number,
    weightTo: Number,
    heightFrom: Number,
    heightTo: Number,
    job: String,
    lastUpdate: Number
}));