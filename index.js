var fs = require('fs'),
    resolve = require('resolve'),
    callbacks = [],
    callbackArray,
    tasks = [],
    taskArray,
    taskManifest;

module.exports = function taskRunner(basedir, scope, ts, cbs) {

    callbacks = cbs || callbacks;
    tasks = ts || tasks;
    // do we just ask for directory names?
    // or resolved logic?
    if (fs.lstatSync(basedir).isDirectory()) {

    } else {
        // Throw error, we need a scope.
    }

    if (scope && typeof scope === "object") {

    } else {
        // Throw error, we need a scope.
        scope = {
            "data": {} 
        };
    }

    if (!taskManifest) {
        // Look for basedir+/config/tasks.json
        taskManifest = require(basedir + '/configs/tasks.json');
    }

    if (!tasks || tasks.length === 0) {
        // Look for basedir+/callbacks
        // do readdir here
        taskArray = fs.readdir(basedir+'/tasks', function (err, files) {
            if (err) {
                console.log('No task directory or some other error');
            } else {
                if (Array.isArray(files)) {
                    files.forEach(function (file) {
                        tasks[file] = require(basedir + '/tasks/' + file);
                    });
                    console.log(' -------- tasks');
                    console.log(tasks);
                }
            }
        
        });
    }

    if (!callbacks || callbacks.length === 0) {
        // Look for basedir+/callbacks
        // do readdir here
        callbackArray = fs.readdir(basedir+'/callbacks', function (err, files) {
            if (err) {
                console.log('No callbacks directory or some other error');
            } else {
                if (Array.isArray(files)) {
                    files.forEach(function (file) {
                        callbacks[file] = require(basedir + '/callbacks/' + file);
                    });
                    console.log('-------- callbacks');
                    console.log(callbacks);
                }
            }
        
        });
    }
}
