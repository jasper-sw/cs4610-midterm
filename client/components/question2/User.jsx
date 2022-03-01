import React, { useState } from 'react';

function User(props) {

    return (
        <div style={{padding: 7, backgroundColor: "#dddcdd", borderRadius: 20}}>
            User:
            {props.user["isAdmin"] == true ? (
            <div style={{backgroundColor: "green",  borderRadius: 5}}>
                <h1>Name: {props.user["name"]}</h1>
                <h1>Email: {props.user["email"]}</h1>
            </div>
        ) : (
            <div style={{backgroundColor: "grey", borderRadius: 5}}>
                <h1>Name: {props.user["name"]}</h1>
                <h1>Email: {props.user["email"]}</h1>
            </div>
        )}
        </div>
    );
}

export default User;