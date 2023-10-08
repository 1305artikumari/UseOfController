const path = require('path'); // Import the 'path' module

// Define the controller functions
exports.getContactPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
};

exports.submitContactForm = (req, res, next) => {
    // Process the form data here
    // Redirect to the success page
    res.redirect('/success');
};


