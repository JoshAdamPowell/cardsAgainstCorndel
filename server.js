import express from 'express';
import path from 'path';
import testController from './api/testController';

class App {
    init() {
        const PORT = process.env.HTTP_PORT || 4001;
        const app = express();
        app.use(express.static(path.join(__dirname, 'client', 'build')));
        testController.register(app);
        app.listen(PORT, () => {
            console.log(`Server listening at port ${PORT}.`);
        });
    }
}

let program = new App()
program.init();