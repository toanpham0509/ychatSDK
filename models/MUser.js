/**
 * Add new user
 *
 * @param data
 * @param next
 */
module.exports.addNew = function(data, next){
    var user = new User(data);
    user.save(function (err, data) {
        if (err) {
            next(null);
        } else {
            next(data);
        }
    });
};
/**
 * Update
 *
 * @param objectId
 * @param dataUpdate
 * @param next
 */
module.exports.update = function(objectId, dataUpdate, next){
    User.findByIdAndUpdate(
        new ObjectId(objectId),
        {
            $set: dataUpdate
        },
        function(err, user) {
            next(user);
        }
    );
};
/**
 * Get
 *
 * @param objectId
 * @param next
 */
module.exports.get = function (objectId, next) {
    //console.log(objectId);
    User.findOne(
        {_id: new ObjectId(objectId)},
        function(err, user) {
            next(user);
        }
    );
};
/**
 * Add user infomation to a object
 *
 * @param userId
 * @param object
 * @param next
 */
module.exports.addUserToObject = function(userId, object, next) {

    User.findOne(
        {_id: new ObjectId(userId)},
        function(err, user) {
            object.__v = user;
            //console.log(user);
            //console.log(object);
            next(object);
        }
    );
};
/**
 * Get account by email
 *
 * @param email
 * @param next
 */
module.exports.getAccountByEmail = function(email, next) {
    User.findOne(
        {email: email},
        function(error, data) {
            next(data);
        }
    )
};
/**
 * Get top user
 *
 * @param data
 * @param next
 */
module.exports.getTopUser = function (data, next) {
    var limit = 50;
    var skip = 0;
    var where = {};
    if( data.sex != undefined ) {
        where.sex = data.sex;
    }
    if( data.startRecord != undefined ) {
        skip = data.startRecord;
    }
    User.find(where).sort({coin: "desc"}).limit(limit).skip(skip).exec(function(error, docs){
        next(docs);
    });
};
/**
 * Get latest user
 *
 * @param data
 * @param next
 */
module.exports.getLatestUser = function(data, next){
    var limit = 50;
    var skip = 0;
    var where = {};
    if( data.sex != undefined ) {
        where.sex = data.sex;
    }
    if( data.startRecord != undefined ) {
        skip = data.startRecord;
    }
    User.find(where).sort({_id: "desc"}).limit(limit).skip(skip).exec(function(error, docs){
        next(docs);
    });
};
/**
 * Search
 *
 *
 * @param data
 * @param next
 */
module.exports.search = function(data, next){
    User.find(data, function(err, data) {
        //console.log(err);
        next(data);
    });
};