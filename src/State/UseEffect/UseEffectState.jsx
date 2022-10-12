import React from "react";
import { useLocation } from "react-router-dom";
import UseEffectContext from "./UseEffectContext";
export const UseEffectState = (props) => {
  const location = useLocation();

  return (
    <UseEffectContext.Provider value={{ location }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
