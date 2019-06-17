import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

module.exports = {
  app: () => {
    const app = express();
    const router = express.Router();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/assets', express.static('./dist'));
    app.use('/', router);

    // set routes
    routes(app);

    return app;
  },
};
