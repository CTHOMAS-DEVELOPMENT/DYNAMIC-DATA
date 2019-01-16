import React from "react";
import { connect } from "react-redux";
export const ConnectedList = props => {
  let gifts = [];
  //Get the gifts derived from the 'Main' component
  if (props.gifts !== undefined) {
    gifts = props.gifts;
  }
  const formatTextToNumber=(textNumber)=>
{
  return textNumber.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}
  const block={ display:"inlineBlock" }
  return (
    <div >
      {gifts.length === 0 ? (
        <h2>No Transactions</h2>
      ) : (
        <div >
          <h2>Transactions</h2>
          <div className="list-group list-group-flush">
            {gifts.map((gift,id) => {
              //console.log("gift",gift)
              return (
                <div className="list-group-item" key={id}>
                  <div style={block}>{gift[1].name}</div>
                  <div style={block}>
                    {gift[1].email} <b>&pound;{formatTextToNumber(gift[1].amount)}</b> 
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
     
    </div>
  );
};
const mapStateToProps = state => {
    return { gifts: state.gifts };
  };

export default connect(mapStateToProps)(ConnectedList);
