import React from "react";

const UserContext = React.createContext(); //CONTEXT

export default function AuthUser(){
    return(
        <UserContext.Provider value={{
            user: "Jelena Zelić",
            lastAccess: "07/03/2022",
            didLogOut: false
        }}>
            <User/>
            <LoggedOutUser/>
            <LoggedInUser/>
        </UserContext.Provider>
    );
}

function User(){
    return(
        <UserContext.Consumer>
            {value => 
            <p>The user is: {value.user}<br/>
            Last user access: {value.lastAccess}<br/>
            User did log out: {value.didLogOut ? "User did log out" : "User did not log out"}
            </p>
            }
        </UserContext.Consumer>
    );
}

function LoggedOutUser(){
    return(
        <UserContext.Consumer>
            {value => 
            <p>The user is: {value.user}<br/>
            Last user access: {value.lastAccess}<br/>
            User did log out: {value.didLogOut ? "User did log out" : "User did not log out"}
            </p>
            }
        </UserContext.Consumer>
    );
}

function LoggedInUser(){
    return(
        <UserContext.Consumer>
            {value => 
            <p>The user is: {value.user}<br/>
            Last user access: {value.lastAccess}<br/>
            User did log out: {value.didLogOut ? "User did log out" : "User did not log out"}
            </p>
            }
        </UserContext.Consumer>
    );
}