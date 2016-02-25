/**
 * New room
 *
 * @param data
 * @param next
 */
module.exports.newRoom = function(data, next) {
    var room = new Room(data);
    room.save(function(err, data) {
        next(data);
    });
}
/**
 * Get rooms by room cateogry id
 *
 * @param categoryId
 * @param next
 */
module.exports.getRoomsByCategoryId = function(categoryId, next) {
    Room.find({
        categoryId: categoryId
    }).sort("name").exec(function(err, data) {
        next(data);
    });
}
/**
 * Get room infomation by room id
 *
 * @param roomId
 * @param next
 */
module.exports.getRoomById = function(roomId, next) {
    Room.findById(new ObjectId(roomId), function(err, room) {
        next(room);
    });
}