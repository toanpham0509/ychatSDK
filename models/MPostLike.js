/**
 * Like post
 *
 * @param data
 * @param next
 */
module.exports.like = function (data, next){
    var like = new PostLike(data);
    like.save(function(err, data) {
        next(data);
    });
}
/**
 * Unlike
 *
 * @param data
 * @param next
 */
module.exports.unLike = function (data, next) {
    PostLike.findOneAndRemove(data, function(err){
        if(err) {
            next(false);
        } else {
            next(true);
        }
    });
}
/**
 * Get like
 *
 * @param data
 * @param next
 */
module.exports.getLike = function(data, next) {
    console.log(data);
    PostLike.findOne(data, function(err, dataResponse) {
        console.log(err);
        console.log(dataResponse);
        next(dataResponse);
    });
}
/**
 * Get like count
 *
 * @param postId
 * @param next
 */
module.exports.getLikeCount = function(postId, next) {
    PostLike.count({
        'postId': postId
    }, function(err, data) {
        next(data);
    });
}