var appConfig = require('./package.json');
var request = require('request');
var app = require('express')();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
var Time = require('./modules/Time');

mongooseOb = require('mongoose');
ObjectId = require('mongoose').Types.ObjectId;
mongooseOb.connect(appConfig.dbAmazonCloud);

var connectionDB = mongooseOb.connection;
connectionDB.on('error', console.error.bind(console, 'Connection error:'));
connectionDB.once('open', function(){

    console.log('Connected to amazon cloud!');

    //Load schemas
    User = require('./models/schemas/User');
    console.log('Load schema \"User\" success!');

    Session = require('./models/schemas/Session');
    console.log('Load schema \"Session\" success!');

    UserRelationship = require('./models/schemas/UserRelationShip');
    console.log('Load schema \"UserRelationship\" success!');

    Post = require('./models/schemas/Post');
    console.log('Load schema \"Post\" success!');

    Album = require('./models/schemas/Album');
    console.log('Load schema \"Album\" success!');

    Media = require('./models/schemas/Media');
    console.log('Load schema \"Media\" success!');

    Relation = require('./models/schemas/Relation');
    console.log('Load schema \"Relation\" success!');

    Gift = require('./models/schemas/Gift');
    console.log('Load schema \"Gift\" success!');

    RoomCategory = require('./models/schemas/RoomCategory');
    console.log('Load schema \"RoomCategory\" success!');

    Room = require('./models/schemas/Room');
    console.log('Load schema \"Room\" success!');

    Message = require('./models/schemas/Message');
    console.log('Load schema \"Message\" success!');

    RoomJoin = require('./models/schemas/RoomJoin');
    console.log('Load schema \"RoomJoin\" success!');

    RoomChat = require('./models/schemas/RoomChat');
    console.log('Load schema \"RoomChat\" success!');

    PostComment = require('./models/schemas/PostComment');
    console.log('Load schema \"PostComment\" success!');

    PostLike = require('./models/schemas/PostLike');
    console.log('Load schema \"PostLike\" success!');

    MediaComment = require('./models/schemas/MediaComment');
    console.log('Load schema \"MediaComment\" success!');

    MediaLike = require('./models/schemas/MediaLike');
    console.log('Load schema \"MediaLike\" success!');
});


/**
 * Array map users online
 *
 */
var HashMap = require('hashmap');
users = new HashMap();

/**
 * Server port
 */
if(appConfig.serverPort == undefined) {
    appConfig.serverPort = 8080;
}

/**
 * Server start
 */
server.listen(appConfig.serverPort, function() {
    console.log("Server running at *:" + appConfig.serverPort);
});

/**
 * Main Request Http
 */
app.use('/', function(req, res, next) {
    res.send("Welcome to yChat SDK");
});

/**
 * Connection
 */
io.on('connection', function(socket) {
    console.log("New connect: " + socket.id);

    /**
     * Disconnect
     */
    socket.on(appConfig.services.DISCONNECT, function() {
        console.log("Disconnect: " + socket.id);
    });

    /**
     * authentication connection by account
     */
    socket.on(appConfig.services.SERVICE_AUTHENTICATION, function(data) {
        //decrypt account, password
        //doing...

        //Transfer data to server to get token
        request.post({
            url: appConfig.yChatServer + "Connect",
            formData: {
                account: data.account,
                password: data.pass
            }
        }, function (error, response, body) {
            if(!error) {
                socket.emit(appConfig.services.SERVICE_AUTHENTICATED, body);
                var userId = JSON.parse(body).data.userId;
                socket.userId = userId;
                users.set(userId, socket);
            }
        });
    });

    /**
     * authentication connection by token
     */
    socket.on(appConfig.services.SERVICE_AUTHENTICATION_TOKEN, function(data) {
        //Transfer data to server to check token
        request.post({
            url: appConfig.yChatServer + "AuthenticationToken",
            formData: {
                token: data
            }
        }, function (error, response, body) {
            if(!error) {
                console.log(body);
                socket.emit(appConfig.services.SERVICE_AUTHENTICATED, body);
                var userId = JSON.parse(body).data.userId;
                socket.userId = userId;
                users.set(userId, socket);
            }
        });
    });

    /**
     * Listener send message
     */
    socket.on(appConfig.services.SERVICE_SEND_MESSAGE, function(data) {
        var toSocket = users.get(data.userId);
        //save messsage to db
        var Message = require('./models/MMessage');
        Message.addNew({
            userIdFrom: socket.userId,
            userIdTo: data.userId,
            content: data.content,
            type: data.messageType,
            createTime: Time.getUnixTimeStampNow(),
            status: 1
        }, function(message) {
            if(toSocket !== undefined) {
                toSocket.emit(appConfig.services.SERVICE_RECEIVED_MESSAGE, message);
            }
            socket.emit(appConfig.services.SERVICE_SENT_MESSAGE, {
                userId: data.userId,
                messageId: message._id
            });
        });
    });

    /**
     * Listen delivered message
     */
    socket.on(appConfig.services.SERVICE_DELIVERED_MESSAGE, function(data) {
        var toSocket = users.get(data.userIdFrom);
        //save messsage to db
        var Message = require('./models/MMessage');
        Message.update(data.messageId, {
            "status": 2,
            "timeRead": Time.getUnixTimeStampNow()
        }, function(message) {
            if(toSocket !== undefined) {
                toSocket.emit(appConfig.services.SERVICE_DELIVERED_MESSAGE, {
                    messageId: message._id,
                    userIdTo: message.userIdTo
                });
            }
        })
    });

    /**
     * Listen typing message
     */
    socket.on(appConfig.services.SERVICE_TYPING_MESSAGE, function(data) {
        var toSocket = users.get(data.userIdTo);
        if(toSocket !== undefined) {
            toSocket.emit(appConfig.services.SERVICE_TYPING_MESSAGE, {
                userIdFrom: toSocket.userId
            });
        }
    })

    /**
     * Listen top typing message
     */
    socket.on(appConfig.services.SERVICE_TOP_TYPING_MESSAGE, function(data) {
        var toSocket = users.get(data.userIdTo);
        if(toSocket !== undefined) {
            toSocket.emit(appConfig.services.SERVICE_TOP_TYPING_MESSAGE, {
                userIdFrom: toSocket.userId
            });
        }
    })
});