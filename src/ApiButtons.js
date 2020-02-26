import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_ROOT } from "./Constants";
import {clearStore} from "./Redux/Actions"

const ApiButtons = ({handleLoad, stateChangedFlag, setStateChangedFlag, firstTime}) => {
  const shows = useSelector(state => state.shows);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const handleSave = () => {
    const data = { username: "", data: JSON.stringify(shows) };
    fetch(`${API_ROOT}/update?token=${token.access_token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(setStateChangedFlag(false)).catch(err => console.log(err));
    
  };

  return (
    <div className="apiButtons">
      {stateChangedFlag && !firstTime && <button className="button is-success" onClick={() => handleSave()}>
        Save
      </button>}
      <button className="button" onClick={() => handleLoad()}>
        Load data
      </button>
      <button className="button" onClick={() => dispatch(clearStore())}>
        Logout
      </button>
    </div>
  );
};

export default ApiButtons;
