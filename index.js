var validDir = require('./lib/valid-directory'),
    loadDir  = require('./lib/load-from-directory'),
    callbacks = [],
    tasks = [],
    taskManifest;

module.exports = function taskRunner(conf) {

    var basedir = conf.basedir,
        scope   = conf.scope;

    // Should these change? Probably not.
    callbacks = conf.callbacks || callbacks;
    tasks     = conf.tasks || tasks;

    // do we just ask for directory names?
    // or resolved logic?
    if (validDir(basedir)) {

        if (scope && typeof scope === "object") {

        } else {
            // Throw error, we need a scope.
            scope = {
                "data": {} 
            };
        }

        if (!taskManifest && validDir(basedir + '/configs')) {
            // Look for basedir+/config/tasks.json
            // add error handling here.
            taskManifest = require(basedir + '/configs/tasks.json');
        }

        if (!tasks || tasks.length === 0) {
            // Look for basedir+/callbacks
            tasks = loadDir('tasks', basedir);
        }

        if (!callbacks || callbacks.length === 0) {
            // Look for basedir+/callbacks
            callbacks = loadDir('callbacks', basedir);
        }
    }
}
