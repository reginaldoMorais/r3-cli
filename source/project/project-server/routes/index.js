import HealthController from '../controllers/HealthController';
import ReactAppController from '../controllers/ReactAppController';

export default app => {
  app.get('/health', HealthController.health);
  app.get('/resource-status', HealthController.resourceStatus);
  app.get('*', ReactAppController.renderApp);
};
