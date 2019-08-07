# "Hello World" using [React](http://react.org) and [Anime.js](https://animejs.com/)

This is a simple "hello world" app using a [functional component](https://reactjs.org/docs/components-and-props.html) and [Anime.js](https://animejs.com/).  It uses a [ref object](https://reactjs.org/docs/hooks-reference.html#useref) to reference the DOM element that will be animated.

## Step 1
[Create a basic react app](https://github.com/rwarford/hello-react#quick-start).

## Step 2
Install anime.js.
```bash
npm install --save animejs
```

## Step 3
Use the following code for App.js
```javascript
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
```

Then run the project:
```bash
npm run dev_server
```