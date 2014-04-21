module.exports = function taskOne (callback) {
    console.log('task-one');
    callback(null, 'done with one');
};
