import { useState } from "react";

const User = (props) => {
    const {count} = useState(0);
    const {count1} = useState(1);
    return(
        <div className="user-card">
            <h4>Count: {count}</h4>
            <h4>Count1: {count1}</h4>
            <h4>Name: {props.name}</h4>
            <h4>Location: Gurgaon</h4>
            <h4>Email: nikhilchopra1991gmail.com</h4>
        </div>
    )
}

export default User;
