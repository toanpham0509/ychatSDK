/**
 * Add new session
 *
 * @param data
 * @param next
 */
module.exports.addNew = function(data, next){
    var session = new Session(data);
    session.save(function (err, data) {
        if (err) {
            next(null);
        } else {
            next(data);
        }
    });
}
/**
 * Update session
 *
 * @param objectId
 * @param data
 * @param next
 */
module.exports.update = function(objectId, dataUpdate, next) {
    Session.findByIdAndUpdate(
        new ObjectId(objectId),
        {$set: dataUpdate},
        function(err, sess) {
            next(sess);
        }
    );
}
/**
 * Get user's id from session code
 *
 * @param sessionCode
 * @param next
 */
module.exports.getUserIdBySessionCode = function(sessionCode, next){
    Session.findOne(
        {
            sessionCode: sessionCode,
            status: 1
        },
        function(error, session){
            if( session == null ) {
                next(null);
            } else {
                next(session.userId);
            }
        }
    );
}
/**
 * Get session's id from session code
 *
 * @param sessionCode
 * @param next
 */
module.exports.getSessionIdBySessionCode = function(sessionCode, next){
    Session.findOne(
        {sessionCode: sessionCode},
        function(error, session){
            if( session == null ) {
                next(null);
            } else {
                next(session._id);
            }
        }
    );
}