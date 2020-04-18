import React from 'react';

import '../stylesheets/App.scss';
import ShowList from './ShowList'
import {fetchShows}  from '../services/ReasonService';
import Loader from './Loader';
import { Switch,Route } from 'react-router-dom';
import ShowDetail from './ShowDetail'

class App extends React.Component {
  _isMounted = false;
  constructor(props) {
      super(props);
   
      this.state = {
        data:[],
        loading: true,
        showInfo:{
          id:''

        }
      }
      setTimeout(() => this.setState({loading: false}), 2000);
      this.fetchNewShows = this.fetchNewShows.bind(this);
      this.renderShowDetail = this.renderShowDetail.bind(this);
      this.handleShowInfo = this.handleShowInfo.bind(this);
     
  }

  handleShowInfo(target) {
    this.setState((prevState) => {
      return (prevState.showInfo.id = target.id);
    });
  }
  

  
    fetchNewShows() {
      fetchShows()
        .then(data => {
          this.setState({
            data: data
          });
        });
    }


componentDidMount(props){
  this._isMounted = true;
  this.fetchNewShows();
  console.log(this.state)
  
}

renderShowDetail(){

  const urlId = this.state.showInfo.id;
  const shows = this.state.data;
  for(let showObj of shows) {
    if(showObj.show.id === parseInt(urlId)) {
      return <ShowDetail show={showObj}/>
    }
  }
}


render() {
  const {data} = this.state;
  console.log(data)
  return (
    <div className="wrapper">
    <Switch>
    <Route exact path="/">
      <h1>Shows finder</h1>
      {this.state.loading ? (
          <Loader />
        ) : (
    <ShowList
    data = {data}
    handleShowInfo= {this.handleShowInfo}/>
        )}
       
    </Route>
    {/* <Route path="/Show/:id" render={this.renderShowDetail}/> */}
    </Switch>
    </div> 
  );
}
}

export default App;
