import React, { useState } from "react";
import TestContext from "./TestContext";
export const TestState = (props) => {
  const [state, setState] = React.useState(false);
  const [time, setTime] = useState(true);
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(value);
  };
  setTimeout(() => {
    setTime(false);
  }, 3000);

  return (
    <TestContext.Provider value={{ state, setState, toggleDrawer, time }}>
      {props.children}
    </TestContext.Provider>
  );
};
export default TestState;
