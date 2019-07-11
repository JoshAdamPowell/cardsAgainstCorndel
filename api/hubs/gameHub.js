
export default class GameHub{
    static register(connection){

        connection.origins('*:*')
        connection.on('connection', (socket) => {
            socket.emit('news', { hello: 'world' });
            console.log('a')
        socket.on('my other event', (data) => {
        console.log(data);
  });
        })
    }
}