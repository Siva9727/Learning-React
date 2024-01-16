import React from "react";
import ReactDOM from "react-dom/client";

// create react element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

// JSX- is a HTML like syntax
const jsxHeading = <h1>heading in jsx 🚀</h1>;

console.log(jsxHeading);

// =================== React Component ========================
// Class based Components - OLD WAY
// functional components - NEW WAY (It's a function which returns some jsx code)

const HeadingComponent = () => {
  return <h1>Name react from functional component</h1>;
};

const Title = () => (
  <div>
    <h1 className="heading">Hello title inside react component</h1>
  </div>
);

const HeadingComponent1 = () => (
  <div className="container">
    <Title/>
    <Title></Title>
    {Title()}
    {/* To write js use this curly braces, to use react elements inside react components use this braces  */}
    {jsxHeading}
    <h1 className="title">Hi React from react Component!.</h1>
  </div>
);

// create React dom
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
