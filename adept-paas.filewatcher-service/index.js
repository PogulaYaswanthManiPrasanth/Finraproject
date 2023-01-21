
const { ServiceModuleController }        = require('service.module.core');

const { MainProcess,
        ChildProcessControllerModule }   = require('service.core');

const  serviceConfig                     = require('./etc/service.config.json')

var fileWatcherController = new ChildProcessControllerModule({
  processName: serviceConfig.processName,
  childModule: 'adept.file-watcher.service-module',
  childModulePaths: './node_modules',
  configRequired: true,
  configFilename: `file-watcher.config.json`,
  lifecycleTimeout: 5000,
  loggerDomain: serviceConfig.loggerDomain,
  logSeverity: 'DEBUG'
});


let serviceModController = new ServiceModuleController(serviceConfig.serviceModControllerName, "1.0.0", { loadSerially: true });

serviceModController.register(fileWatcherController);

var _opts = {
  enableKeyboard: true,
  configRequired: false,
  enablePidfile: false,
  isDevelopment: false,
  pidfileOverwrite: false,
  mainModule: serviceModController
};

const main = MainProcess.create(_opts);

main.start();







