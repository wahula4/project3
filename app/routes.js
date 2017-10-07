// Inclue the React library
var React = require("react");
// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;
// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;
// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;
// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// Reference the high-level components
var Main = require("./components/Main");
var Signup = require ("./components/Signup");
var Signin = require ("./components/Signup");
var Dashboard = require ("./components/Signup");
// Export the Routes
class MyRouter extends React.Component{

  render() {
    return (
      // The high level component is the Router component
      <Router history={hashHistory}>
        <Route path="/" component={Dashboard}>
          <Route path="login" component={Signin} >
            <Route path="main" component={Main} />
            <IndexRoute component={Main} />
          </Route>
          {/* If user selects Child2 then show the appropriate component*/}
          <Route path="signup" component={Signup} />
          {/* If user selects any other path... we get the Home Route */}
          <IndexRoute component={Main} />
        </Route>
      </Router>
    );
  }

};


export default MyRouter;


// var path = require("path");
//
// module.exports = function(app, passport) {
//
// // routes ===============================================================
//
//     // show the dashboard to login or signup
//     app.get('/', function(req, res) {
//        res.sendFile(path.join(__dirname, "public/index.html"));
//     });
//
//     // MAIN SECTION =========================
//     app.get('/main', isLoggedIn, function(req, res) {
//         res.render('./components/Main', {
//             user : req.user
//         });
//     });
//
//     // LOGOUT ==============================
//     app.get('/logout', function(req, res) {
//         req.logout();
//         res.redirect('./components/Dashboard.js');
//     });
//
// // =============================================================================
// // AUTHENTICATE (FIRST LOGIN) ==================================================
// // =============================================================================
//
//     // locally --------------------------------
//         // LOGIN ===============================
//         // show the login form
//         app.get('/login', function(req, res) {
//             res.render('./components/Signin.js', { message: req.flash('loginMessage') });
//         });
//
//         // process the login form
//         app.post('/login', passport.authenticate('local-login', {
//             successRedirect : '/main', // redirect to the secure profile section
//             failureRedirect : '/login', // redirect back to the signin page if there is an error
//             failureFlash : true // allow flash messages
//         }));
//
//         // SIGNUP =================================
//         // show the signup form
//         app.get('/signup', function(req, res) {
//             res.render('./components/Signup.js', { message: req.flash('signupMessage') });
//         });
//
//         // process the signup form
//         app.post('/signup', passport.authenticate('local-signup', {
//             successRedirect : '/main', // redirect to the secure profile section
//             failureRedirect : '/signup', // redirect back to the signup page if there is an error
//             failureFlash : true // allow flash messages
//         }));
//
//
// // route middleware to ensure user is logged in
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//
//     res.redirect('/');
// }
