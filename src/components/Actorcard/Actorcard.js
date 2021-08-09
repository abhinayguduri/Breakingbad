import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Actorinfo from '../Actorinfo/Actorinfo';
class Autocard extends Component{

    render(){
        return(
            <Aux>
        <div id="actor_card">
                <div id="actor_img" className="layers">
                      <img src={this.props.img} alt="actor img"/>          
                </div>
                <Actorinfo id={this.props.id} name={this.props.name} occupation={this.props.occupation} birthday={this.props.birthday} status={this.props.status}/>
                {/* {this.state.showinfo ? <Actorinfo key={this.props.key} name={this.props.name} occupation={this.props.occupation} birthday={this.props.birthday} status={this.props.status}/> : null} */}
         </div>
    </Aux>
        );
    }
}

export default Autocard;