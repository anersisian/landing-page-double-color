import React from "react";
import { useEffect, useCallback } from "react";
import _ from "lodash";

import "./landing-page.styles.scss";
const LandingPage = () => {
  const leftSide = React.useRef(null);
  const rightSide = React.useRef(null);

  const handleMove = (e) => {
    const p = (e.clientX / window.innerWidth) * 100;

    leftSide.current.style.width = `${p}%`;
  };

  window.onmousemove = useCallback(
    _.throttle((e) => {
      handleMove(e);
    }, 16),
    []
  );

  return (
    <>
      <div id="left-side" className="side" ref={leftSide}>
        <h2 className="title">
          Today is going to be <span className="fancy">awesome!</span>
        </h2>
      </div>
      <div id="right-side" className="side" ref={rightSide}>
        <h2 className="title">
          Today is going to be <span className="fancy">wonderful!</span>
        </h2>
      </div>
    </>
  );
};

export default LandingPage;
