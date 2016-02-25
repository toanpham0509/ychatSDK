/**
 * Add new user's dating
 *
 * @param data
 * @param next
 */
module.exports.addNew = function(data, next){
    var userDating = new UserDating(data);
    userDating.save(function (err, data) {
        if (err) {
            next(null);
        } else {
            next(data);
        }
    });
};
/**
 * Get user's dating information
 *
 * @param userId
 * @param next
 */
module.exports.getUserDating = function (userId, next) {
    UserDating.findOne(
        {userId: userId},
        function(error, data) {
            next(data);
        }
    );
};
/**
 * Update user's dating information
 *
 * @param userId
 * @param dataUpdate
 * @param next
 */
module.exports.update = function (userId, dataUpdate, next) {
    UserDating.update(
        {userId: userId},
        {
            $set: dataUpdate
        },
        function(err, numAffected){
            next(numAffected);
        }
    );
}