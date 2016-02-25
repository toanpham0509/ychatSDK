module.exports.addNew = function(data, next) {
    var roomChat = new RoomChat(data);
    roomChat.save(function(err, data) {
        next(data);
    });
}
module.exports.getMessages = function(data, next) {
    console.log(data);
    RoomChat.find({
        roomId: data.roomId
    }).sort("-_id").limit(data.limit).skip(data.skip).exec(function(err, data) {
        next(data.reverse());
    });
}