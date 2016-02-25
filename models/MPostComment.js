module.exports.addNew = function(data, next) {
    var postComment = new PostComment(data);
    postComment.save(function (err, data) {
        next(data);
    });
}
module.exports.update = function(commentId, data, next) {
    PostComment.findByIdAndUpdate(
        new ObjectId(commentId), 
        {
            $set: data
        },
        function (err, data) {
            next(data);
        }
    )
}
module.exports.getCommentsByPostId = function(data, next) {
    PostComment.find(data).exec(function(error, data) {
            next(data);
    });
}
module.exports.getCommentById = function(commenId, next) {
    PostComment.findOne(
        {
            _id: new ObjectId(commenId),
            status: 1
        }, function(err, data) {
            next(data);
        }
    );
}