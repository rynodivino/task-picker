// Cache lookup as directories will not change.
var fs = require('fs'),
    validDirs = {};

module.exports = function validDirectory(dir) {

    // Check cache first
    if (!validDirs[dir]) { 
        if (fs.lstatSync(dir).isDirectory()) {
            validDirs[dir] = { isValid: true };
        } else {
            // Throw error, we need a scope.
            console.log("Error: " + dir + " is not a valid directory");
            validDirs[dir] = { isValid: false };
        }
    }

    return validDirs[dir].isValid;
}
