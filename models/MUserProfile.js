/**
 * Add new
 *
 * @param data
 * @param next
 */
module.exports.addNew = function(data, next){
    var userProfile = new UserProfile(data);
    userProfile.save(function (err, data) {
        if (err) {
            next(null);
        } else {
            next(data);
        }
    });
}
/**
 * Get user's profile
 *
 * @param userId
 * @param next
 */
module.exports.getUserProfile = function (userId, next) {
    UserProfile.findOne(
        {userId: userId},
        function(error, data) {
            next(data);
        }
    );
};
/**
 * Update user's profile
 *
 * @param userId
 * @param dataUpdate
 * @param next
 */
module.exports.updateUserProfile = function(userId, dataUpdate, next){
    UserProfile.update(
        {userId: userId},
        {
            $set: dataUpdate
        },
        function(err, numAffected){
            next(numAffected);
        }
    );
};