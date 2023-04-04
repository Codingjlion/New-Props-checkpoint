// importing react from react
import React from "react";

// passing the props argument in a FullName functional component
 function FullName (props){

    // rendering the Fullname value in the component

    const FullName = props.fullname;
    return(
        <div>
            {/* rendering a heading with the text FullName: followed by the value of the FullName prop, also including  css inline styling */}
         <h3><strong className="h2">FullName:</strong> {FullName} </h3>
        </div>
    );
}
// exporting the component
export default FullName;
