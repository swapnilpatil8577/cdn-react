import { createContext } from "react";

const UserContext = createContext({
    isLoggedInUser:"Default User"
})

export default UserContext;