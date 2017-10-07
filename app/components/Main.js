// Include React
var React = require("react");

import {Button, Modal, Parallax, Row, Col } from 'react-materialize';

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", results: "", history: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      console.log("getHistory response: " + response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        // this.setState({ history: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

        // After we've received the result... then post the search term to our history.
        helpers.postHistory(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            // this.setState({ history: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  // Here we render the function
  render: function() {
    return (
      <div>
        <div className="section white">
      		<div className="row container">
      			<h2 className="header">COOLIFY</h2>
      			<p className="grey-text text-darken-3 lighten-3">Parents can be cool too</p>
      		</div>
      	</div>
      	<Parallax imageSrc="https://img.buzzfeed.com/buzzfeed-static/static/2014-08/4/16/campaign_images/webdr02/21-reminders-you-had-the-cool-parents-growing-up-2-5133-1407184657-11_dblbig.jpg"/>
      	<div className="section white">
      		<div className="row container">
            <Col s={6} className='grid-example'>
              <Form setTerm={this.setTerm} />
            </Col>
            <Col s={6} className='grid-example'>
              <Results address={this.state.results} />
            </Col>
            <Row>
            <History history={this.state.history} />
            </Row>
      		</div>
      	</div>
      	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        <div className="section white">
      		<div className="row container">
      			<h2 className="header">Songs cool people know</h2>
      			<p className="songs grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      		</div>
      	</div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
