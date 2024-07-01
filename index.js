// Caret and tilde
// caret(^) is used for minor update

// tilde (~) is used for major update

// transitive dependency // one node module used many other modules hence they get installed

// npx parcel  index.html

import React from "react";
import ReactDOM from "react-dom/client";

// Create React element => Object , when we render this object to dom this becomes html element

// const heading = React.createElement("h1", {}, "Namaste React ");

// This is react Element
const heading = <h1 className="root"> Namaste React using JSX </h1>;

// React Component .. What is react Component in react
function  Title () {
  return <h1> This is Title Component</h1>;
}

const HeadingComponent = () => {
  return (
    <div id = "container">
      {Title()}
      
      <h1> This is functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
