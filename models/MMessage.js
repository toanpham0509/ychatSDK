/**
 * Add new message
 *
 * @param data
 * @param next
 */
module.exports.addNew = function (data, next) {
    var message = new Message(data);
    message.save(function (err, data) {
        if (err) {
            next(null);
        } else {
            next(data);
        }
    });
}
/**
 * Update
 *
 * @param objectId
 * @param dataUpdate
 * @param next
 */
module.exports.update = function(messageId, dataUpdate, next){
    Message.findByIdAndUpdate(
        new ObjectId(messageId),
        {
            $set: dataUpdate
        },
        function(err, message) {
            next(message);
        }
    );
};
/**
 * Get message by message'd id
 *
 * @param messageId
 * @param next
 */
module.exports.getMessageById = function(messageId, next) {
    Message.findOne({
        _id: new ObjectId(messageId)
    }, function(err, data) {
        next(data);
    });
}
/**
 * Get message of two user
 *
 * @param data
 * @param next
 */
module.exports.getMessagesBy2UserId = function(data, next) {
    Message.find().and([
        {$or: [
                {$and: [
                    {userIdFrom: data.userId},
                    {userIdTo: data.userOtherId}
                ]},
                {$and: [
                    {userIdFrom: data.userOtherId},
                    {userIdTo: data.userId}
                ]}
        ]}
    ]).limit(data.limit).skip(data.skip).exec(function(error, data){
        next(data);
    });
}
/**
 * Get message of two user
 *
 * @param data
 * @param next
 */
module.exports.getNewMessagesBy2UserId = function(data, next) {
    Message.find().and([
        {$or: [
            {$and: [
                {userIdFrom: data.userId},
                {userIdTo: data.userOtherId}
            ]},
            {$and: [
                {userIdFrom: data.userOtherId},
                {userIdTo: data.userId}
            ]}
        ]}
    ]).sort({_id: "desc"}).limit(data.limit).skip(data.skip).exec(function(error, data){
        next(data);
    });
}

/**
 * Get list messages
 *
 * @param data
 * @param next
 */
module.exports.getListMessages = function(data, next) {
    var agg = [
        {$match: {
            $or: [
                {userIdFrom: data.userId},
                {userIdTo: data.userId},
            ]
        }},
        {$group: {
            _id: {
                userIdFrom: "$userIdFrom",
                userIdTo: "$userIdTo"
            }
        }},
        { $limit: data.limit },
        { $skip: data.skip }
    ];
    Message.aggregate(agg, function(err, data) {
        // data is a list of two field userIdFrom and userIdTo
        next(data);
    });
}