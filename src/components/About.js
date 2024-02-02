import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
    constructor(props) {
        super(props)

        // console.log("Parent constructor call")
    }

    componentDidMount() {
        // console.log("Parent component did mount call")
    }
    render() {
        // console.log("Parent render call")
        return (
            <div>
                <h1>About</h1>
                {/* <User name="Swapnil Patil"/> */}
                <UserClass name="Swapnil Patil Class" location="Kolhapur Class"/>
                <h2>This is Namaste React Web Series</h2>
            </div>
        )        
    }
}

export default About;