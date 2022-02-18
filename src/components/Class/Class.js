import "./Class.css";
import React from 'react';
function Class(props) {
    return(
        <div className="class">
            {props.name}
        </div>
    )
}
export default Class;