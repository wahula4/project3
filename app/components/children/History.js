// Include React
var React = require("react");

import {CardPanel, Row, Col } from 'react-materialize';
// This is the History component. It will be used to show a log of  recent searches.
class History extends React.Component {
  constructor(props) {
    super(props);
  }
  // Here we render the function
  render() {
    return (
      <Row>
    		<Col>
    				<CardPanel className="teal lighten-4 black-text">
    						<h1>History:</h1>
                {this.props.history.map(function(search, i) {
                  return (
                    <p key={i}>{search.location}</p>
                  );
                })}
    				</CardPanel>
    		</Col>
      </Row>
    );
  }
};

// Export the component back for use in other files
module.exports = History;
