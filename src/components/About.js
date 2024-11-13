import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    };

    componentDidMount() {
        // console.log("Parent ComponentDidMount");
    }
    render () {
        // console.log("Parent Render");
        return(
            <div>
                <UserClass name = "First class" />
                {/* <UserClass name = "Second Class" /> */}
            </div>
        )
    }
}

export default About;




// const About = () => {
//     return(
//         <div>
//             {/* <User name = "Nikhil"/> */}
//             <UserClass name = "Nikhil class"/>
//         </div>
//     )
// }

// export default About;