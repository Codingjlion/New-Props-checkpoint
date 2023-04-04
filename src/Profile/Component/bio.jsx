// importing react from react
import React from "react";

// passing the props argument in a Bio functional component
 function Bio (props){

    // rendering the Bio value in the component

    const bio = props.bio;
    return(
        <div>
            {/* rendering a heading with the text Bio: followed by the value of the bio prop, also including  css inline styling */}
         <h3><strong className="h2">Bio:</strong>{bio}</h3>
        </div>
    );
}
// exporting the component
export default Bio;
