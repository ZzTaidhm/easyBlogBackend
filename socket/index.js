const IO = require('socket.io');

const createSocket = (app) => {
    const io = IO(app);
    //每个客户端socket连接时都会触发 connection 事件
    io.on("connection", function(clientSocket) {

    });
    //单独的命名空间
    //命名空间：监听属性改变的，chatIo
    const chatIo = io.of('/chatLine');
    let chatRole = '';
    chatIo.on("connection", function(clientSocket) {
        console.log('开始聊天啦');
        clientSocket.on("chatMsg", data => {
            console.log(data);
            clientSocket.emit("receiveMsg", data);
        });
    });

}

module.exports = createSocket;