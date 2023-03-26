import React from "react";
import CityInfo from "./Components/Views/CityInfo/CityInfo";
import "./Components/Views/Common.css";
import Content from "./Components/Views/Content/Content";
import DefaultUI from "./Components/Views/DefaultUI/DefaultUI";
import DigitalClock from "./Components/Views/DigitalClock/DigitalClock";
import { connect } from "react-redux";
function App(props) {
  return (
    <div>
      <div className="bigcontainer">
        <CityInfo />
        <Content />
        {!props.defaultState.isDefaultshown && <DefaultUI />}
        {props.defaultState.isDefaultshown && <DigitalClock />}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    defaultState: state.defaultState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
