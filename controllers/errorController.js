const path = require('path'); // Import the 'path' module

// Define the controller function for handling 404 errors
exports.get404Page = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
};

