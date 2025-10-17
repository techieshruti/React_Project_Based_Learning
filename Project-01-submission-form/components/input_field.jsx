import React from "react";

const Input = ({label,place}) => {  
    return(
        <div>
            <label className="input-label">{label}</label><br/>
            <input type="text" className="input" placeholder={"Enter your "+place}/>
        </div>
    )
}
export default Input