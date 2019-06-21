import express from 'express';
import bodyParser from 'body-parser';
import serverConsole from './utils/console';
import cors from './middleware/cors';
import routes from './routes';

const server = express();

// Configs
const port = process.env.PORT || 80;
const env = process.env.NODE_ENV || 'development';

// Middlewears
server.use(cors);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/assets', express.static('./dist'));

// Routes
routes(server);

// Start Server
server.listen(port, () => serverConsole(port, env));

module.exports = server;
