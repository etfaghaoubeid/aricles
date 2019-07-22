// console.log("webSocket")
// var ws = require('websocket.io'), server = ws.listen(3003);
//const  httpServer = sockets.listen(4000)
// httpServer.on('onConnection',(socket)=>{
//     console.log('connected');
//     console.log(object);
//     httpServer.send('Web socket connnected')
//     httpServer.on('message',(data)=>{
//         console.log('message resive data',data)
//     });
//     httpServer.on('close',(err)=>{
//         console.log('web socket close')
//     })
// });


var ws = require('websocket.io'), server = ws.listen(3000)

server.on('connection', function (socket) {
  socket.on('message', function () { });
  socket.on('close', function () { });
});
