import * as express from 'express';

import { WelcomeController } from './controllers';

export class App{

    private _express: express.Application;
    private _port: number;

    public run(){

        this._port = 3000;
        this._express = express();

        this._express.use('/welcome', WelcomeController);

        // Serve the application at the given port
        this._express.listen(this._port, () => {
            // Success callback
            console.log(`Listening at http://localhost:${this._port}/`);
        });

    }

} 

var app = new App();
app.run();