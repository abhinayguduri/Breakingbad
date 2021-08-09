import React , {Component} from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import Data from '../../components/Data/Data';
class Charecter extends Component{
    state={
        actordata:[],
        quotes:"",
        oc:"",
        call:false
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('https://www.breakingbadapi.com/api/characters/'+id).then(response=>{
            this.setState({actordata:response.data[0]});
            var occupations = "";
            response.data[0].occupation.forEach(occ => {
                occupations+=occ+"\n";
            });
            this.setState({oc:occupations});
            axios.get('https://www.breakingbadapi.com/api/quote?author='+this.state.actordata.name).then(response=>{
                const quotes = response.data.map(quote=>{
                    return quote.quote;
                });
                var quotess = "";
                quotes.forEach(quote=>{
                    quotess+=quote+"\n";
                });
                this.setState({quotes:quotess});
                this.setState({call:true});
                
            });
            
        });
    }

    render(){
        const occupations = this.state.oc.split("\n").map(i=>{
            return <Data data={i}/>
        });
        var quotes;
        if(this.state.quotes==""){
             quotes = <Data data={"NA"}/>
        }else{
         quotes = this.state.quotes.split("\n").map(i=>{
            return <Data data={i}/>
        });
    }
        
        return(
            <Aux>
                <div id="container">
                {this.state.call ? <Aux><div id="char_img">
                        <img src={this.state.actordata.img} alt=""/>
                    </div>
                    <div id="char_info">
                        <table>
                            <tbody>
                            <tr>
                                <th><h3 id="label"><span><span id="element">Na</span>me</span></h3></th>
                                <th><h3 id="val">{this.state.actordata.name}</h3></th>
                            </tr>
                            <tr>
                                <th><h3 id="label"><span><span id="element">B</span>orn</span></h3></th>
                                <th><h3 id="val">{this.state.actordata.birthday}</h3></th>
                            </tr>
                            <tr>
                                <th><h3 id="label"><span>O<span id="element">cu</span>pation</span></h3></th>
                                <th><h3 id="val">{occupations}</h3></th>
                            </tr>
                            <tr>
                                <th><h3 id="label"><span>S<span id="element">ta</span>tus</span></h3></th>
                                <th><h3 id="val">{this.state.actordata.status}</h3></th>
                            </tr>
                            <tr>
                                <th><h3 id="label"><span><span id="element">Ni</span>ckname</span></h3></th>
                                <th><h3 id="val">{this.state.actordata.nickname}</h3></th>
                            </tr>
                            <tr>
                                <th><h3 id="label"><span>Act<span id="element">o</span>r</span></h3></th>
                                <th><h3 id="val">{this.state.actordata.portrayed}</h3></th>
                            </tr>
                            <tr>
                                <th><h3 id="label"><span><span id="element">Se</span>asons</span></h3></th>
                                <th><h3 id="val">{JSON.stringify(this.state.actordata.appearance)}</h3></th>
                            </tr>
                            <tr>
                                <th><h3 id="label"><span>Quo<span id="element">te</span>s</span></h3></th>
                                <th>{quotes}</th>
                            </tr>
                            </tbody>
                        </table>
                    </div></Aux> : <h3 id="error">Please wait while we fetch the data!</h3>}
                </div>
            </Aux>
        );
    }
}

export default Charecter;