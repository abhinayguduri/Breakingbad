import React from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';
const actorinfo = (props)=>(
    <Aux>
    <div  id="actor_info" className="layers">
                <p><span>Name: </span>{props.name}</p>
                <p><span>Occupation: </span>{props.occupation}</p>
                <p><span>Born: </span>{props.birthday}</p>
                <p><span>Status: </span>{props.status}</p>
                <p><Link to={'charecter/'+props.id}><button id="view_btn">View</button></Link></p>
    </div>
    </Aux>
);
export default actorinfo;