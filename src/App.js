import {React, Suspense, lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    //Authentication code
    useEffect(() => {
        const data = {
            name: "Nikhil Chopra",
        }
        setUserName(data.name);
    }, [])

    return (
        <UserContext.Provider value={{userName : userName, setUserName}}>
            <div className="app">
                <UserContext.Provider value={{userName : userName, setUserName}}>
                    <Header></Header>
                </UserContext.Provider>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}


const routeConfig = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback="Loading...."><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeConfig} />);
    

// two types of component
// functional component
// class component

// const TitleComponent = () => {
//     return <h1>Hello from React Title</h1>
// }

// const HeadingComponent = () => {
//     return (
//         <div id="container">
//             {/* <TitleComponent /> */}
//             <h1>Hello from Heading Component</h1>
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<HeadingComponent />);

// React.createElement => is object => which is rendered as HTMLElement
// const heading = React.createElement('h1',{ id: 'heading', className: 'heading' }, 'Hello World from React App');

// JSX is HTML like or XML like syntax
// BABEL transpiles it to React.createElement --> check their playground on Babel website
// const jsxHeading = (
//     <h1 id="heading">
//         Hello from JSX
//     </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);



{/* <div id='parent'>
    <div id='child'>
        <h1>Hello from h1</h1>
        <h2>Hello from h2</h2>
    </div>
    <div id='child2'>
        <h1>Hello from h1</h1>
        <h2>Hello from h2</h2>
    </div>
</div> */}

// below we want to make a structure in react as Above to see what happens behind the scenes
// const parent = React.createElement('div', {id:'parent'},
//     [React.createElement('div', {id:'child'},
//         [
//             React.createElement('h1', null, 'Hello from Nikhil'),
//             React.createElement('h2', null, 'Hello from h2')
//         ]
//     )],
//     [React.createElement('div', {id:'child2'},
//         [
//             React.createElement('h1', null, 'Hello from h1'),
//             React.createElement('h2', null, 'Hello from h2')
//         ]
//     )]
// )

// const heading = React.createElement(
//     'h1', 
//     {id:'heading', className:'heading'}, 
//     'Hello World from React App'
// ); // create a html h1 element

// console.log(parent); // log the heading element

// const root = ReactDOM.createRoot(document.getElementById('root')); // get the root element

// root.render(parent); // render the heading element to the root element