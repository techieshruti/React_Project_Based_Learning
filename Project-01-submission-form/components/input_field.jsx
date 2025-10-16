import React from "react";

const Input = ({label,place}) => {  
    return(
        <div>
            <label>{label}</label>
            <input type="text" className="input" placeholder={"Enter your "+place}/>
        </div>
    )
}
export default Input