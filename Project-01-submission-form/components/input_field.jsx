import React from "react";

const Input = (props) => {  
    return(
        <div>
            <label>{props.label}</label>
            <input type="text" className="input" placeholder="Enter your first name"/>
        </div>
    )
}
export default Input