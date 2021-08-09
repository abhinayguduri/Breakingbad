import React , {Component} from 'react';
import Actorcard from '../../components/Actorcard/Actorcard';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import ReactPaginate from 'react-paginate';
class Home extends Component{
    state={
        actors:[],
        pageNumber:0,
        call:false,
        haserror:false
    }
    componentDidMount(){
            axios.get('https://www.breakingbadapi.com/api/characters').then(response=>{  
            this.setState({actors:response.data}); 
            this.setState({call:true});
        });
        
        
       
    }
    changePage(p){
        this.setState({pageNumber:p.selected});
        console.log(p.selected)
    }
    render(){
        const actorsPerPage = 10;
        const actorsVisited = this.state.pageNumber * actorsPerPage;
        const actors = this.state.actors.slice(actorsVisited,actorsVisited+actorsPerPage).map(actor=>{
            var oc = "";
            actor.occupation.forEach(occ => {
                oc+=occ+", ";
            });
            return <Actorcard key={actor.char_id} id={actor.char_id} name={actor.name} occupation={oc} birthday={actor.birthday} status={actor.status} img={actor.img}/>
        }); 
        const pageCount = Math.ceil(this.state.actors.length/actorsPerPage);
        return(
            <Aux>
                 <div id="actor_cards">

                     {this.state.call  ? actors: <h3 id="error">Please wait while we fetch the data!</h3>}
                 </div>
                {this.state.call ? <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={this.changePage.bind(this)}
                    containerClassName ={"paginationBttns"}
                    previousLinkClassName={"PreviousBttn"}
                    nextLinkClassBttn={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                 />: null }
            </Aux>
        );
    }
}

export default Home;