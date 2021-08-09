import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import { BrowserRouter, Route , Switch , Redirect} from 'react-router-dom';
import Charecter from './containers/Charecter/Charecter';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Switch>
          <Route path="/" exact  component={Home} />
          <Route path="/charecter/:id"  component={Charecter} />
          <Redirect to="/" />
          </Switch> 
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
