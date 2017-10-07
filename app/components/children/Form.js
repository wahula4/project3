var React = require('react');

import {Input, Row, Button } from 'react-materialize';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    console.log("this.state.term = " + this.state.term);
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  }
  // Here we describe this component's render method
  render() {
    return (
      <Row>
        <form onSubmit={this.handleSubmit}>
      		<Input s={6} label="Location"
          value={this.state.term} type="text"
          className="form-control text-center"
          id="term"
          onChange={this.handleChange}
          required/>
          <Button waves='light' type="submit">Submit</Button>
        </form>
      </Row>
    );
  }
};

// Export the component back for use in other files
module.exports = Form;
