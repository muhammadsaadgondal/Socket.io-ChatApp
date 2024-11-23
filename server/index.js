const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: { origin: "*" }
});

io.on('connection', (client) => {

    client.on('message', (message) => {
        console.log(message);
        io.emit('message',`${client.id.substr(0,2)} said ${message}`);

    })
})

server.listen(8000, () => {
    console.log("Connection established at port 8000");

})