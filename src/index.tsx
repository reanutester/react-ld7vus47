import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import Glitchy from "./glitch";


const GlitchTest = () => {
  
 
    return (
    <div className="glitch-test">
       <Glitchy transitionText="lol">testtt</Glitchy>
       </div>
    )
  
  }


customElements.define(
  "glitch-test",
  reactToWebComponent(GlitchTest, React, ReactDOM)
);
