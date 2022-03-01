import React, { useState } from 'react';

function Transaction(props) {
    return (
        <div style={{padding: 7, backgroundColor: "#dddcdd", borderRadius: 20}}>
            Transaction:
            <div>
                <h1>From: {props.trans["fromUser"]["name"]}</h1>
                <h1>To: {props.trans["toUser"]["name"]}</h1>
                <h1>Amount: {props.trans["amount"]}</h1>
            </div>
        </div>
    );
}

export default Transaction;