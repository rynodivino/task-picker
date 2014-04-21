module.exports = function cb (err, data) {
    if (err) {
        console.log('In callback.  Got error:',err);
    } else {
        console.log('In callback.  Got data:',data);
    }
};
