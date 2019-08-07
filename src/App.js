// App.js

import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import anime from 'animejs';

const App = () => {
  const refHello = useRef(null);

  useEffect(() => {
    anime({
      targets: refHello.current,
      translateX: 250
    });
  });

  return (
    <div>
      <div ref={refHello}>Hello Anime!</div>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));