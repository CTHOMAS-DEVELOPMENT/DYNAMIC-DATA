import React, { Component } from "react";
import { connect } from "react-redux";
import "react-dates/lib/css/_datepicker.css";

class ConnectedForm extends Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      gifts:[],
      errorMessage: "",
      name:"",
      email:"",
      amount:""
    };
    if (props.id !== undefined) {
      this.state = this.getValuesForUpdate(props.id, props.articles);
    }
  }
  handleAmountChange = e => {
    const map = /^\d{1,}(\.\d{0,2})?$/;
    const amount = e.target.value;
    if (amount.match(map)) {
      this.setState({ amount });
    }
  };
  handleNameChange = event => {
    this.setState({ "name": event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ "email": event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ amount:"" });
    this.setState({ email:"" });
    this.setState({ name:"" });
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div>
        {this.state && this.state.errorMessage && (
          <p>{this.state.errorMessage}</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            required
              type="text"
              className="form-control"
              id="name"
              placeholder="Name..."
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <label htmlFor="email">Email</label>
           <input
           required
              type="email"
              className="form-control"
              id="email"
              placeholder="Email..."
              value={this.state ? this.state.email : "d@t.com"}
              onChange={this.handleEmailChange}
            />
            <label htmlFor="amount">Amount</label>
            <input
            required
              type="text"
              className="form-control"
              id="amount"
              placeholder="Amount..."
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Send
          </button>
        </form>
      </div>
    );
  }
}
//Synchonise local state with redux store
const mapStateToProps = state => {
  return { gifts: state.gifts };
};
//Connect the form with the store and enable dispatching
export default connect(
  mapStateToProps
)(ConnectedForm);
