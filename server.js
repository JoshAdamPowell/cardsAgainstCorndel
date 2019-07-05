import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import testController from './api/testController';
import LandingController from './api/landingController'

class App{
    init(){

        const PORT = process.env.HTTP_PORT || 4001;
        const APP = express();

        APP.use(express.static(path.join(__dirname, 'client', 'build')));
        APP.use(bodyParser());
        APP.use(cookieParser());

        testController.register(APP);
        LandingController.register(APP);

        APP.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}.`);
    });
}

let program = new App()
program.init();