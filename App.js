import React from "react";
import ReactDOM from "react-dom/client";

const StyleCard = {
    backgroundColor: "#f0f0f0",
}

const resData = [
    {
        id: 1,
        name: "KFC",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/KFC_logo-image.svg/640px-KFC_logo-image.svg.png"
    },
    {
        id: 2,
        name: "Meghana Foods",
        cuisines: "Biryani, Andhra, South Indian, Fast Food",
        rating: 4.8,
        cost: 200,
        deliveryTime: 30,
        image: "https://cdn.dotpe.in/logo/10090/ENT00316.png"
    },
    {
        id: 3,
        name: "Kannur Food Point",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://content3.jdmagicbox.com/v2/comp/bangalore/x4/080pxx80.xx80.181225203458.b4x4/catalogue/kannur-food-point-tavarekere-bangalore-fast-food-4lphxltujp.jpg"
    },
    {
        id: 4,
        name: "Call Me Chow",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 250,
        deliveryTime: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYffls1J0q0K8qY6xWeKv_6HlNYtuVT4YGqA&shttps://images.jdmagicbox.com/v2/comp/bangalore/y8/080pxx80.xx80.220810221326.v1y8/catalogue/call-me-chow-whitefield-bangalore-restaurants-766w6km1nk.jpg"
    },
    {
        id: 5,
        name: "Roti Wala",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://t3.ftcdn.net/jpg/05/78/09/64/240_F_578096425_Yldx9ggAGhhUvNJiwzS8P4gzuu7Z2jC3.jpg"
    },
    {

        id: 6,
        name: "Burger King",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://www.shutterstock.com/image-vector/logo-famous-identity-city-style-600nw-2275679435.jpg"
    },
    {
        id: 7,
        name: "MC Donalds",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/McDonald%27s_square_2020.svg"
    },
    {
        id: 8,
        name: "Pizza Hut",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/99caae01-bfed-4af8-a05f-a32eab4fc31f_11669.jpg"
    },
    {
        id: 9,
        name: "Dominos",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png"
    },
    {
        id: 10,
        name: "Biryani Blues",
        cuisines: "Burger, Biryani, American, Snacks, Fast Food",
        rating: 3.8,
        cost: 400,
        deliveryTime: 30,
        image: "https://cdn.dotpe.in/longtail/store-logo/8083669/bC8IwEqW.jpeg"
    },
]

const RestaurantCard = (props) => {
    const {name, cuisines, rating, cost, deliveryTime, image} = props.data;
    return (
        <div className="res-card" style={StyleCard}>
            <img
                src={image}
                className="res-logo"
                alt="res-logo"
            ></img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{"$ " + cost + " For Two"}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resData.map(restaurant => <RestaurantCard data={restaurant}></RestaurantCard>)}
            </div>
        </div>
    )
}

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
            <Body></Body>
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