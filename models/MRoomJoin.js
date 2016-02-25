/**
 * Get in
 *
 * @param userId
 * @param roomId
 * @param next
 */
module.exports.getIn = function(data, next) {
    var roomJoin = new RoomJoin(data);
    roomJoin.save(function(err, data) {
        next(data);
    });
}
/**
 * Get out room
 *
 * @param dataWhere
 * @param dataUpdate
 * @param next
 */
module.exports.getOut = function(dataWhere, dataUpdate, next) {
    RoomJoin.update(
        dataWhere,
        {$set: dataUpdate}, {
            multi: true
        },
        function(err, data) {
            console.info(err);
            next(data);
        }
    );
}
/**
 * Get users in room
 *
 * @param roomId
 * @param next
 */
module.exports.getUsers = function(roomId, next) {
    RoomJoin.find({
        roomId: roomId,
        status: 1
    }, function(err, data){
        next(data);
    });
}