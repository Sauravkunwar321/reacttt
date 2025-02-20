import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
};

// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element: <AppLayout />

//   },
//   {
//     path:"/about",
//     element:<About />
//   },
// ]);
const jsxHeading= <h1>Namaste Saurav</h1>

const parent = React.createElement("div", {id:"parent"}, "Hello how are you");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

root.render(<AppLayout />);
