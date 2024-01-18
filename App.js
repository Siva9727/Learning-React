import React from "react";
import ReactDOM from "react-dom/client";

// // create react element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// // JSX- is a HTML like syntax
// const jsxHeading = <h1>heading in jsx 🚀</h1>;

// console.log(jsxHeading);

// // =================== React Component ========================
// // Class based Components - OLD WAY
// // functional components - NEW WAY (It's a function which returns some jsx code)

// const HeadingComponent = () => {
//   return <h1>Name react from functional component</h1>;
// };

// const Title = () => (
//   <div>
//     <h1 className="heading">Hello title inside react component</h1>
//   </div>
// );

// const HeadingComponent1 = () => (
//   <div className="container">
//     <Title/>
//     <Title></Title>
//     {Title()}
//     {/* To write js use this curly braces, to use react elements inside react components use this braces  */}
//     {jsxHeading}
//     <h1 className="title">Hi React from react Component!.</h1>
//   </div>
// );

// // create React dom
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent1 />);

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

const Header = () => (
    <div className="header">
        <div className="header-left">
            <div className="header-logo">
                <img src="https://i.ibb.co/z4z4z4z/logo.png" alt="logo" />
            </div>
        </div>
        <div className="header-right">
            <div className="header-nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
