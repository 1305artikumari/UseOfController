const path = require('path'); // Import the 'path' module

// Define the controller function
exports.getSuccessPage = (req, res) => {
    console.log('Accessing /success route');
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'success.html'));
};

