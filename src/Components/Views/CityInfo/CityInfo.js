import React, { useEffect, useState } from "react";
import City from "./City";
import "./Loader.css";
import "./CityInfo.css";
import { connect } from "react-redux";
function CityInfo(props) {
  const [keyCity, setKeyCity] = useState("usa");
  const handleOnchangekeyCity = (event) => {
    setKeyCity(event.target.value);
  };
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      props.fetchdatafromcityapi(keyCity);
    }
  };
  useEffect(() => {
    props.fetchdatafromcityapi(keyCity);
  }, []);
  return (
    <div className="cityInfoContainer">
      <input
        value={keyCity}
        placeholder="Search location"
        onChange={handleOnchangekeyCity}
        onKeyDown={handleOnKeyDown}
      ></input>

      <div>
        <p
          style={{
            color: "white",
            fontWeight: "bolder",
            fontSize: "15px",
            textAlign: "end",
            marginTop: "5px",
          }}
        >
          Enter to search
        </p>
      </div>
      {props.cityState.isReady === true && <div className="loader"></div>}

      <div className="lsCityContainer">
        {props.cityState.lsCity.map((item, index) => {
          return (
            <div
              onClick={() => {
                props.fetchdatafromcontentapi({
                  lat: item.coord.lat,
                  lon: item.coord.lon,
                });
                props.closeInstruction();
              }}
              key={index}
            >
              <City Data={item} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    cityState: state.cityState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchdatafromcityapi: (data) => {
      dispatch({
        type: "FETCH_DATA_FROM_CITY_API",
        payload: data,
      });
    },
    fetchdatafromcontentapi: (data) => {
      dispatch({
        type: "FETCH_DATA_FROM_CONTENT_API",
        payload: data,
      });
    },
    closeInstruction: () => {
      dispatch({
        type: "DEFAULT_UI",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CityInfo);
