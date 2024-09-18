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
const parent = React.createElement('div', {id:'parent'},
    [React.createElement('div', {id:'child'},
        [
            React.createElement('h1', null, 'Hello from h1'),
            React.createElement('h2', null, 'Hello from h2')
        ]
    )],
    [React.createElement('div', {id:'child2'},
        [
            React.createElement('h1', null, 'Hello from h1'),
            React.createElement('h2', null, 'Hello from h2')
        ]
    )]
)

// const heading = React.createElement(
//     'h1', 
//     {id:'heading', className:'heading'}, 
//     'Hello World from React App'
// ); // create a html h1 element

console.log(parent); // log the heading element

const root = ReactDOM.createRoot(document.getElementById('root')); // get the root element

root.render(parent); // render the heading element to the root element