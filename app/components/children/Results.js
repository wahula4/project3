var React = require('react');

import {CardPanel, Row, Col } from 'react-materialize';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  // Here we render the function
  render() {
    return (
      <Row>
    		<Col>
    				<CardPanel className="teal lighten-4 black-text">
    						<h1>Results:</h1>
                <p>{JSON.stringify(this.props.address)}</p>
    				</CardPanel>
    		</Col>
      </Row>
    );
  }
};

// Export the component back for use in other files
module.exports = Results;
