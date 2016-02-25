/**
 * User profile
 *
 * @type {Aggregate|Model|*}
 */
module.exports = mongooseOb.model('UserProfiles', new mongooseOb.Schema({
    userId: String,
    height: Number,
    weight: Number,
    job: String,
    salary: String,
    body: String,
    financial: String,
    sport: String,
    music: String,
    cinema: String,
    pet: String,
    freeTime: String,
    lastUpdate: Number
}));
