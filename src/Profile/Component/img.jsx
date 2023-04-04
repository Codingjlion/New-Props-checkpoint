import React from "react";
import img from "../Component/IMG3.jpeg";


function Photo (props) {

    return(
        <div>
            <img className="photo-img" src={img} alt="Me" style={{width: 200}} />
            { props.children }
        </div>
    );
}

export default Photo;