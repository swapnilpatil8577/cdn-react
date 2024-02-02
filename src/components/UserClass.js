import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name:"Dummy",
                location:"Dummy",
                avatar_url:"dummy"
            }
        }
        // console.log("Child constructor call")
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/swapnilpatil8577")

        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
        // console.log("Child Component did mount call")
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }
    
    render() {
        // console.log("Child render call")
        const {name, location, avatar_url} = this.state.userInfo

        return (
            <div className='user-card'>
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location || "India"}</h3>
                <h4>Contact: @swapnilpatil</h4>
            </div>
          )
    }
}

export default UserClass