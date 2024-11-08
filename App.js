import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="heading">
        <div className="logo-container">
            <img 
                src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
                className="logo" >
            </img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
    

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