const profileRoute = require("../controllers/profiles/profile.route"); 

module.exports = (app) => {
    app.use('/profiles', profileRoute);
}