/*Note: I call this the "parent component"
(1) It passes data to and from the store 
(2) The initial data has been obtained and already exists in the store
(3) There are 3 children: Form, List and Pie
*/
import React from "react";
import { connect } from "react-redux";
import List from "./List";
import Form from "./Form";
import Pie from "./Pie";
import { insertFbGift } from "../crud";
class ConnectedMain extends React.Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      gifts: [],
      accounts: []
    };
  }
  callMain=(val)=>{
    const initial=this.props.accounts[0].initial;
    const sent=this.props.accounts[0].initial - this.props.accounts[0].balance;
    insertFbGift(val, this.props.accounts[0].balance);
  }
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
        <h2>Send Money</h2>
          <Form onSubmit={ (transInfo)=>{ this.callMain(transInfo)}}/>
        </div>
        <div className="col-md-4 offset-md-1">
        <Pie account= {this.props.accounts?this.props.accounts[0]:""} />
        <List gifts={this.state.gifts} />
        </div>
      </div>
    );
  }
}
//Data shared between store and local state
const mapStateToProps = state => {
  return { gifts: state.gifts,  accounts: state.accounts};
};

export default connect(mapStateToProps)(ConnectedMain);
