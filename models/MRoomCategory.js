/**
 * Get all room categories
 *
 * @param next
 */
module.exports.getRoomCategories = function(data, next) {
    RoomCategory.find({}, function(err, data){
        next(data);
    });
}
/**
 * New room category
 *
 * @param data
 * @param next
 */
module.exports.newRoomCategory = function(data, next) {
    var roomCategory = new RoomCategory(data);
    roomCategory.save(function(err, data) {
        next(data);
    });
}
/**
 * Get room category by id
 *
 * @param categoryId
 * @param next
 */
module.exports.getRoomCategory = function(categoryId, next) {
    RoomCategory.findOne({
        _id: new ObjectId(categoryId)
        }, function(err, data) {
            next(data);
        }
    );
}