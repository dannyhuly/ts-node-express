import * as express from 'express';

import { WelcomeController } from './controllers';

const app: express.Application = express();
const port: number = process.env.PORT || 3000;

app.use('/welcome', WelcomeController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});