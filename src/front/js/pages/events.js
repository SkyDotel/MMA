import React from "react";
import PropTypes from "prop-types";

Events.PropTypes ={
    name:PropTypes.string,
    date:PropTypes.string,
    location:PropTypes.string,
}

export function Events(props){
    return(
    <div>
        <h1> {props.name}</h1>
        <h2>{props.date}</h2>
        <h3>{props.location}</h3>
        <h2>Main Card:</h2>
        <h3>Under Card:</h3>
    </div>
    );
}; 