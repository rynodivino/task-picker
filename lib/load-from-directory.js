var fs = require('fs'),
    validDir = require('./valid-directory');

module.exports = function loadFromDirectory(dir, base) {
    var arr = [],
    path    = base + "/" + dir;

    if (validDir(path)) {
        fs.readdir(path, function (err, files) {
            if (err) {
                console.log('No files in ' + dir + ' or some other error');
            } else {
                if (Array.isArray(files)) {
                    files.forEach(function (file) {
                        arr[file] = require(path + '/' + file);
                    });
                    console.log('-------- Loaded from directory ' + dir);
                    console.log(arr);
                }
            }
        });
    }
};
