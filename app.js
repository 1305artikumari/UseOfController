const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Import controllers
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactController = require('./controllers/contactController'); // Import contact controller
const successController = require('./controllers/successController'); // Import success controller
const errorController = require('./controllers/errorController'); // Import error controller

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes with controllers
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Handle /contactus route using the contact controller
app.get('/contactus', contactController.getContactPage);
app.post('/contactus', contactController.submitContactForm);

// Handle /success route using the success controller
app.get('/success', successController.getSuccessPage);

// Handle 404 errors using the error controller
app.use((req, res, next) => {
    errorController.get404Page(req, res);
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

