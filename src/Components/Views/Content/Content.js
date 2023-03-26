import React, { useEffect, useState } from "react";
import "./Content.css";
import "./LoaderContent.css";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
function Content(props) {
  const [Info, setInfo] = useState(undefined);
  const [InfoDetail, setInfoDetail] = useState(undefined);
  const [InfoDay, setInfoDay] = useState(undefined);
  useEffect(() => {
    setInfo(props.contentState.contentCity);
  }, [props.contentState.contentCity]);
  return (
    props.defaultState.isDefaultshown && (
      <div style={{ flexGrow: "1", height: "auto", position: "relative" }}>
        {props.contentState.isOpenModal === true && (
          <div className="modalContainer">
            <Modal Data={InfoDetail} Day={InfoDay} />
          </div>
        )}
        {props.contentState.isReadyContent === true && (
          <div className="loadercontent"></div>
        )}
        <p className="titlecontainer">Weather Forecast</p>
        {Info && (
          <div className="ContainerBigcontainer">
            <div className="upperContainer">
              <div className="tempcontainer">
                <h1>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ marginRight: "15px" }}
                  ></i>
                  {Info.name}
                </h1>
                <p>{Info.currentTemp}</p>
                <span>{Info.currentStatus}</span>
              </div>
              <div className="currentInfoContainer">
                <div className="titlename">
                  {Object.keys(Info.todayInfo).map((item) => {
                    return <p>{item}</p>;
                  })}
                </div>
                <div className="stastistic">
                  {Object.keys(Info.todayInfo).map((n1) => {
                    return <p>{Info.todayInfo[n1]}</p>;
                  })}
                </div>
              </div>
            </div>
            <div className="nextdayInfoContainer">
              {Info.lsDayForeCast.map((item, index) => {
                return (
                  <div
                    className="nextDayInfoContainer"
                    onClick={() => {
                      setInfoDetail(item.detail);
                      setInfoDay(item.Date);
                      props.openModal();
                    }}
                    key={index}
                  >
                    <div className="nextDayInfo">
                      <img
                        alt="jfskdljfl"
                        src={`https://teachingserver.onrender.com/weather/weatherIcon/${item.imgSrc}`}
                      ></img>
                      <p>{item.Date.day}</p>
                      <p>{item.tmp}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    )
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    contentState: state.contentState,
    defaultState: state.defaultState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: () => {
      dispatch({
        type: "OPEN_MODAL",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
