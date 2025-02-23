import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(()=> import("./components/Grocery"))


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> 
    </div>
  )
};

const Routing = () => {
    return(
        <>
        <Routes>
        <Route path="/" element={<AppLayout />}  >
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/> } />
        <Route path="grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> } />
        

        <Route path="restaurant/:resId" element={<RestaurantMenu />} /> 
        </Route>
        
        <Route path="*" element={<Error />} />

      </Routes>
        
        </>
    )
}

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

root.render(<BrowserRouter><Routing /></BrowserRouter>);
