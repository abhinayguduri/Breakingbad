import React from 'react';
import Aux from '../../hoc/Aux';
const layout =(props) =>(
    <Aux>
    <div id="navbar">
        <h2>
            <span id="element">Br</span>eaking <span id="element">Ba</span>d
        </h2>
    </div>
    {props.children}
    </Aux>
);

export default layout;
  