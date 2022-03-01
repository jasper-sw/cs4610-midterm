import React, { useState } from 'react';

function Counter(props) {
    const [currentCount, setCurrentCount] = useState(defaultCountVal);

    function defaultCountVal() {
        if (props.max < 0) {
            return props.max;
        }
        else if (props.max > 0 && props.min > 0) {
            return props.min;
        }
        else {
            return 0;
        }
    }

    function positiveIncrement() {
        const max = props.max;
        if (currentCount < max) {
            setCurrentCount(currentCount + 1)
            //console.log("set current count to: ", currentCount)
        }
        else {
            //console.log("hit max");
        }
    }

    function negativeIncrement() {
        const min = props.min;
        if (currentCount > min) {
            setCurrentCount(currentCount - 1)
            //console.log("set current count to: ", currentCount)
        }
        else {
            //console.log("hit min");
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h2 style={{textAlign: "center"}}>Counter</h2>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <button style={{color: "black", backgroundColor: "#5292a0", minWidth: 80, borderRadius: 11}} onClick={negativeIncrement}>-</button>
            <p style={{backgroundColor: "#dddcdd", borderRadius: 20, minWidth: 50, textAlign: "center"}}>{currentCount}</p>
            <button style={{color: "black", backgroundColor: "#5292a0", minWidth: 80, borderRadius: 11}} onClick={positiveIncrement}>+</button>
            </div>
        </div>
    );
}

export default Counter;