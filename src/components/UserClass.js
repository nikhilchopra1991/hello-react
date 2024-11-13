import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props.name + " Child Contructor");
        this.state = {
            count: 0,
            count1: 1,
            userInfo : {
                login: "Nikhil",
                type: "github user",
                avatar: "http:helloavatar.com"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/nikhilchopra1991");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })


        // console.log(this.props.name + " Child ComponentDidMount");
    }

    render() {
        // console.log(this.props.name + " Child Render");
        const {count, count1} = this.state;
        const { login, type, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <h4>Count: {count}</h4>
                <h4>Count1: {count1}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count +1,
                        count1: this.state.count1 +1
                    })
                }}>Count Increase</button>
                <h4>Name: {login}</h4>
                <h4>Type: {type}</h4>
                <h4>Avatar: {avatar_url}</h4>
            </div>
        )
    }
}

export default UserClass;