import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            public_repos: "null",
            avatar_url: "null",
        },
    };
    console.log("child constructor called");
  }

   async componentDidMount(){
    console.log(this.props.name+"Child component did mount");

    //APi call

    const data = await fetch("  https://api.github.com/users/Sauravkunwar321");
    const json = await data.json();


    this.setState(
        {
            userInfo: json,
        }
    )
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("component unmount");
  }

  render() {
    console.log(this.props.name + "child render called");
    const { name, Location } = this.props;
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h3>public_repos: {this.state.userInfo.public_repos}</h3>
      </div>
    );
  }
}

export default UserClass;
