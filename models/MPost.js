/**
 * Add new post
 *
 * @param data
 * @param next
 */
module.exports.addNew = function (data, next) {
    var post = new Post(data);
    post.save(function (err, data) {
        if (err) {
            next(null);
        } else {
            next(data);
        }
    });
}
/**
 * Get post by user'id
 *
 * @param userId
 * @param dataLimit
 * @param next
 */
module.exports.getPostsByUserId = function (userId, dataLimit, next) {
    Post.find({userId: userId, status: 1}).limit(dataLimit.limit).skip(dataLimit.skip).exec(function(error, docs){
        next(docs);
    });
}
/**
 * Get post by post's id
 *
 * @param objectId
 * @param next
 */
module.exports.getPost = function (objectId, next) {
    Post.findOne(
        {
            _id: new ObjectId(objectId),
            status: 1
        },
        function(error, data) {
            next(data);
        }
    );
}
/**
 * Update post
 *
 * @param objectId
 * @param dataUpdate
 * @param next
 */
module.exports.update = function (objectId, dataUpdate, next) {
    Post.findByIdAndUpdate(
        new ObjectId(objectId),
        {$set: dataUpdate},
        function(err, post) {
            next(post);
        }
    );
}
/**
 * Delete post
 *
 *
 * @param objectId
 * @param next
 */
module.exports.delete = function (objectId, next){
    Session.findByIdAndUpdate(
        new ObjectId(objectId),
        {$set: {
            status: 2
        }},
        function(err, sess) {
            next(sess);
        }
    );
}