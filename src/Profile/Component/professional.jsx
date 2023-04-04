// importing react from react
import React from "react";

// passing the props argument in a Profession functional component
 function Profession (props){

    // rendering the Profession value in the component

    const Profession = props.prof;
    return(
        <div>
            {/* rendering a heading with the text FullName: followed by the value of the Profession prop, also including  css inline styling */}
         <h3><strong className="h2">Profession:</strong>{Profession}</h3>
        </div>
    );
}
// exporting the component
export default Profession;
