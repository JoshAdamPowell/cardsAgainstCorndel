import express from 'express';
import path from 'path';
import io from 'socket.io';
import http from 'http';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import testController from './api/controllers/testController';
import LandingController from './api/controllers/landingController'
import gameHub from './api/hubs/gameHub';

class App{
    init(){
        const PORT = process.env.PORT || 4001;
        const APP = express();

        var server = http.createServer(APP);
        const connection = io.listen(server);
        console.log('registering connection')
        //const connection = new io(http);

        APP.use(express.static(path.join(__dirname, '..', 'client', 'build')));
        APP.use(bodyParser());
        APP.use(cookieParser());
        console.log('registering gameHub')
        gameHub.register(connection);
        testController.register(APP);
        LandingController.register(APP);

        server.listen(PORT, () => {
            console.log(`Server listening at port ${PORT}.`);
        });
    }
}

let program = new App()
program.init();