import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
function Modal(props) {
  return (
    <div className="bigmodalBorder">
      <div className="closeButton">
        <i className="fa-solid fa-x" onClick={() => props.closeModal()}></i>
      </div>
      <div className="DateContainer">
        <p>{props.Day.day}</p>
        <p>
          {props.Day.date}/{props.Day.month}/{props.Day.year}
        </p>
      </div>
      <div className="modalBorder">
        <div className="TitleInfo">
          {Object.keys(props.Data).map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="EachInfo">
          {Object.keys(props.Data).map((n1) => {
            return <p>{props.Data[n1]}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    contentState: state.contentState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => {
      dispatch({
        type: "CLOSE_MODAL",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
