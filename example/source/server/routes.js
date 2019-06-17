import HealthController from './controllers/HealthController';
import ReactAppController from './controllers/ReactAppController';

const healthController = new HealthController();
const reactAppController = new ReactAppController();

export default app => {
  app.get('/health', healthController.health);

  app.get('/resource-status', healthController.resourceStatus);

  app.get('/download/pdf/:filename', (req, res) => {
    const path = require('path');
    res.pdf(path.join('dist', 'cancelation-letter', req.params.filename));
  });

  app.get('*', reactAppController.renderApp);
};
