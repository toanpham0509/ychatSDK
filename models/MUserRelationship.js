/**
 * New user's relationship
 *
 * @param data
 * @param next
 */
module.exports.newUserRelationship = function(data, next) {
    var userRelationship = new UserRelationship(data);
    userRelationship.save(function(err, data) {
        next(data);
    });
}
/**
 * Get relationship by 2 user's id
 *
 * @param userId1
 * @param userId2
 * @param next
 */
module.exports.getUserRelationship = function(userId1, userId2, next) {
    UserRelationship.findOne({
        $or: [
            {$and: [
                {userId1: userId1},
                {userId2: userId2}
            ]},
            {$and: [
                {userId1: userId2},
                {userId2: userId1}
            ]}
        ],
        status: 1
    }, function(err, data) {
        next(data);
    });
}
/**
 * Get relationship by user id
 * data : {
 *      userId: ...,
 *      limit: ...,
 *      skip: ...
 * }
 */
module.exports.getUserRelationships = function(data, next) {
    UserRelationship.find({
        $or: [
                {userId1: data.userId},
                {userId2: data.userId}
        ],
        status: 1
    }).skip(data.skip).limit(data.limit).exec( function(err, data) {
        next(data);
    });
}
/**
 * Disable user relationship
 *
 * @param userId1
 * @param userId2
 * @param next
 */
module.exports.disableUserRelationship = function(userId1, userId2, next) {
    UserRelationship.update({
        $or: [
            {$and: [
                {userId1: userId1},
                {userId2: userId2}
            ]},
            {$and: [
                {userId1: userId2},
                {userId2: userId1}
            ]}
        ]
    }, {
        $set: {
            status: 2
        }
    }, {
      multi: true
    }, function(err, data) {
        next(data);
    });
}