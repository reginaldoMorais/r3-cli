import packageJson from '../../../package.json';

class HealthController {
  constructor() {}

  health(req, res) {
    res.send({ status: 'OK' });
  }

  resourceStatus(req, res) {
    res.send({
      createdBy: 'Node Version 6.10.3',
      applicationName: '{{APP_TITLE}}',
      implementationBuild: '20170905',
      implementationVersion: packageJson.version,
    });
  }
}

export default new HealthController();
